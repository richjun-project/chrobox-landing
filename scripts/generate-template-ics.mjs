/**
 * Emit every schedule template as an iCalendar file (/templates/<slug>.ics and
 * /<locale>/templates/<slug>.ics) so a visitor can drop the plan into Google
 * Calendar, Apple Calendar or Outlook instead of copying rows by hand. People who
 * search for "<profession> schedule template" want something they can use, not
 * only a table to look at.
 *
 * Built from the same localized template data the page renders, so the file and
 * the page never disagree. Events repeat on weekdays at floating local times
 * (no time zone), which places 08:00 at 08:00 wherever the calendar is.
 * Generated at build time and not committed (see .gitignore).
 */
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync, writeFileSync } from 'fs';
import { createJiti } from 'jiti';
import { urlForPath } from './seo-routes.mjs';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const jiti = createJiti(import.meta.url, { interopDefault: true });
const { scheduleTemplates, localizeScheduleTemplate } = await jiti.import(join(ROOT, 'src/data/scheduleTemplates.ts'));
const { SEO_LOCALES, localizedPath } = await jiti.import(join(ROOT, 'src/lib/seo.ts'));
const { uiCopy, formatCopy } = await jiti.import(join(ROOT, 'src/lib/uiCopy.ts'));

// RFC 5545 §3.3.11: escape backslash, semicolon, comma and newlines in TEXT values.
const escapeText = (text) => text.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');

// RFC 5545 §3.1: lines longer than 75 octets are folded; never split a UTF-8 character.
function fold(line) {
  const out = [];
  let current = '';
  let bytes = 0;
  for (const char of line) {
    const size = Buffer.byteLength(char);
    const limit = out.length === 0 ? 75 : 74; // continuation lines start with a space
    if (bytes + size > limit) {
      out.push(current);
      current = '';
      bytes = 0;
    }
    current += char;
    bytes += size;
  }
  out.push(current);
  return out.map((part, index) => (index === 0 ? part : ` ${part}`)).join('\r\n');
}

const pad = (n) => String(n).padStart(2, '0');

// First weekday series starts on the Monday on or after the build date.
const now = new Date();
const monday = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
monday.setUTCDate(monday.getUTCDate() + ((8 - monday.getUTCDay()) % 7));
const day = `${monday.getUTCFullYear()}${pad(monday.getUTCMonth() + 1)}${pad(monday.getUTCDate())}`;
const stamp = `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`;

function localTime(hhmm) {
  const [h, m] = hhmm.trim().split(':').map(Number);
  if (!Number.isInteger(h) || !Number.isInteger(m)) throw new Error(`bad time "${hhmm}"`);
  return `${day}T${pad(h)}${pad(m)}00`;
}

let files = 0;
for (const locale of SEO_LOCALES) {
  const ui = uiCopy(locale.code);
  for (const template of scheduleTemplates) {
    const localized = localizeScheduleTemplate(template, locale.code);
    const pagePath = localizedPath(locale.code, `/templates/${template.slug}`);
    const pageUrl = urlForPath(pagePath);
    const name = formatCopy(ui.templateHeroTitle, { profession: localized.profession });

    const lines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Chrobox//Schedule Templates//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      `X-WR-CALNAME:${escapeText(`${name} · Chrobox`)}`,
    ];
    localized.schedule.forEach((block, index) => {
      const [start, end] = block.time.split('-');
      lines.push(
        'BEGIN:VEVENT',
        `UID:${locale.code}-${template.slug}-${index + 1}@chrobox.net`,
        `DTSTAMP:${stamp}`,
        `DTSTART:${localTime(start)}`,
        `DTEND:${localTime(end)}`,
        'RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR',
        `SUMMARY:${escapeText(block.task)}`,
        `URL:${pageUrl}`,
        `DESCRIPTION:${escapeText(`${name}\n${pageUrl}`)}`,
        'TRANSP:OPAQUE',
        'END:VEVENT',
      );
    });
    lines.push('END:VCALENDAR');

    const dir = join(ROOT, 'public', dirname(pagePath).replace(/^\//, ''));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, `${template.slug}.ics`), `${lines.map(fold).join('\r\n')}\r\n`, 'utf8');
    files += 1;
  }
}
console.log(`[ics] wrote ${files} schedule template calendars (weekdays from ${day})`);
