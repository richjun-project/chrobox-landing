#!/usr/bin/env python3
"""
SNS 마케팅 카드 이미지를 public/marketing/ 에 생성한다.

소재(카드 파일명 + 문구)의 단일 원천은 백엔드의 src/marketing/content.ts 다 —
이 스크립트는 그 파일을 파싱해서 카드를 만든다. 문구를 고치려면 content.ts 를
고치고 이 스크립트를 다시 돌린 뒤 랜딩을 배포하면 된다.
(Meta API 는 이미지를 공개 URL 로만 받기 때문에 랜딩에 정적 호스팅한다.)

usage:
    python3 scripts/gen-marketing-cards.py
"""
import re
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
CONTENT_TS = Path.home() / "Develop/timebox/src/marketing/content.ts"
OUT_DIR = ROOT / "public" / "marketing"

W, H = 1080, 1350
FONT_PATH = "/System/Library/Fonts/AppleSDGothicNeo.ttc"
LOGO_PATH = ROOT / "public" / "logo-mark.webp"

# 랜딩 테마 토큰과 같은 팔레트 (src/theme/index.ts)
INK = (23, 23, 23)
MUTED = (82, 82, 82)
SLOT_STYLE = {
    "tip": {"bg": ((236, 253, 245), (255, 255, 255)), "accent": (32, 201, 151), "label": "TIMEBOXING"},
    "focus": {"bg": ((239, 246, 255), (255, 255, 255)), "accent": (77, 171, 247), "label": "FOCUS"},
    "retro": {"bg": ((250, 245, 255), (255, 255, 255)), "accent": (151, 117, 250), "label": "REVIEW"},
}


def parse_topics(source: str):
    """content.ts 에서 (slot, card, headline) 목록을 뽑는다."""
    topics = []
    slot = None
    for line in source.splitlines():
        pool = re.search(r"export const (TIP|FOCUS|RETRO)_TOPICS", line)
        if pool:
            slot = pool.group(1).lower()
            continue
        item = re.search(
            r"card:\s*'([^']+)'\s*,\s*headline:\s*'([^']+)'\s*,\s*angle:\s*'([^']+)'",
            line,
        )
        if item and slot:
            topics.append((slot, item.group(1), item.group(2), item.group(3)))
    return topics


def vertical_gradient(top, bottom):
    base = Image.new("RGB", (1, H))
    px = base.load()
    for y in range(H):
        t = y / (H - 1)
        px[0, y] = tuple(round(top[i] + (bottom[i] - top[i]) * t) for i in range(3))
    return base.resize((W, H))


def wrap(draw, text, font, max_width):
    """한국어는 단어 경계가 헐거워서, 어절 단위로 채우되 넘치면 글자 단위로 쪼갠다."""
    lines, line = [], ""
    for word in text.split(" "):
        trial = f"{line} {word}".strip()
        if draw.textlength(trial, font=font) <= max_width:
            line = trial
            continue
        if line:
            lines.append(line)
        while draw.textlength(word, font=font) > max_width:
            cut = len(word)
            while cut > 1 and draw.textlength(word[:cut], font=font) > max_width:
                cut -= 1
            lines.append(word[:cut])
            word = word[cut:]
        line = word
    if line:
        lines.append(line)
    return lines


def timeline_motif(img, accent):
    """브랜드 모티프 — 하루를 시간 상자로 나눈 타임라인을 카드 하단에 옅게 깐다."""
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    top, row_h = H - 420, 76
    for i in range(4):
        y = top + i * row_h
        d.line([(96, y), (W - 96, y)], fill=accent + (40,), width=2)
    # 채워진 '상자' 두 개 — 계획된 블록을 상징
    d.rounded_rectangle([(96, top + 6), (620, top + row_h - 10)], 14, fill=accent + (58,))
    d.rounded_rectangle([(300, top + row_h * 2 + 6), (900, top + row_h * 3 - 10)], 14, fill=accent + (38,))
    return Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")


def render(slot, card, headline, angle, out_path):
    style = SLOT_STYLE[slot]
    img = vertical_gradient(*style["bg"])
    img = timeline_motif(img, style["accent"])
    draw = ImageDraw.Draw(img)

    # 상단 액센트 바
    draw.rectangle([(0, 0), (W, 12)], fill=style["accent"])

    label_font = ImageFont.truetype(FONT_PATH, 32)
    draw.text((96, 130), style["label"], font=label_font, fill=style["accent"])
    draw.line([(96, 186), (176, 186)], fill=style["accent"], width=4)

    # 헤드라인 — 길이에 따라 크기를 낮춰 3줄 안에 담고, 상단 1/3 지점에 고정
    for size in (94, 84, 74, 64):
        font = ImageFont.truetype(FONT_PATH, size)
        lines = wrap(draw, headline, font, W - 192)
        if len(lines) <= 3:
            break
    line_h = int(size * 1.34)
    y = 300
    for line in lines:
        draw.text((96, y), line, font=font, fill=INK)
        y += line_h

    # 부제 — 헤드라인만으로는 비는 여백을 채우고, 카드 자체를 읽을 거리로 만든다
    sub_font = ImageFont.truetype(FONT_PATH, 42)
    y += 36
    for line in wrap(draw, angle, sub_font, W - 220)[:4]:
        draw.text((96, y), line, font=sub_font, fill=MUTED)
        y += 62

    # 하단 브랜드
    if LOGO_PATH.exists():
        logo = Image.open(LOGO_PATH).convert("RGBA").resize((72, 72))
        img.paste(logo, (96, H - 168), logo)
        brand_x = 188
    else:
        brand_x = 96
    brand_font = ImageFont.truetype(FONT_PATH, 40)
    sub_font = ImageFont.truetype(FONT_PATH, 30)
    draw.text((brand_x, H - 166), "크로박스", font=brand_font, fill=INK)
    draw.text((brand_x, H - 116), "타임박싱 플래너 · chrobox.net", font=sub_font, fill=MUTED)

    img.save(out_path, "PNG", optimize=True)


def main():
    if not CONTENT_TS.exists():
        sys.exit(f"소재 원천을 찾을 수 없습니다: {CONTENT_TS}")
    topics = parse_topics(CONTENT_TS.read_text(encoding="utf-8"))
    if not topics:
        sys.exit("content.ts 에서 소재를 파싱하지 못했습니다.")
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for slot, card, headline, angle in topics:
        render(slot, card, headline, angle, OUT_DIR / f"{card}.png")
    print(f"카드 {len(topics)}장 생성: {OUT_DIR}")


if __name__ == "__main__":
    main()
