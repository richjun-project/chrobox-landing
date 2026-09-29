import type { BlogFaq, BlogPostMeta } from '../types/blog';

// Batch 9 — 2026-09-30. Korean-first intent posts (app lock, studying, phone
// addiction, daily reflection) and the first-party data post.
// does-timeboxing-work: first-party usage data. Every figure in it comes from
// src/data/usageStats.ts (the same object that emits the Dataset JSON-LD), so
// when the numbers are refreshed, update both the markdown and that file.

const faqsDoesTimeboxingWork: BlogFaq[] = [
  {
    question: 'Does timeboxing actually work?',
    questionKo: '타임박싱은 정말 효과가 있나요?',
    answer: 'In Chrobox usage data, tasks that were given a start time and a duration were completed 48.1% of the time, compared with 17.6% for tasks left on the list without a time slot — about 2.7 times as often (5,077 tasks from 250 people, December 2025 to September 2026). The gap held when the same people were compared with themselves: 35 of 41 users finished more of their time-boxed tasks. It is observational data, so it shows a strong association rather than proof of cause.',
    answerKo: 'Chrobox 사용 데이터에서 시작 시각과 길이를 정해 둔 할 일은 48.1%가 완료됐고, 시간 없이 목록에만 둔 할 일은 17.6%가 완료됐습니다. 약 2.7배 차이입니다(250명이 계획한 할 일 5,077개, 2025년 12월~2026년 9월). 같은 사람끼리 비교해도 차이는 유지됐습니다. 41명 중 35명이 시간을 정한 할 일을 더 많이 끝냈습니다. 관찰 데이터이므로 인과를 증명하지는 않지만 강한 연관성을 보여 줍니다.',
  },
  {
    question: 'What is the best length for a time box?',
    questionKo: '타임박스는 몇 분이 적당한가요?',
    answer: 'Completion stayed close to 50% for boxes of up to 90 minutes and dipped to about 44–45% for boxes longer than 90 minutes. 60 minutes was the most common length (51% of boxes), partly because it is the default when a task is dropped onto an hour in Chrobox. A practical rule from the data: keep boxes at 90 minutes or less and split anything longer.',
    answerKo: '90분 이하 박스는 완료율이 50% 안팎으로 비슷했고, 90분을 넘으면 44~45%로 떨어졌습니다. 가장 흔한 길이는 60분(전체의 51%)이었는데, Chrobox에서 할 일을 한 시간 칸에 놓을 때 기본값이 60분인 영향도 있습니다. 데이터로 본 실용적인 기준은 박스를 90분 이하로 잡고 그보다 긴 일은 나누는 것입니다.',
  },
  {
    question: 'What time of day are planned tasks most likely to get done?',
    questionKo: '계획한 일은 하루 중 언제 가장 잘 끝나나요?',
    answer: 'Early boxes were finished most often. Time boxes starting between 5:00 and 8:59 were completed 62.3% of the time, and the rate fell steadily through the day to 33.2% for boxes starting between 21:00 and 23:59. If one task must get done today, schedule it before noon.',
    answerKo: '이른 시간 박스가 가장 잘 끝났습니다. 5시~8시 59분에 시작하는 박스는 62.3%가 완료됐고, 완료율은 하루 동안 꾸준히 떨어져 21시~23시 59분 시작 박스는 33.2%였습니다. 오늘 꼭 끝내야 하는 일이 하나 있다면 정오 전에 배치하세요.',
  },
  {
    question: 'How many tasks should I plan in a day?',
    questionKo: '하루에 할 일을 몇 개 계획하는 게 좋나요?',
    answer: 'The median day in the data had 5 planned tasks. Days with 6–8 tasks had the highest average completion (42.7%), while days with 9 or more tasks finished the whole list only once in 198 days (0.5%). Planning more than about eight tasks makes a finished day very unlikely.',
    answerKo: '데이터에서 하루 계획 개수의 중앙값은 5개였습니다. 6~8개를 계획한 날의 평균 완료율이 42.7%로 가장 높았고, 9개 이상 계획한 날은 198일 중 단 하루(0.5%)만 목록을 전부 끝냈습니다. 8개를 넘기면 하루를 다 끝낼 가능성이 크게 낮아집니다.',
  },
];

const faqs_how_to_lock_apps_on_iphone: BlogFaq[] = [
  {
    question: "How do I lock apps on my iPhone?",
    questionKo: "아이폰에서 앱을 잠그는 방법은 무엇인가요?",
    answer: "There are three separate options depending on your goal. Use Require Face ID or Hide and Require Face ID (iOS 18 and later, found by long-pressing the app icon) if you want to keep an app private from other people. Use Screen Time App Limits if you want to cap how many minutes per day you personally spend in an app. Use scheduled blocking, either through Screen Time Downtime or an app like Chrobox, if you want certain apps blocked only during specific hours, such as while working.",
    answerKo: "목적에 따라 세 가지 방법이 있습니다. 다른 사람에게 앱을 보이고 싶지 않다면 앱 아이콘을 길게 눌러 나오는 \"Face ID 필요\" 또는 \"가리기 및 Face ID 필요\"(iOS 18 이상)를 사용합니다. 본인이 하루에 쓰는 시간 자체를 줄이고 싶다면 스크린 타임의 앱 시간 제한을 사용합니다. 일하는 시간처럼 특정 시간대에만 앱을 막고 싶다면 스크린 타임 다운타임이나 Chrobox 같은 앱을 이용한 시간대 차단을 사용합니다.",
  },
  {
    question: "Does locking an app with Face ID stop me from using it too much?",
    questionKo: "Face ID로 앱을 잠그면 사용량도 줄어드나요?",
    answer: "No. Face ID app lock only adds an authentication step before the app opens; once you authenticate with your own face, you have full access. It protects your privacy from other people picking up your phone, but it does nothing to reduce your own usage, since you are always able to unlock it yourself.",
    answerKo: "아니요. Face ID 앱 잠금은 앱을 열기 전에 인증 단계를 하나 추가할 뿐입니다. 본인의 얼굴로 인증하면 그대로 전부 이용할 수 있습니다. 다른 사람이 내 폰을 들고 앱을 열어보는 것은 막아주지만, 정작 나 자신의 사용량은 전혀 줄여주지 못합니다. 잠금을 여는 사람도 결국 나이기 때문입니다.",
  },
  {
    question: "Can I get around a Screen Time limit I set for myself?",
    questionKo: "스스로 설정한 스크린 타임 제한도 우회할 수 있나요?",
    answer: "Yes, easily, unless you take one extra step. When a self-set limit runs out, iOS shows an Ignore Limit for Today button that removes the restriction with a single tap. To make a limit hold, set a Screen Time passcode under Settings, Screen Time, Use Screen Time Passcode, and have someone other than yourself know that code.",
    answerKo: "네, 한 가지 조치를 해두지 않으면 아주 쉽게 우회할 수 있습니다. 직접 설정한 제한 시간이 끝나면 \"오늘 하루 무시\" 같은 버튼이 뜨고 한 번만 누르면 제한이 풀립니다. 제한이 실제로 유지되게 하려면 설정 → 스크린 타임 → 스크린 타임 암호 사용에서 암호를 걸고, 그 암호를 본인이 아닌 다른 사람이 알고 있게 해야 합니다.",
  },
  {
    question: "What is the difference between Screen Time App Limits and Downtime?",
    questionKo: "앱 시간 제한과 다운타임은 어떻게 다른가요?",
    answer: "App Limits cap specific apps or categories by minutes per day and can optionally block the app once time runs out. Downtime instead blocks almost everything on a schedule, such as every evening or a custom set of hours, only allowing apps you have explicitly marked as always-allowed. Downtime is closer to scheduled, time-based blocking, while App Limits is closer to a daily usage budget.",
    answerKo: "앱 시간 제한은 특정 앱이나 카테고리의 하루 사용 시간을 정해두고, 다 쓰면 원할 경우 앱을 막을 수 있는 기능입니다. 다운타임은 특정 앱 하나가 아니라 정해둔 시간대(예: 매일 저녁) 동안 미리 허용해둔 앱을 제외한 거의 모든 앱을 막는 기능입니다. 다운타임은 시간대 기반 차단에 가깝고, 앱 시간 제한은 하루 사용량 예산에 가깝습니다.",
  },
];

const faqs_how_to_stop_checking_phone_while_studying: BlogFaq[] = [
  {
    question: "How do I stop checking my phone while studying?",
    questionKo: "공부할 때 핸드폰을 안 보려면 어떻게 해야 하나요?",
    answer: "Combine three things: keep your phone physically out of reach rather than just face down nearby, block the specific apps that distract you only during your study sessions using Screen Time, Digital Wellbeing Focus mode, or an app like Chrobox, and study in fixed time boxes with a clear goal for each one instead of open-ended \"study time.\" Doing all three removes the repeated in-the-moment decision to check your phone.",
    answerKo: "세 가지를 함께 하는 것이 가장 확실합니다. 엎어두는 정도가 아니라 손이 닿지 않는 곳에 핸드폰을 물리적으로 치워두고, 스크린 타임이나 디지털 웰빙 포커스 모드, 또는 Chrobox 같은 앱을 이용해 방해되는 앱만 공부 시간에 차단하고, 막연한 \"공부 시간\" 대신 각 박스마다 명확한 목표가 있는 정해진 타임박스로 공부를 나누는 것입니다. 이 세 가지를 함께 하면 매 순간 핸드폰을 볼지 말지 다시 결정할 필요가 없어집니다.",
  },
  {
    question: "Does it help to just put my phone face down next to me?",
    questionKo: "핸드폰을 그냥 엎어서 옆에 두는 것만으로도 도움이 되나요?",
    answer: "Less than you might think. A 2017 study by Ward, Duke, Gneezy, and Bos found that the mere presence of a person's own smartphone reduced available cognitive capacity, even when it was off and untouched. Putting real distance between you and your phone, such as another room or a closed bag, works better than leaving it face down on the same desk.",
    answerKo: "생각보다 효과가 적습니다. 2017년 Ward, Duke, Gneezy, Bos의 연구에 따르면 본인 소유의 스마트폰은 꺼져 있고 만지지 않아도 그저 가까이 있다는 사실만으로 사용 가능한 인지 능력이 줄어들었습니다. 같은 책상에 엎어두는 것보다 다른 방이나 닫힌 가방처럼 실제 거리를 두는 편이 훨씬 효과적입니다.",
  },
  {
    question: "What is a good time box length for studying?",
    questionKo: "공부할 때 타임박스는 몇 분이 적당한가요?",
    answer: "A 50-minute study box followed by a 10-minute break is a common, reasonable starting point, but it is a personal choice rather than a fixed rule or a Pomodoro feature built into a specific app. Shorter boxes like 30 minutes can work better for dense or difficult material, while longer boxes around 90 minutes can suit reading or writing tasks that need momentum to get into.",
    answerKo: "50분 공부 후 10분 휴식이 흔히 쓰이는 합리적인 출발점이지만, 이는 고정된 규칙이나 특정 앱에 내장된 뽀모도로 기능이 아니라 개인의 선택입니다. 내용이 밀도 높고 어렵다면 30분처럼 짧은 박스가, 몰입에 시간이 걸리는 독서나 글쓰기 과제라면 90분 정도의 긴 박스가 더 잘 맞을 수 있습니다.",
  },
  {
    question: "Can I block distracting apps while studying without installing anything new?",
    questionKo: "새로운 앱을 설치하지 않고도 공부 중 방해 앱을 차단할 수 있나요?",
    answer: "Yes. On iPhone, use Screen Time Downtime scheduled for your study hours, or an App Limit on specific apps, with a Screen Time passcode held by someone else so you cannot easily override it. On Android, look for Digital Wellbeing Focus mode under Settings, then Digital Wellbeing and parental controls, though the exact menu wording differs by phone manufacturer. A planning app like Chrobox can automate this by tying the block directly to your study time boxes.",
    answerKo: "가능합니다. 아이폰에서는 공부 시간대에 맞춰 스크린 타임 다운타임을 예약하거나 특정 앱에 앱 시간 제한을 걸고, 본인이 쉽게 해제하지 못하도록 다른 사람이 스크린 타임 암호를 쥐고 있게 하면 됩니다. 안드로이드에서는 설정 → 디지털 웰빙 및 자녀 보호 기능에서 포커스 모드를 찾아보되, 제조사마다 정확한 메뉴 이름은 다를 수 있습니다. Chrobox 같은 계획형 앱을 쓰면 이 차단을 공부 타임박스에 자동으로 연결할 수 있습니다.",
  },
];

const faqs_reduce_phone_addiction: BlogFaq[] = [
  {
    question: "How do I reduce phone addiction?",
    questionKo: "폰중독에서 벗어나려면 어떻게 해야 하나요?",
    answer: "Start by measuring your actual screen time and pickups with your phone's built-in dashboard, then remove the easiest triggers: turn off non-essential notifications, add friction to your worst apps, and replace idle checking with a planned activity. Blocking your most distracting apps during specific focus periods, rather than trying to quit cold turkey, tends to work better because it does not require constant willpower.",
    answerKo: "먼저 스마트폰 기본 기능으로 실제 사용 시간과 잠금 해제 횟수를 측정하는 것부터 시작합니다. 그다음 가장 쉬운 트리거부터 없애면 됩니다. 불필요한 알림을 끄고, 가장 많이 보는 앱에 약간의 장벽을 추가하고, 습관적으로 켜던 순간을 계획된 다른 활동으로 채우는 방식입니다. 완전히 끊으려고 하기보다 특정 집중 시간대에만 차단하는 방식이 의지력에 덜 의존하기 때문에 더 오래 유지됩니다.",
  },
  {
    question: "Is phone addiction a real diagnosis?",
    questionKo: "폰중독은 진짜 진단명인가요?",
    answer: "Compulsive phone checking is a common behavior pattern, not a formal medical diagnosis in most classification systems. This guide treats it as an everyday habit problem you can address with tracking and friction. If phone use is seriously interfering with your work, relationships, sleep, or mood, it is worth talking to a doctor or therapist rather than relying on self-help steps alone.",
    answerKo: "습관적으로 스마트폰을 확인하는 행동은 흔한 습관 패턴이지 대부분의 진단 기준에서 공식 의학적 진단명은 아닙니다. 이 글은 이를 추적과 장벽으로 해결할 수 있는 일상적인 습관 문제로 다룹니다. 만약 스마트폰 사용이 일, 인간관계, 수면, 기분에 심각하게 영향을 준다면 셀프 관리에만 의존하지 말고 의사나 전문가와 상담하는 것이 좋습니다.",
  },
  {
    question: "What is the fastest way to cut screen time?",
    questionKo: "스크린타임을 가장 빠르게 줄이는 방법은 무엇인가요?",
    answer: "Turning off non-essential notifications and removing your top 2-3 distracting apps from your home screen usually produces the fastest visible drop in daily screen time, often within the first week, because it removes the triggers that pull your attention without you deciding to pick up the phone.",
    answerKo: "불필요한 알림을 끄고 가장 많이 보는 앱 2~3개를 홈 화면에서 치우는 것이 보통 가장 빠르게 눈에 띄는 효과를 줍니다. 대개 첫 일주일 안에 하루 스크린타임이 줄어드는데, 스스로 결정하지 않았는데도 주의를 끌던 트리거 자체가 사라지기 때문입니다.",
  },
  {
    question: "Do phone blocking apps actually work?",
    questionKo: "앱 차단 기능이 실제로 효과가 있나요?",
    answer: "Blocking works best when it is scoped to specific times rather than always-on, because always-on blocks get disabled the first time you need the app for something legitimate. Tools that block distracting apps only during a planned focus period, like Chrobox does for the length of a time-boxed task, tend to stick because the restriction has a clear end time.",
    answerKo: "차단은 하루 종일 걸어두는 것보다 특정 시간대에만 적용할 때 더 잘 작동합니다. 하루 종일 차단은 정당한 이유로 앱이 필요한 순간이 오면 바로 해제하게 되기 때문입니다. 크로박스처럼 계획한 시간배치가 진행되는 동안에만 앱을 차단하는 방식은 차단이 끝나는 시점이 명확해서 더 잘 유지되는 경향이 있습니다.",
  },
];

const faqs_daily_reflection_template: BlogFaq[] = [
  {
    question: "How do I write a daily reflection?",
    questionKo: "하루 회고는 어떻게 쓰나요?",
    answer: "The simplest way is a 3-line reflection: one line for what went well, one for what did not, and one specific thing to try tomorrow. It takes under two minutes, which is short enough to keep up every day, and it works for any day since it does not require much structure or energy to fill in.",
    answerKo: "가장 간단한 방법은 3줄 회고입니다. 잘한 것 한 줄, 아쉬운 것 한 줄, 내일 시도할 구체적인 것 한 줄을 쓰면 됩니다. 2분도 걸리지 않을 만큼 짧아서 매일 이어가기 좋고, 큰 구조나 에너지가 필요하지 않아서 어떤 날에도 무난하게 쓸 수 있습니다.",
  },
  {
    question: "What is a KPT reflection template?",
    questionKo: "KPT 회고 템플릿이란 무엇인가요?",
    answer: "KPT stands for Keep, Problem, Try: what worked and should continue, what did not work, and one concrete change to try next. It comes from agile team retrospectives but works well for a single person reviewing a single day, especially when you are actively trying to improve a specific habit or routine over time.",
    answerKo: "KPT는 Keep(유지), Problem(문제), Try(시도)의 줄임말로, 잘 되어서 계속할 것, 잘 안 됐던 것, 그리고 다음에 시도해볼 구체적인 변화 하나를 정리하는 방식입니다. 원래 애자일 팀 회고에서 쓰이던 방식이지만 혼자 하루를 돌아볼 때도 잘 맞으며, 특정 습관이나 루틴을 시간을 두고 개선하려 할 때 특히 유용합니다.",
  },
  {
    question: "What is the best daily reflection template for time-boxed days?",
    questionKo: "시간배치를 쓰는 날에는 어떤 회고 템플릿이 좋나요?",
    answer: "A plan-versus-actual check works best if you schedule your day into time blocks: record how many boxes you planned, how many you actually finished, why the rest slipped, and one change for tomorrow's plan. This shows whether the plan itself needs adjusting, which a mood rating alone will not tell you.",
    answerKo: "하루를 시간 단위로 계획한다면 계획 대비 실행 체크가 가장 잘 맞습니다. 오늘 계획한 시간배치 수, 실제로 끝낸 수, 나머지가 밀린 이유, 내일 계획에 반영할 변화 하나를 기록하는 방식으로, 기분 점수 하나만으로는 알 수 없는 계획 자체의 문제를 보여줍니다.",
  },
  {
    question: "What is the biggest mistake people make with daily reflection?",
    questionKo: "하루 회고를 쓸 때 가장 흔한 실수는 무엇인가요?",
    answer: "The most common mistakes are turning the reflection into a list of self-criticism, writing so much that you never go back and reread past entries, and skipping the habit entirely on bad days, which is usually when a short entry is most valuable. Pairing every negative observation with one forward-looking action helps avoid the first mistake, and keeping entries short helps with the other two.",
    answerKo: "가장 흔한 실수는 회고가 자기비판 목록이 되어버리는 것, 너무 길게 써서 나중에 다시 읽지 않게 되는 것, 그리고 힘든 날에 아예 건너뛰는 것입니다. 힘든 날이야말로 짧은 기록이 가장 가치 있는 날인 경우가 많습니다. 아쉬운 점마다 앞으로 할 일을 하나씩 짝지어두면 첫 번째 실수를, 기록을 짧게 유지하면 나머지 두 실수를 피할 수 있습니다.",
  },
];

export const enBatch9: BlogPostMeta[] = [
  {
    slug: 'does-timeboxing-work',
    title: 'Does Timeboxing Work? Completion Data from 5,077 Planned Tasks',
    date: '2026-09-30',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['timeboxing', 'timeboxing-statistics', 'productivity-data', 'planning', 'research'],
    excerpt: 'Tasks given a time slot were completed 48.1% of the time; tasks left on the list, 17.6%. First-party data from 5,077 tasks planned by 250 Chrobox users, with methodology and limits.',
    image: '/screenshots/en/2.webp',
    readTime: 8,
    lang: 'en',
    dataset: true,
    faqs: faqsDoesTimeboxingWork,
  },
  {
    slug: 'how-to-lock-apps-on-iphone',
    title: "How to Lock Apps on iPhone: 3 Methods (Face ID Lock, Screen Time Limits, Scheduled Blocking)",
    date: '2026-09-30',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ["lock-apps-iphone", "screen-time", "face-id", "app-limits", "digital-wellbeing"],
    excerpt: "Three real ways to lock apps on iPhone: Face ID app lock for privacy, Screen Time App Limits for daily caps, and scheduled blocking for specific hours, with a comparison table.",
    image: '/screenshots/en/8.webp',
    readTime: 8,
    lang: 'en',
    faqs: faqs_how_to_lock_apps_on_iphone,
  },
  {
    slug: 'how-to-stop-checking-phone-while-studying',
    title: "How to Stop Checking Your Phone While Studying: A Practical Routine",
    date: '2026-09-30',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ["study-focus", "phone-distraction", "screen-time", "digital-wellbeing", "timeboxing"],
    excerpt: "A practical routine to stop checking your phone while studying: physical distance, scheduled app blocking, and fixed time boxes, backed by research and first-party completion data.",
    image: '/screenshots/en/1.webp',
    readTime: 9,
    lang: 'en',
    faqs: faqs_how_to_stop_checking_phone_while_studying,
  },
  {
    slug: 'reduce-phone-addiction',
    title: "How to Reduce Phone Addiction: A 7-Step Plan to Cut Screen Time",
    date: '2026-09-30',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ["phone-addiction", "reduce-screen-time", "digital-wellbeing", "screen-time-app", "focus-habits"],
    excerpt: "A practical, non-clinical 7-step plan to reduce compulsive phone checking and screen time, using built-in tools plus planned focus blocks.",
    image: '/screenshots/en/8.webp',
    readTime: 8,
    lang: 'en',
    faqs: faqs_reduce_phone_addiction,
  },
  {
    slug: 'daily-reflection-template',
    title: "Daily Reflection Template: 4 Ready-to-Use Formats (Including KPT)",
    date: '2026-09-30',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ["daily-reflection", "reflection-template", "kpt-retrospective", "journaling-habit", "self-review"],
    excerpt: "Four copy-ready daily reflection templates, from a 2-minute 3-line reflection to KPT and a plan-versus-actual check for time-boxed days.",
    image: '/screenshots/en/4.webp',
    readTime: 8,
    lang: 'en',
    faqs: faqs_daily_reflection_template,
  },
];

export const koBatch9: BlogPostMeta[] = [
  {
    slug: 'does-timeboxing-work',
    title: '타임박싱, 정말 효과 있을까? 할 일 5,077개의 완료율 데이터',
    date: '2026-09-30',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['타임박싱', '타임박싱 효과', '생산성 데이터', '계획', '통계'],
    excerpt: '시간을 정해 둔 할 일은 48.1%, 목록에만 둔 할 일은 17.6%가 완료됐습니다. Chrobox 사용자 250명이 계획한 할 일 5,077개로 본 1차 데이터와 측정 방법, 한계까지 정리했습니다.',
    image: '/screenshots/ko/2.webp',
    readTime: 8,
    lang: 'ko',
    dataset: true,
    faqs: faqsDoesTimeboxingWork,
  },
  {
    slug: 'how-to-lock-apps-on-iphone',
    title: "아이폰 앱 잠금 방법 3가지: Face ID 잠금·스크린타임 제한·시간대 차단",
    date: '2026-09-30',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ["아이폰 앱잠금", "스크린타임", "페이스아이디잠금", "앱시간제한", "디지털웰빙"],
    excerpt: "아이폰 앱 잠금 방법 3가지를 비교합니다. Face ID 잠금, 스크린타임 앱 시간 제한, 시간대별 차단의 목적과 우회 가능성을 정리했습니다.",
    image: '/screenshots/ko/8.webp',
    readTime: 8,
    lang: 'ko',
    faqs: faqs_how_to_lock_apps_on_iphone,
  },
  {
    slug: 'how-to-stop-checking-phone-while-studying',
    title: "공부할 때 핸드폰 안 보는 법: 거리 두기·앱 차단·타임박싱 루틴",
    date: '2026-09-30',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ["공부폰잠금", "공부앱차단", "스크린타임", "디지털웰빙", "타임박싱"],
    excerpt: "공부할 때 핸드폰 안 보는 법을 거리 두기, 시간대별 앱 차단, 타임박싱 루틴으로 정리했습니다. 2017년 연구와 Chrobox 실제 데이터를 근거로 합니다.",
    image: '/screenshots/ko/1.webp',
    readTime: 9,
    lang: 'ko',
    faqs: faqs_how_to_stop_checking_phone_while_studying,
  },
  {
    slug: 'reduce-phone-addiction',
    title: "폰중독 벗어나는 법: 스크린타임을 줄이는 7단계",
    date: '2026-09-30',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ["폰중독", "스크린타임줄이기", "디지털웰빙", "스마트폰중독", "집중습관"],
    excerpt: "스크린타임 앱으로 먼저 측정하고, 트리거를 없애고, 집중 시간대에만 차단하는 현실적인 7단계 폰중독 탈출법입니다.",
    image: '/screenshots/ko/8.webp',
    readTime: 8,
    lang: 'ko',
    faqs: faqs_reduce_phone_addiction,
  },
  {
    slug: 'daily-reflection-template',
    title: "하루 회고 쓰는 법: 5분이면 되는 회고 템플릿 4가지 (KPT·3줄 회고)",
    date: '2026-09-30',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ["하루회고", "회고템플릿", "KPT회고", "3줄회고", "자기성찰습관"],
    excerpt: "2분이면 끝나는 3줄 회고부터 KPT, 시간배치용 계획 대비 실행 체크까지 바로 쓸 수 있는 하루 회고 템플릿 4가지를 소개합니다.",
    image: '/screenshots/ko/4.webp',
    readTime: 8,
    lang: 'ko',
    faqs: faqs_daily_reflection_template,
  },
];

export const contentBatch9: Record<string, Record<string, string>> = {
  en: {
    'does-timeboxing-work': `
# Does Timeboxing Work? Completion Data from 5,077 Planned Tasks

Most advice about timeboxing rests on the same few studies and a lot of personal testimony. We build a timeboxing app, so we can look at something more direct: what actually happens to tasks after people plan them. This page reports what we found in Chrobox usage data — including the parts that are less flattering, and the limits of what the numbers can tell you.

## The short answer

Tasks that were given a start time and a duration were marked complete **48.1%** of the time. Tasks that stayed on the list without a time slot were completed **17.6%** of the time. That is roughly **2.7 times** as often.

The difference did not come from a handful of very organized people. When we compared each person with themselves, 35 of 41 people finished more of their time-boxed tasks than their unscheduled ones.

## About this data

| Item | Value |
|---|---|
| Source | Anonymized task records from the Chrobox app (iOS and Android), signed-in accounts |
| Period | Tasks dated 3 December 2025 to 29 September 2026 |
| Sample | 5,077 tasks planned by 250 people across 799 planned days |
| Extracted | 30 September 2026 |

- **Time-boxed** means the task had both a start time and a duration on the day timeline.
- **Completed** means the person checked the task off. A task someone finished but never checked off counts as not completed.
- We excluded events imported from device calendars, tasks dated today or later, operator and test accounts, and deleted accounts.
- Only aggregate figures are published. No group smaller than 30 tasks is reported.

## Finding 1: Time-boxed tasks were completed 2.7× as often

| | Tasks | People | Completed |
|---|---|---|---|
| With a time box | 2,317 | 190 | 48.1% |
| Without a time box | 2,760 | 192 | 17.6% |

Two checks make this more than a headline number:

- **Heavy users.** The ten most active accounts created 55% of all tasks. With them removed, the gap barely moves: 42.8% for time-boxed tasks against 14.2% for unscheduled ones.
- **Same person, both ways.** Among the 41 people who planned at least five tasks of each kind, average completion was 52.9% with a time box and 15.0% without. 35 did better with time boxes, 2 did worse and 4 were even.

**What this does not prove.** This is observational data, not an experiment. People may give time slots to tasks they already intend to do, and a slot also works as a reminder. So the data shows a strong association, not a controlled causal effect. It is consistent with research on implementation intentions: a meta-analysis of 94 studies by Gollwitzer and Sheeran (2006) found that deciding in advance when and where you will act has a medium-to-large effect on follow-through.

## Finding 2: Most boxes are an hour, and length matters less than you think

| Box length | Share of boxes |
|---|---|
| 60 minutes | 50.8% |
| 30 minutes | 14.9% |
| 120 minutes | 9.3% |
| 90 minutes | 4.1% |
| 180 minutes | 3.1% |

The median box was 60 minutes. Part of that is the app itself: when a task is dropped onto an hour on the Chrobox timeline, it starts as a 60-minute box, and many people keep the default.

Completion by length is the more useful result:

| Box length | Tasks | Completed |
|---|---|---|
| 15 minutes or less | 35 | 48.6% |
| 16–30 minutes | 429 | 48.7% |
| 31–45 minutes | 56 | 53.6% |
| 46–60 minutes | 1,215 | 48.7% |
| 61–90 minutes | 135 | 50.4% |
| 91–120 minutes | 238 | 45.0% |
| More than 120 minutes | 209 | 44.0% |

Up to 90 minutes, length made almost no difference. Past 90 minutes, completion dropped by about four to five points. Short boxes were not easier to finish than hour-long ones.

## Finding 3: Morning boxes get done, evening boxes slip

| Box start time | Tasks | People | Completed |
|---|---|---|---|
| 00:00–04:59 | 43 | 20 | 34.9% |
| 05:00–08:59 | 318 | 81 | 62.3% |
| 09:00–11:59 | 473 | 95 | 52.4% |
| 12:00–14:59 | 448 | 102 | 52.0% |
| 15:00–17:59 | 447 | 102 | 44.7% |
| 18:00–20:59 | 380 | 96 | 40.0% |
| 21:00–23:59 | 208 | 65 | 33.2% |

The pattern is steady: the later a box starts, the less likely it is to be finished. A box starting before 9:00 was nearly twice as likely to be completed as one starting after 21:00. Some of this is who plans early — people who schedule a 6:30 task may simply be more consistent — but the practical advice is the same: put the task you most need to finish before noon.

## Finding 4: Past eight tasks, a finished day is rare

The median planned day had **5 tasks**.

| Tasks planned that day | Days | Average share completed | Days with every task done |
|---|---|---|---|
| 1 | 131 | 7.6% | 7.6% |
| 2 | 91 | 18.7% | 14.3% |
| 3 | 105 | 29.2% | 14.3% |
| 4–5 | 131 | 26.3% | 13.7% |
| 6–8 | 143 | 42.7% | 18.2% |
| 9 or more | 198 | 30.7% | 0.5% |

Days with 6–8 tasks had the best completion. Days with nine or more tasks finished the entire list once in 198 days. Days with a single task look worst, but many of those are first days — someone trying the app with one test task — so read that row with care.

## Finding 5: Priorities help, and Thursday beats Sunday

Tasks marked as a priority were completed 44.5% of the time (853 tasks), against 28.9% for everything else (4,224 tasks).

| Day | Tasks | Completed |
|---|---|---|
| Monday | 940 | 31.4% |
| Tuesday | 854 | 34.2% |
| Wednesday | 990 | 31.9% |
| Thursday | 815 | 36.2% |
| Friday | 612 | 28.6% |
| Saturday | 355 | 27.3% |
| Sunday | 511 | 25.4% |

Midweek was strongest, with Thursday highest. Weekends were weakest, and Sunday was the lowest day of the week.

## What we could not measure

- **App blocking.** Only 19 time-boxed tasks from 8 people had app blocking attached in this period. That is too few to report a completion rate, so we do not.
- **Guest mode.** Earlier versions of the app offered a guest mode that kept tasks on the device, so those tasks are not in this data.
- **Who the users are.** 67% of accounts in the sample use the app in Korean and 24% in English. Results may not transfer to every culture or job.

## How to use this in your own planning

1. **Give every must-do task a start time.** On the list alone, fewer than one in five tasks got done.
2. **Keep boxes at 90 minutes or less.** Split anything longer into two boxes.
3. **Put the most important task before noon.** Morning boxes were finished far more often.
4. **Stop at about eight boxes a day.** Beyond that, you are planning a day you will not finish.
5. **Mark one to three priorities.** Marked tasks were completed noticeably more often.

## How to cite this data

Chrobox (2026). *Does Timeboxing Work? Completion Data from 5,077 Planned Tasks.* https://chrobox.net/blog/does-timeboxing-work — data extracted 30 September 2026.
`,
    'how-to-lock-apps-on-iphone': `
# How to Lock Apps on iPhone: 3 Methods (Face ID Lock, Screen Time Limits, Scheduled Blocking)

There are three separate ways to lock an app on iPhone, and they solve different problems. On iOS 18 and later, you can require Face ID to open a specific app for privacy. Screen Time App Limits let you cap how long you can use an app or category each day, with an optional hard block once the time runs out. And scheduled blocking, either built manually with Screen Time or automated by a planning app like Chrobox, blocks a chosen set of apps only during specific hours you set in advance. Most people who actually want to reduce phone use end up combining a Screen Time passcode with a schedule, because a limit you can turn off yourself is not really a limit.

## Method 1: Lock an App with Face ID (iOS 18 and later)

On iOS 18 and later, Apple added a built-in way to lock individual apps behind Face ID, Touch ID, or your passcode, directly from the Home Screen.

To use it:

1. Long-press the app icon until the quick actions menu appears.
2. Tap Require Face ID (the wording may show Touch ID or passcode instead, depending on your device).
3. If you also want the app hidden from your Home Screen, App Library, notifications, and search, choose the Hide and Require Face ID option instead. A hidden app moves into a separate, locked folder.

Once this is turned on, opening the app requires Face ID authentication every time, even for someone who already has your phone unlocked.

It is important to be clear about what this does and does not do. This feature is about privacy, not about reducing how much you use an app. It stops someone else from casually opening your banking app or messages if they pick up your unlocked phone. It does nothing to stop you from opening the app yourself: you just authenticate with your own face and go straight in. If your goal is to check social media less, Face ID lock will not help, because you are the one unlocking it.

## Method 2: Limit or Block an App with Screen Time App Limits

Screen Time App Limits are Apple's tool for capping usage, and they are the right choice when the goal is "less of this app per day" rather than "keep this app private."

To set one up:

1. Open Settings, then go to Screen Time.
2. Tap App Limits, then Add Limit.
3. Choose specific apps or a whole category (like Social or Games).
4. Set a daily time allowance.
5. Turn on Block at End of Limit if you want the app to actually stop opening once time runs out, rather than just showing a reminder.

You can also set Downtime from the same Screen Time menu, which schedules a window (for example, overnight) when only apps you allow stay accessible, instead of limiting a specific app by minutes.

The catch with both App Limits and Downtime is enforcement. If you set the limit yourself, a screen appears when time runs out offering Ignore Limit for Today, and one tap undoes the whole thing. This is fine as a gentle nudge, but it will not hold up against a real urge to keep scrolling. To make a Screen Time limit actually stick, go to Settings, Screen Time, and turn on Use Screen Time Passcode with a code that is different from your normal phone passcode, ideally one that someone else knows and you do not, such as a partner or accountability friend. Without that separation, the "limit" is really just a reminder you can dismiss.

## Method 3: Schedule App Blocking Around a Plan

The third approach flips the logic: instead of a daily minute budget, you block a chosen set of apps only during specific hours, tied to what you are supposed to be doing at that time. You can build this manually with Screen Time Downtime scheduled for your work hours, or use a planning app that ties blocking to your actual calendar of tasks.

Chrobox, a timeboxing app, works this way: when you place a task on your daily timeline and attach a block profile to it, the apps you chose are blocked automatically for the length of that time box, using Apple's Screen Time API (the same FamilyControls and Screen Time framework Apple's own tools use) and a custom lock screen. The block starts when the box starts, ends when the box ends, and only applies for that day, so it does not linger into the evening if your plan changes. This suits people whose problem is not total daily usage but specific hours, like wanting Instagram blocked from 9 to 11 while working, but fully available in the evening.

## Comparing the Three Methods

| Method | Purpose | What it blocks | Easy to bypass yourself | Needs a passcode someone else holds | Best for |
|---|---|---|---|---|---|
| Face ID app lock | Privacy | Nothing usage-wise; just requires authentication to open | Yes, if you know your own Face ID or passcode | No | Keeping specific apps private from other people |
| Screen Time App Limits | Usage cap | Selected apps or categories, after a daily time budget | Yes, via Ignore Limit for Today, unless someone else holds the Screen Time passcode | Yes, to make it stick | Reducing total daily time on an app |
| Scheduled blocking (Downtime or Chrobox) | Time-based focus | Selected apps, only during set hours | Depends on who set the schedule and holds the passcode | Yes, to make it stick | Blocking distractions during specific work or study hours |

## Which Method Should You Use

If your concern is someone else opening an app on your phone, Face ID lock is the direct answer and takes under a minute to set up. If your concern is that you personally spend too much time on an app across the whole day, Screen Time App Limits with a passcode held by someone else is the more honest tool. If your concern is specifically about certain hours, like wanting to stay off social apps while working a particular block of time but not caring what happens outside it, scheduled blocking is the better fit, whether you build the schedule manually in Downtime or let it follow your plan automatically the way Chrobox does.

Many people end up using more than one at once: Face ID lock on a banking or messaging app for privacy, and a scheduled block on social and games apps during work hours. None of these tools are competing with each other; they answer different questions.
`,
    'how-to-stop-checking-phone-while-studying': `
# How to Stop Checking Your Phone While Studying: A Practical Routine

The fastest way to stop checking your phone while studying is to combine three things: put the phone physically out of reach instead of just face down, block the specific apps that pull you away only during your study sessions, and plan your studying as fixed time boxes rather than open-ended "study time." None of these require willpower in the moment, because the decision is made once, before you sit down, instead of over and over while you study.

## Why Just Having Your Phone Nearby Hurts Focus

It is tempting to think that as long as you do not pick up your phone, having it sit face down next to you is harmless. Research suggests otherwise. In a 2017 study often referred to as "Brain Drain," researchers Adrian Ward, Kristen Duke, Ayelet Gneezy, and Maarten Bos found that the mere presence of a person's own smartphone reduced the cognitive capacity they had available for other tasks, even when the phone was off and not in use. The effect showed up simply from the phone being nearby, not from actually checking it.

The practical takeaway is not "turn your phone off" but "put it somewhere that is not simply within arm's reach." A phone in another room, a bag zipped shut, or a drawer across the room all work better than a phone face-down on the same desk, because the goal is distance, not just muting notifications.

## Block the Apps That Actually Pull You Away, Only While You Study

Distance alone does not stop the reflex to check a phone that is still nearby, like on a shared desk or a family study table, and it is not realistic for everyone to leave their phone in another room for hours. The second piece is blocking the specific apps that cause the problem, but only during the hours you are actually supposed to be studying.

This matters because a blanket, all-day block is hard to sustain and easy to resent, while a block tied to your actual study session ends on its own once the session is over. You can do this without any extra app:

- On iPhone, use Screen Time Downtime scheduled for your study block, or set an App Limit on the specific apps you struggle with, ideally with a Screen Time passcode someone else holds so you cannot tap Ignore Limit when tempted.
- On Android, most phones include a Digital Wellbeing Focus mode, generally found under Settings, then Digital Wellbeing and parental controls, then Focus mode, where you pick distracting apps to pause during a set time. The exact menu names vary by phone manufacturer, so look for "Digital Wellbeing," "Focus mode," or a similarly named screen-time section in your settings if the wording is different.

If you plan your day with a timeboxing app like Chrobox, this step can happen automatically: when you attach a block profile to a study task on your timeline, the apps you chose stay blocked for exactly the length of that time box and unblock themselves the moment it ends, so you never have to remember to turn a block on or off.

## Plan Studying as Time Boxes, Not Open-Ended Sessions

An unstructured plan like "study chemistry tonight" leaves the door open to checking your phone the moment you feel even slightly stuck, because there is no clear unit of work to finish first. Breaking study time into fixed boxes, for example a 50-minute box followed by a 10-minute break, gives you a concrete stopping point that is not your phone. The 50/10 split is simply one reasonable choice, not a fixed rule and not a Pomodoro-style feature baked into any particular app; you can just as easily use 30/5 or 90/15 depending on the subject and how long you can actually hold focus.

Two planning habits make a noticeable difference:

- Put your hardest or most draining subject in the earliest box of your session, while your attention is freshest, rather than saving it for last when you are more likely to reach for your phone instead.
- Write down what "done" looks like for each box before you start it (for example, "finish 10 practice problems" rather than "study math"), since a vague box is much easier to abandon halfway through for a phone check.

Chrobox's own usage data, drawn from 5,077 planned tasks across 250 users between December 2025 and September 2026, is instructive here even though it measures task completion rather than phone checking specifically: tasks placed into a scheduled time box were completed 48.1% of the time, compared to 17.6% for tasks with no time slot at all, and boxes started in the early morning (5:00 to 8:59) were completed 62.3% of the time versus 33.2% for boxes started late at night (21:00 to 23:59). This is observational data from Chrobox's own users, not a controlled experiment, but it lines up with the common experience that vague, late-scheduled study time is where phone checking creeps in the most.

## A Sample Study Day for Exam Prep

Here is one way to structure a study day using fixed time boxes, phone distance, and app blocking together, for someone preparing for an exam:

| Time | Box | Phone / app blocking |
|---|---|---|
| 07:30 - 08:20 | Hardest subject, 50 min | Phone in another room; distracting apps blocked |
| 08:20 - 08:30 | Break | Phone allowed, but stay off distracting apps if possible |
| 08:30 - 09:20 | Second subject, 50 min | Phone in another room; distracting apps blocked |
| 09:20 - 09:30 | Break | Phone allowed |
| 09:30 - 10:20 | Practice problems, 50 min | Phone in another room; distracting apps blocked |
| 10:20 - 10:40 | Longer break | Phone fully allowed |
| 10:40 - 11:30 | Review weak areas, 50 min | Phone in another room; distracting apps blocked |

You can build a day like this manually with a paper planner, a phone locked in a drawer, and Screen Time Downtime covering the four study boxes, or set it up in Chrobox, where each study box carries its own app block that turns on and off automatically as you move through the day, and you can start a focus countdown on any box when you sit down.

## Closing Thought

None of these three pieces, physical distance, scheduled app blocking, and fixed time boxes, works especially well alone. A phone across the room still gets fetched during a vague, undefined study session; a strict app block on a phone sitting on your desk still leaves you staring at a locked screen instead of your notes; and a perfectly timed box does nothing if your phone is buzzing next to it the whole time. Together, they remove the moment-by-moment decision entirely, which is the part willpower is bad at holding onto for hours at a time.
`,
    'reduce-phone-addiction': `
# How to Reduce Phone Addiction: A 7-Step Plan to Cut Screen Time

The fastest way to reduce phone addiction is to measure your actual usage first, remove the triggers that make you pick up your phone without deciding to, and then block your worst apps only during specific periods when you are trying to focus. You do not need to delete social media or switch to a flip phone. Most people can cut meaningful screen time in two to three weeks by working through a short, ordered list of changes rather than trying to fix everything at once.

This guide is written for everyday compulsive phone checking, not a clinical condition. If your phone use is seriously affecting your job, relationships, sleep, or mood, please talk to a doctor or therapist. What follows is a practical, non-judgmental plan for the common experience of picking up your phone more than you would like.

## Why phone checking is hard to control

Smartphones are not designed to be put down. Notifications, infinite scroll feeds, and variable rewards (you never know if the next refresh has something interesting) are engineered to pull attention back again and again. On top of that, research by Ward and colleagues (2017), published as 'Brain Drain' in the Journal of the Association for Consumer Research, found that the mere presence of your smartphone nearby, even turned off and face down, can reduce the cognitive capacity you have available for other tasks. Your phone does not have to be in use to be a drain on your attention.

This matters because it reframes the problem. You are not lacking willpower. You are fighting a device that was built by very smart people specifically to capture your attention, while also paying an ambient cognitive tax just from having it nearby. The fix is not more willpower, it is changing your environment so that good behavior requires less of it.

## Step 1: Measure before you change anything

Before you decide what to fix, look at the numbers. Both major platforms already track this for you:

- iPhone: Settings then Screen Time shows your daily and weekly average screen time, a breakdown by app and category, and your number of pickups and notifications per day.
- Android: Settings then Digital Wellbeing and Parental Controls shows the same core numbers, daily usage, app breakdown, unlocks, and notifications received.

Open it now and just look, without judging yourself. Write down three numbers: total daily screen time, number of pickups, and number of notifications. You will use these again in Step 7 to see if anything actually changed. Most people are surprised by at least one of the three, usually pickups or notifications, since those happen in the background of a day without registering consciously.

## Step 2: Identify your trigger apps

Look at the per-app breakdown from Step 1. You are looking for two different things:

- The app that eats the most total time. This is often a video, social, or short-form content app.
- The app you open most often out of habit, even for a few seconds at a time. This is sometimes a messaging app, sometimes a specific social app, and is not always the same as the time leader.

Name your top two or three trigger apps specifically. Vague goals like 'use my phone less' fail because they give you nothing concrete to change. A goal like 'stop opening this specific app between tasks' is something you can actually act on.

## Step 3: Turn off non-essential notifications

Go into each trigger app's notification settings and turn off everything that is not a direct message from a real person. Marketing pushes, 'someone liked your post,' recommendation alerts, and re-engagement nudges ('you have new content waiting') are the main mechanism apps use to interrupt you and pull you back in. Keep notifications for things that genuinely need your immediate attention, like calls, texts, and calendar reminders, and turn off nearly everything else. This single step often produces a visible drop in pickups within a few days, because you are no longer being pinged into opening the app in the first place.

## Step 4: Add friction to your worst apps

Once notifications are quieter, the remaining problem is habitual, no-notification-needed opening: unlocking your phone and tapping the app icon out of boredom or habit. Add small amounts of friction so this requires a conscious decision instead of an automatic one:

- Move trigger apps off your home screen and out of your dock, into a folder on a secondary screen.
- Turn your phone to grayscale during the hours you most want to cut down (iPhone: Settings, Accessibility, Display & Text Size, Color Filters; on Android it is usually under accessibility settings or Digital Wellbeing's Bedtime mode, depending on the manufacturer). Color is part of what makes feeds compelling, and removing it noticeably reduces the pull.
- Log out of an app so that opening it requires re-entering a password, rather than an instant tap-in.

None of these changes make the app impossible to use. They just add a two or three second pause, which is often enough for the urge to pass or for you to notice you are doing it out of habit rather than intent.

## Step 5: Replace the checking slot with a planned activity

Removing a habit without replacing it tends to fail, because the urge to check still shows up at the same moments, waiting in line, between meetings, right after waking up. Instead of just trying to resist, put something else in that slot on purpose. This is where timeboxing helps: if you plan your day into blocks ahead of time, the moments that used to be filled with idle phone checking get filled with a specific next task instead, so there is less unstructured time for the habit to fill.

## Step 6: Block your worst apps during focus periods

For the app that is hardest to resist even after Steps 3 through 5, scope a hard block to specific time windows rather than trying to keep it off all day, which tends to get abandoned the first time you have a legitimate reason to use the app. Both platforms have first-party tools for this:

- iPhone: Screen Time app limits and Downtime, built on Apple's Screen Time API.
- Android: Digital Wellbeing's app timers and Focus mode (menu names vary by manufacturer).

Chrobox also blocks apps, but ties the block to your planned time boxes instead of a flat daily limit: when you attach a block profile to a task or routine, the apps you choose are blocked automatically only for that box's duration, then unblock on their own when the box ends. On iPhone this runs on Apple's Screen Time API (FamilyControls and a custom shield screen); on Android it uses an accessibility service overlay. There is no separate 'block now' button to fight with, the block is scoped to the work period you already planned, which is often easier to stick to than an all-day limit.

## Step 7: Review your numbers weekly

Go back to the same Screen Time or Digital Wellbeing dashboard once a week and compare against the numbers you wrote down in Step 1. Look specifically at pickups and notifications, not just total time, since those two often move first and are a better early signal that the friction and blocking changes are working. If a number is not moving, it usually means one specific app still has notifications on, or is still sitting on your home screen where you see it constantly. Adjust that one thing rather than overhauling the whole plan.

| Step | What to do | Time needed |
|---|---|---|
| 1. Measure | Check Screen Time (iPhone) or Digital Wellbeing (Android) for daily time, pickups, and notifications | 5 minutes |
| 2. Identify triggers | Name your top 2-3 apps by time and by open frequency | 5 minutes |
| 3. Cut notifications | Turn off non-essential alerts in trigger apps | 10 minutes |
| 4. Add friction | Move apps off home screen, enable grayscale, log out of one app | 10 minutes |
| 5. Replace the slot | Plan your day into time boxes so idle moments have a task instead | 10-15 minutes, once a day |
| 6. Block during focus time | Set an app limit or attach a block profile to a focus box | 5 minutes to set up |
| 7. Review weekly | Compare this week's numbers to your baseline | 5 minutes, once a week |

## A note on what this guide is not

This is a plan for reducing everyday compulsive checking, not a treatment for a diagnosed condition. Some people find that even after trying friction, blocking, and replacement activities, their phone use is still connected to anxiety, low mood, sleep problems, or a compulsion that feels outside their control. That is a sign to talk to a professional rather than to try harder on your own with an app. Chrobox, and tools like it, can support behavior change for people who want to build better daily habits, but it is not a substitute for medical or mental health care.

## Putting it together

None of these seven steps require quitting your phone or your favorite apps entirely. Measuring first tells you where the problem actually is, instead of guessing. Cutting notifications and adding friction remove the automatic triggers. Planning your day into blocks, optionally with an app like Chrobox (which also offers a 3-day free trial on Pro if you want the automatic blocking feature), gives the freed-up time somewhere useful to go instead of just leaving a gap the phone will fill on its own. Reviewing weekly keeps you honest about whether it is actually working, rather than relying on a feeling. Most people notice a real difference within two to three weeks of working through this list in order.
`,
    'daily-reflection-template': `
# Daily Reflection Template: 4 Ready-to-Use Formats (Including KPT)

The fastest daily reflection template is the 3-line reflection: one line for what went well, one for what did not, and one for what you will do tomorrow. It takes under two minutes and removes the excuse of not having time. If you want more structure, KPT (Keep, Problem, Try) and a plan-vs-actual check for time-boxed days are also covered below, along with a simple mood-plus-one-sentence format for your lowest-energy days. Pick the one that matches how much time and energy you have that evening, not the one that looks most impressive.

## Why a template matters more than motivation

Most people who try to keep a daily reflection habit stop within two or three weeks, not because reflection is not useful, but because they start with no format at all. An empty text box is intimidating every single night, and on a bad day it turns into either nothing (you skip it) or an unstructured vent that leaves you feeling worse. A template solves this by giving you fixed slots to fill in, so the habit does not depend on feeling inspired or having a good day. This is also how Chrobox's own retrospective tab works: a 5-level mood rating (bad, meh, okay, good, great) plus free text, with optional voice dictation for days you would rather talk than type, so the format itself removes friction before you write a word.

Below are four templates. Each has a different trade-off between speed, structure, and what kind of day it fits best.

## Template 1: The 3-line reflection

This is the lowest-friction option and the one to default to on busy or tired days.

What went well today, one line
What did not go well or felt hard, one line
One specific thing to do differently tomorrow, one line

Time needed: 1 to 2 minutes.

When it fits: any day, but especially days when you are tired, traveling, or otherwise short on time. It is also the right format to hand to someone who has never journaled before, since three short lines feel achievable in a way an open page does not.

Common mistake: turning the second line into a list of everything that went wrong. Keep it to one thing. If five things went wrong, pick the one that is most worth addressing tomorrow and let the rest go for tonight.

## Template 2: KPT (Keep, Problem, Try)

KPT comes from agile team retrospectives but works just as well for a single person reviewing a single day.

Keep: what worked today that you want to keep doing
Problem: what got in the way or did not work
Try: one concrete change to try tomorrow, based on the Problem line

Time needed: 3 to 5 minutes.

When it fits: days with enough going on that a single line per section is not enough, or when you are trying to improve a specific habit or workflow over several days and want a running record of what you changed and whether it helped. KPT is more useful than the 3-line format when you are actively experimenting with your routine, because the Try line becomes something you can check against tomorrow's Keep or Problem line.

Common mistake: writing a Problem without a matching Try. A Problem on its own just becomes a complaint you repeat every day. The Try line is what turns the reflection into an actual improvement loop instead of a diary of frustrations.

## Template 3: Plan versus actual, for time-boxed days

This template is built specifically for people who plan their day into time blocks, whether in a calendar, a planner, or an app like Chrobox.

Boxes planned today: (number)
Boxes actually finished: (number)
Why the others slipped: (one line per box that did not happen, or one line total if the reason was the same for all of them)
One change for tomorrow's plan: (one line)

Time needed: 3 to 5 minutes.

When it fits: any day you planned your time in advance and want to know whether the plan matched reality, which is often more informative than a mood rating alone. If you consistently plan nine tasks and finish two, the problem is usually the plan, not your effort. Chrobox's own usage data across 5,077 planned tasks from 250 people shows that on days with nine or more planned tasks, the whole list was finished only once in 198 days, about half a percent of the time, while a median day has five tasks planned. That is a useful benchmark when you are deciding whether your own plan-versus-actual gap is normal or worth fixing. It is observational data from app usage, not a controlled study, so treat it as a rough reference point rather than a rule.

Common mistake: treating a slipped box as a personal failure instead of a planning signal. If the same type of box slips most days, for example anything scheduled after 9pm, that is information about when you should stop scheduling that kind of task, not evidence that you lack discipline.

## Template 4: Mood plus one sentence

For the days when even three lines feels like too much.

Mood: (pick one word or a 1 to 5 scale)
One sentence about today

Time needed: under 1 minute.

When it fits: your lowest-energy days, or as a fallback so the streak does not break entirely. A short entry that keeps the habit alive is worth far more than a skipped day, since the hardest part of any daily practice is usually restarting it after a gap. Writing even one sentence gives you something to look back on later that a mood score alone does not.

Common mistake: skipping the entry entirely because it feels too small to bother with. A one-sentence entry on a bad day is still a data point, and looking back at a month of even short entries usually shows patterns that no single day would reveal.

## Choosing between the four

Use the 3-line format as your default. Switch to KPT on days when you are actively trying to fix something specific, since the Try line gives you something to follow up on. Use the plan-versus-actual format on days you time-boxed your schedule, since it tells you whether the plan itself needs adjusting. Fall back to mood-plus-one-sentence on your hardest days, just to keep the habit alive rather than letting a gap turn into weeks of not writing at all. There is no wrong choice here; the only real mistake is treating any one of them as mandatory every single day.

## Common mistakes across all four templates

A few problems show up regardless of which template you use.

Turning it into self-criticism. A reflection that only lists faults trains you to dread the habit. Every template above pairs a negative observation with a forward-looking action, which is intentional. If you notice your entries are mostly complaints about yourself, add a "what went well" line even to KPT or the plan-versus-actual template.

Writing too much. Long entries take longer to write and even longer to review, which means you stop reviewing past entries, which is half the point of keeping them. If an entry is taking more than five minutes, you have probably drifted from reflection into venting. Save the venting for somewhere else and keep the reflection short enough that you will actually reread it.

Skipping the habit entirely on bad days. This is the single most common way the habit dies. Bad days are exactly when a quick mood-plus-one-sentence entry matters most, both because you need the outlet and because a string of bad days is worth being able to see later.

## Where this fits with an app

You can run any of these four templates on paper, in a notes app, or in a dedicated tool. If you already plan your day in time boxes, Chrobox keeps the plan and the daily retrospective in the same app, so the plan-versus-actual template takes a minute: the boxes you planned and the ones you checked off are already there. Entries also build a writing streak and, on Chrobox Pro, feed an automatic daily and weekly analysis with an optional AI comfort message on an entry, so the small daily habit compounds into a longer-term view without extra manual work. None of that is required to benefit from these templates, though. A sticky note and two minutes work just as well as any app.

## Building the habit

The template matters less than showing up with any template at all, most evenings, for a few weeks. Pick the one that matches tonight's energy rather than aiming for your most thorough entry every time, and treat a short entry as a full success rather than a lesser version of a long one. The goal of a daily reflection is not a perfect record; it is a habit you actually keep, because a habit you keep for a month tells you far more about your days than a single detailed entry ever could.
`,
  },
  ko: {
    'does-timeboxing-work': `
# 타임박싱, 정말 효과 있을까? 할 일 5,077개의 완료율 데이터

타임박싱에 관한 조언은 대부분 몇 편의 연구와 개인 경험담에 기대고 있습니다. 저희는 타임박싱 앱을 만들기 때문에 좀 더 직접적인 것을 볼 수 있습니다. 사람들이 계획한 할 일이 실제로 어떻게 되는지입니다. 이 글은 Chrobox 사용 데이터에서 확인한 내용을 정리한 것입니다. 보기 좋지 않은 결과와 숫자가 말해 줄 수 없는 한계도 함께 적었습니다.

## 짧은 답

시작 시각과 길이를 정해 둔 할 일은 **48.1%**가 완료됐습니다. 시간 없이 목록에만 둔 할 일은 **17.6%**가 완료됐습니다. 약 **2.7배** 차이입니다.

이 차이는 유난히 꼼꼼한 소수가 만든 게 아니었습니다. 같은 사람끼리 비교했을 때 41명 중 35명이 시간을 정하지 않은 할 일보다 시간을 정한 할 일을 더 많이 끝냈습니다.

## 데이터 개요

| 항목 | 내용 |
|---|---|
| 출처 | Chrobox 앱(iOS·Android) 로그인 계정의 익명 할 일 기록 |
| 기간 | 2025년 12월 3일 ~ 2026년 9월 29일 날짜의 할 일 |
| 표본 | 250명이 799일에 걸쳐 계획한 할 일 5,077개 |
| 추출일 | 2026년 9월 30일 |

- **타임박스**는 하루 타임라인에 시작 시각과 길이가 모두 정해진 할 일을 뜻합니다.
- **완료**는 사용자가 체크한 할 일입니다. 실제로 끝냈어도 체크하지 않았다면 미완료로 셉니다.
- 기기 캘린더에서 가져온 일정, 오늘 이후 날짜의 할 일, 운영자·테스트 계정, 탈퇴한 계정은 제외했습니다.
- 집계값만 공개합니다. 할 일 30개 미만인 집단은 보고하지 않습니다.

## 결과 1: 시간을 정한 할 일은 2.7배 더 많이 완료됐다

| | 할 일 | 사람 | 완료율 |
|---|---|---|---|
| 타임박스 있음 | 2,317 | 190 | 48.1% |
| 타임박스 없음 | 2,760 | 192 | 17.6% |

이 숫자가 착시가 아닌지 두 가지로 확인했습니다.

- **헤비 유저 영향.** 가장 활발한 10개 계정이 전체 할 일의 55%를 만들었습니다. 이들을 빼도 차이는 거의 그대로입니다. 타임박스 42.8%, 목록만 14.2%입니다.
- **같은 사람 안에서 비교.** 두 종류의 할 일을 각각 5개 이상 계획한 41명의 평균 완료율은 타임박스 52.9%, 목록만 15.0%였습니다. 35명은 타임박스가 더 높았고, 2명은 낮았고, 4명은 같았습니다.

**이 데이터가 증명하지 못하는 것.** 이것은 실험이 아니라 관찰 데이터입니다. 사람들은 어차피 할 생각인 일에 시간을 배정할 수 있고, 시간 칸 자체가 알림 역할도 합니다. 그래서 인과 효과가 아니라 강한 연관성으로 읽어야 합니다. 다만 실행 의도(implementation intention) 연구와는 일치합니다. Gollwitzer와 Sheeran(2006)이 94개 연구를 메타분석한 결과, 언제 어디서 할지를 미리 정하면 실제 실행에 중간 이상 크기의 효과가 있었습니다.

## 결과 2: 대부분 1시간 박스, 길이는 생각보다 덜 중요하다

| 박스 길이 | 비율 |
|---|---|
| 60분 | 50.8% |
| 30분 | 14.9% |
| 120분 | 9.3% |
| 90분 | 4.1% |
| 180분 | 3.1% |

박스 길이의 중앙값은 60분이었습니다. 여기에는 앱의 영향도 있습니다. Chrobox 타임라인에서 할 일을 한 시간 칸에 놓으면 60분 박스로 시작하고, 많은 사람이 그 기본값을 그대로 씁니다.

더 쓸모 있는 결과는 길이별 완료율입니다.

| 박스 길이 | 할 일 | 완료율 |
|---|---|---|
| 15분 이하 | 35 | 48.6% |
| 16~30분 | 429 | 48.7% |
| 31~45분 | 56 | 53.6% |
| 46~60분 | 1,215 | 48.7% |
| 61~90분 | 135 | 50.4% |
| 91~120분 | 238 | 45.0% |
| 120분 초과 | 209 | 44.0% |

90분까지는 길이에 따른 차이가 거의 없었습니다. 90분을 넘으면 완료율이 4~5%p 떨어졌습니다. 짧은 박스가 한 시간 박스보다 끝내기 쉽지도 않았습니다.

## 결과 3: 아침 박스는 끝나고, 저녁 박스는 밀린다

| 박스 시작 시각 | 할 일 | 사람 | 완료율 |
|---|---|---|---|
| 00:00~04:59 | 43 | 20 | 34.9% |
| 05:00~08:59 | 318 | 81 | 62.3% |
| 09:00~11:59 | 473 | 95 | 52.4% |
| 12:00~14:59 | 448 | 102 | 52.0% |
| 15:00~17:59 | 447 | 102 | 44.7% |
| 18:00~20:59 | 380 | 96 | 40.0% |
| 21:00~23:59 | 208 | 65 | 33.2% |

흐름은 일정합니다. 박스가 늦게 시작할수록 끝낼 가능성이 낮아집니다. 9시 전에 시작하는 박스는 21시 이후에 시작하는 박스보다 완료될 확률이 두 배 가까이 높았습니다. 아침 6시 반에 일정을 잡는 사람이 원래 더 꾸준해서일 수도 있습니다. 그래도 실천할 결론은 같습니다. 꼭 끝내야 하는 일은 정오 전에 두세요.

## 결과 4: 8개를 넘기면 하루를 다 끝내기 어렵다

하루 계획 개수의 중앙값은 **5개**였습니다.

| 그날 계획한 할 일 수 | 일수 | 평균 완료 비율 | 전부 끝낸 날 |
|---|---|---|---|
| 1개 | 131 | 7.6% | 7.6% |
| 2개 | 91 | 18.7% | 14.3% |
| 3개 | 105 | 29.2% | 14.3% |
| 4~5개 | 131 | 26.3% | 13.7% |
| 6~8개 | 143 | 42.7% | 18.2% |
| 9개 이상 | 198 | 30.7% | 0.5% |

6~8개를 계획한 날의 완료율이 가장 좋았습니다. 9개 이상 계획한 날은 198일 중 단 하루만 목록을 전부 끝냈습니다. 1개만 계획한 날이 가장 낮게 나오지만, 앱을 처음 써 보며 테스트로 하나만 넣은 첫날이 많이 섞여 있으니 이 줄은 조심해서 읽어야 합니다.

## 결과 5: 우선순위는 효과가 있고, 목요일이 일요일보다 낫다

우선순위로 표시한 할 일은 44.5%(853개)가 완료됐고, 나머지는 28.9%(4,224개)였습니다.

| 요일 | 할 일 | 완료율 |
|---|---|---|
| 월요일 | 940 | 31.4% |
| 화요일 | 854 | 34.2% |
| 수요일 | 990 | 31.9% |
| 목요일 | 815 | 36.2% |
| 금요일 | 612 | 28.6% |
| 토요일 | 355 | 27.3% |
| 일요일 | 511 | 25.4% |

주중이 강했고 목요일이 가장 높았습니다. 주말이 가장 약했고, 일요일이 일주일 중 가장 낮았습니다.

## 측정하지 못한 것

- **앱 차단.** 이 기간에 앱 차단을 연결한 타임박스는 8명의 19개뿐이었습니다. 완료율을 말하기에는 너무 적어서 보고하지 않습니다.
- **게스트 모드.** 이전 버전 앱의 게스트 모드는 할 일을 기기에만 저장했기 때문에 이 데이터에 없습니다.
- **사용자 구성.** 표본 계정의 67%가 한국어, 24%가 영어로 앱을 씁니다. 모든 문화권이나 직업에 그대로 적용되지 않을 수 있습니다.

## 내 계획에 적용하는 법

1. **꼭 해야 하는 일에는 시작 시각을 정하세요.** 목록에만 둔 할 일은 다섯 개 중 하나도 끝나지 않았습니다.
2. **박스는 90분 이하로 잡으세요.** 그보다 긴 일은 두 박스로 나누세요.
3. **가장 중요한 일은 정오 전에 두세요.** 아침 박스가 훨씬 더 자주 끝났습니다.
4. **하루 8개 정도에서 멈추세요.** 그 이상은 끝내지 못할 하루를 계획하는 셈입니다.
5. **우선순위를 1~3개 표시하세요.** 표시한 할 일이 눈에 띄게 더 많이 완료됐습니다.

## 이 데이터를 인용할 때

Chrobox (2026). *타임박싱, 정말 효과 있을까? 할 일 5,077개의 완료율 데이터.* https://chrobox.net/ko/blog/does-timeboxing-work — 2026년 9월 30일 추출 데이터.
`,
    'how-to-lock-apps-on-iphone': `
# 아이폰 앱 잠금 방법 3가지: Face ID 잠금·스크린타임 제한·시간대 차단

아이폰에서 앱을 잠그는 방법은 목적에 따라 세 가지로 나뉩니다. iOS 18부터는 특정 앱을 열 때 Face ID를 요구할 수 있고, 이는 사생활 보호용입니다. 스크린 타임의 앱 시간 제한은 하루에 특정 앱을 쓸 수 있는 시간을 정해두고 다 쓰면 막는 방식입니다. 그리고 시간대 차단은 하루 사용 시간 총량이 아니라 정해둔 시간대에만 특정 앱을 막는 방식으로, 스크린 타임의 다운타임을 직접 설정하거나 Chrobox 같은 계획형 앱이 일정에 맞춰 자동으로 처리해줍니다. 실제로 사용 시간을 줄이고 싶은 사람이라면 결국 스크린 타임 암호를 다른 사람이 갖고 있는 방식과 시간대 차단을 함께 쓰는 경우가 많습니다. 본인이 언제든 풀 수 있는 제한은 사실상 제한이 아니기 때문입니다.

## 방법 1: Face ID로 앱 잠그기 (iOS 18 이상)

iOS 18부터는 홈 화면에서 바로 특정 앱을 Face ID, Touch ID 또는 암호로 잠글 수 있는 기능이 추가되었습니다.

설정 방법은 다음과 같습니다.

1. 잠그고 싶은 앱 아이콘을 길게 눌러 빠른 동작 메뉴를 엽니다.
2. "Face ID 필요" 항목을 선택합니다 (기기에 따라 Touch ID나 암호 항목으로 표시될 수 있습니다).
3. 앱을 아예 숨기고 싶다면 "가리기 및 Face ID 필요" 옵션을 대신 선택합니다. 이 경우 앱은 홈 화면, 앱 라이브러리, 알림, 검색에서 모두 사라지고 별도의 잠긴 폴더로 이동합니다.

이 기능을 켜두면 이후로는 매번 Face ID 인증을 거쳐야 앱이 열립니다. 이미 잠금 해제된 내 아이폰을 다른 사람이 들고 있어도 마찬가지입니다.

다만 이 기능이 정확히 무엇을 해결하는지는 분명히 짚고 넘어가야 합니다. 이 잠금은 사생활 보호 기능이지, 내 사용 시간을 줄여주는 기능이 아닙니다. 다른 사람이 내 폰을 집어 들었을 때 은행 앱이나 메시지를 함부로 열어보지 못하게 막아줄 뿐, 정작 나 자신이 그 앱을 여는 것은 전혀 막지 못합니다. 내 얼굴로 인증하면 바로 들어가지기 때문입니다. 그래서 "SNS를 덜 보고 싶다"는 목적이라면 Face ID 잠금은 답이 되지 못합니다. 결국 잠그는 사람도 나, 여는 사람도 나이기 때문입니다.

## 방법 2: 스크린 타임 앱 시간 제한으로 사용량 줄이기

스크린 타임의 앱 시간 제한은 "이 앱을 하루에 덜 쓰고 싶다"는 목표에 맞는 기능입니다. 사생활 보호가 아니라 사용량 자체를 조절하는 도구입니다.

설정 방법입니다.

1. 설정 앱에서 스크린 타임으로 들어갑니다.
2. 앱 시간 제한을 선택하고 제한 추가를 누릅니다.
3. 특정 앱을 고르거나 소셜 네트워킹, 게임 같은 카테고리 전체를 선택합니다.
4. 하루 사용 시간을 설정합니다.
5. 시간이 다 됐을 때 실제로 앱이 막히길 원한다면 제한 시간 종료 시 차단 옵션을 켭니다. 이 옵션을 꺼두면 알림만 뜨고 계속 쓸 수 있습니다.

같은 스크린 타임 메뉴 안에서 다운타임도 설정할 수 있는데, 이는 특정 앱의 사용 시간을 재는 대신 정해둔 시간대(예: 밤 시간)에는 허용한 앱을 제외한 나머지를 전부 막는 방식입니다.

앱 시간 제한과 다운타임 모두의 약점은 강제력입니다. 본인이 직접 설정한 제한이라면, 시간이 다 됐을 때 "오늘 하루 무시" 같은 버튼이 뜨고 한 번만 누르면 제한이 그대로 풀려버립니다. 가벼운 알림 용도로는 괜찮지만, 진짜로 계속 보고 싶은 충동 앞에서는 버티지 못합니다. 제한이 실제로 효과를 내게 하려면 설정 → 스크린 타임에서 스크린 타임 암호 사용을 켜고, 평소 쓰는 잠금 암호와는 다른 암호를 설정한 뒤, 그 암호를 본인이 아니라 배우자나 믿을 만한 친구처럼 다른 사람이 알고 있게 하는 것이 좋습니다. 이 분리가 없으면 "제한"은 사실 언제든 해제 가능한 알림에 불과합니다.

## 방법 3: 계획에 맞춰 시간대별로 차단하기

세 번째 방식은 접근 자체가 다릅니다. 하루 총 사용 시간을 정하는 대신, 지금 해야 할 일에 맞춰 정해둔 시간대에만 선택한 앱을 막는 방식입니다. 업무 시간대에 맞춰 스크린 타임 다운타임을 직접 예약해도 되고, 실제 할 일 일정에 맞춰 차단을 자동으로 걸어주는 계획형 앱을 써도 됩니다.

타임박싱 앱 Chrobox가 이런 방식으로 동작합니다. 하루 타임라인에 할 일을 배치하면서 차단 프로필을 함께 연결하면, 그 시간 박스가 시작될 때부터 끝날 때까지만 선택한 앱들이 자동으로 차단됩니다. 애플의 스크린 타임 API(애플의 자체 도구들이 쓰는 것과 같은 FamilyControls·Screen Time 프레임워크)와 전용 잠금 화면을 사용하며, 차단은 박스가 시작될 때 걸리고 끝나면 풀리고, 그날 하루에만 적용되어 계획이 바뀌어도 저녁까지 이어지지 않습니다. 하루 전체 사용 시간이 문제가 아니라 특정 시간대가 문제인 사람, 예를 들어 오전 9시부터 11시까지 일하는 동안만 인스타그램을 막고 저녁에는 자유롭게 쓰고 싶은 경우에 잘 맞는 방식입니다.

## 세 가지 방법 비교

| 방법 | 목적 | 무엇을 막는가 | 스스로 우회하기 쉬운가 | 다른 사람이 암호를 쥐어야 하는가 | 이럴 때 적합 |
|---|---|---|---|---|---|
| Face ID 앱 잠금 | 사생활 보호 | 사용량과 무관, 여는 순간 인증만 요구 | 본인 Face ID나 암호를 알면 쉽게 열림 | 필요 없음 | 다른 사람에게 특정 앱을 보이고 싶지 않을 때 |
| 스크린 타임 앱 시간 제한 | 사용량 조절 | 선택한 앱·카테고리, 하루 사용 시간 소진 후 | 다른 사람이 스크린 타임 암호를 쥐고 있지 않으면 "오늘 하루 무시"로 쉽게 우회 | 실효성을 위해 필요 | 하루 전체 사용 시간을 줄이고 싶을 때 |
| 시간대 차단(다운타임 또는 Chrobox) | 시간대별 집중 | 선택한 앱, 정해둔 시간대에만 | 누가 일정을 설정하고 암호를 쥐고 있는지에 따라 다름 | 실효성을 위해 필요 | 업무나 공부 등 특정 시간대에만 집중이 필요할 때 |

## 어떤 방법을 써야 할까

다른 사람이 내 폰의 특정 앱을 열어보는 게 걱정이라면 Face ID 잠금이 정답이고, 1분이면 설정이 끝납니다. 나 자신이 하루 종일 특정 앱을 너무 많이 쓰는 게 문제라면, 스크린 타임 암호를 다른 사람이 쥐고 있는 앱 시간 제한이 더 정직한 도구입니다. 특정 시간대만 문제라면, 예를 들어 일하는 동안만 SNS를 멀리하고 그 외 시간은 신경 쓰지 않는다면, 다운타임을 직접 예약하든 Chrobox처럼 계획에 맞춰 자동으로 걸리게 하든 시간대 차단이 더 잘 맞습니다.

많은 사람이 이 세 가지를 동시에 씁니다. 은행 앱이나 메시지에는 사생활 보호를 위해 Face ID 잠금을, 업무 시간대에는 SNS와 게임 앱에 시간대 차단을 거는 식입니다. 이 방법들은 서로 경쟁하는 기능이 아니라 애초에 다른 질문에 답하는 도구입니다.
`,
    'how-to-stop-checking-phone-while-studying': `
# 공부할 때 핸드폰 안 보는 법: 거리 두기·앱 차단·타임박싱 루틴

공부할 때 핸드폰을 안 보는 가장 빠른 방법은 세 가지를 함께 하는 것입니다. 엎어 놓는 정도가 아니라 손이 닿지 않는 곳에 물리적으로 치워두고, 공부 시간에만 방해되는 앱을 차단하며, "오늘 공부하기"처럼 막연하게 두지 않고 공부 시간을 정해진 타임박스로 나누는 것입니다. 이 세 가지는 공부 중간중간 의지력을 발휘할 필요가 없습니다. 결정을 매 순간 새로 내리는 게 아니라 앉기 전에 한 번만 내리면 되기 때문입니다.

## 핸드폰이 옆에 있는 것만으로도 집중력이 떨어지는 이유

핸드폰을 만지지만 않으면 엎어놓고 옆에 두는 정도는 괜찮다고 생각하기 쉽습니다. 하지만 연구 결과는 다르게 말합니다. 2017년 발표된 이른바 "Brain Drain" 연구에서 연구자 Adrian Ward, Kristen Duke, Ayelet Gneezy, Maarten Bos는 본인 소유의 스마트폰이 꺼져 있고 전혀 사용하지 않는 상태여도, 그저 가까이에 있다는 사실만으로 다른 과제에 쓸 수 있는 인지 능력이 줄어든다는 것을 확인했습니다. 실제로 확인하지 않아도, 단지 가까이 있다는 것 자체가 영향을 미쳤습니다.

여기서 얻을 수 있는 실천 포인트는 "핸드폰을 꺼두라"가 아니라 "손 뻗으면 닿는 곳에 두지 말라"는 것입니다. 다른 방에 두거나, 지퍼를 잠근 가방 안에 넣거나, 방 반대편 서랍에 넣어두는 것이 같은 책상 위에 엎어두는 것보다 훨씬 효과적입니다. 핵심은 알림을 끄는 게 아니라 물리적 거리이기 때문입니다.

## 실제로 방해되는 앱만, 공부 시간에만 차단하기

거리를 두는 것만으로는 공유 책상이나 가족 공부방처럼 여전히 핸드폰이 가까이 있을 때 손이 가는 반사적인 습관까지 막지는 못하고, 모두가 몇 시간씩 핸드폰을 다른 방에 두고 지낼 수 있는 상황도 아닙니다. 두 번째로 필요한 것은 문제를 일으키는 특정 앱을, 실제로 공부해야 하는 시간에만 차단하는 것입니다.

이게 중요한 이유는, 하루 종일 무조건 막아버리면 오래 지키기 어렵고 반발심만 커지는 반면, 실제 공부 시간에 맞춘 차단은 그 시간이 끝나면 저절로 풀리기 때문입니다. 별도의 앱 없이도 이렇게 할 수 있습니다.

- 아이폰에서는 공부 시간대에 맞춰 다운타임을 예약하거나, 자주 손이 가는 특정 앱에 앱 시간 제한을 걸어두되, 유혹이 올 때 "오늘 하루 무시"를 스스로 누르지 못하도록 다른 사람이 스크린 타임 암호를 쥐고 있게 하는 것이 좋습니다.
- 안드로이드에서는 대부분의 기기에 디지털 웰빙 포커스 모드가 있으며, 보통 설정 → 디지털 웰빙 및 자녀 보호 기능 → 포커스 모드 경로에서 찾을 수 있습니다. 방해되는 앱을 골라 정해둔 시간 동안 일시 중지하는 방식입니다. 제조사마다 메뉴 이름이 조금씩 다를 수 있으니, 설정에서 표현이 다르다면 "디지털 웰빙", "포커스 모드" 또는 비슷한 이름의 화면 사용 시간 관련 항목을 찾아보시면 됩니다.

Chrobox처럼 타임박싱 방식으로 하루를 계획하는 앱을 쓴다면 이 과정이 자동으로 처리됩니다. 타임라인에 놓인 공부 할 일에 차단 프로필을 연결해두면, 그 타임박스가 지속되는 동안만 선택한 앱이 차단되고 박스가 끝나는 순간 자동으로 풀리기 때문에, 차단을 켜고 끄는 것을 따로 기억할 필요가 없습니다.

## 막연한 공부 시간이 아니라 타임박스로 나누기

"오늘 저녁에 화학 공부하기"처럼 막연한 계획은 조금만 막혀도 핸드폰을 집어 들 여지를 남깁니다. 먼저 끝내야 할 명확한 작업 단위가 없기 때문입니다. 공부 시간을 정해진 박스로 나누는 것, 예를 들어 50분 공부 후 10분 휴식으로 쪼개는 것은 핸드폰이 아닌 분명한 멈춤 지점을 만들어줍니다. 50분/10분 구성은 그저 합리적인 하나의 선택지일 뿐, 정해진 규칙이나 특정 앱에 내장된 뽀모도로 기능이 아닙니다. 과목이나 실제로 집중을 유지할 수 있는 시간에 따라 30분/5분이나 90분/15분으로 얼마든지 바꿔도 됩니다.

계획을 세울 때 특히 도움이 되는 습관 두 가지가 있습니다.

- 가장 힘들고 하기 싫은 과목을 세션의 첫 번째 박스에 배치합니다. 집중력이 가장 남아 있는 시점이기 때문이며, 맨 뒤로 미뤄두면 지쳐서 핸드폰을 집을 가능성이 더 커집니다.
- 박스를 시작하기 전에 그 박스에서 "완료"가 무엇인지 구체적으로 적어둡니다. "수학 공부하기"가 아니라 "연습문제 10개 풀기"처럼요. 목표가 막연한 박스일수록 중간에 핸드폰을 보며 포기하기가 훨씬 쉽습니다.

여기서 Chrobox 자체 이용 데이터를 참고할 만합니다. 이는 핸드폰 확인 여부를 직접 측정한 데이터는 아니고 할 일 완료율을 측정한 것이지만, 2025년 12월부터 2026년 9월까지 250명의 이용자, 5,077개의 계획된 할 일을 분석한 결과 타임박스에 배치된 할 일의 완료율은 48.1%로, 시간대가 지정되지 않은 할 일의 17.6%보다 훨씬 높았습니다. 또한 오전 5시부터 8시 59분 사이에 시작한 박스는 62.3%가 완료된 반면, 밤 9시부터 11시 59분 사이에 시작한 박스는 33.2%만 완료됐습니다. 이는 Chrobox 이용자들의 실제 사용 데이터일 뿐 통제된 실험은 아니지만, 막연하고 늦은 시간에 잡힌 공부 계획일수록 핸드폰을 보게 될 여지가 커진다는 경험과 잘 맞아떨어집니다.

## 시험 준비 하루 타임박스 예시

거리 두기, 앱 차단, 타임박스를 함께 적용한 시험 준비 하루 일정 예시입니다.

| 시간 | 박스 | 핸드폰/앱 차단 |
|---|---|---|
| 07:30 - 08:20 | 가장 어려운 과목, 50분 | 핸드폰은 다른 방에, 방해 앱 차단 |
| 08:20 - 08:30 | 휴식 | 핸드폰 사용 가능, 가능하면 방해 앱은 피하기 |
| 08:30 - 09:20 | 두 번째 과목, 50분 | 핸드폰은 다른 방에, 방해 앱 차단 |
| 09:20 - 09:30 | 휴식 | 핸드폰 사용 가능 |
| 09:30 - 10:20 | 연습문제 풀이, 50분 | 핸드폰은 다른 방에, 방해 앱 차단 |
| 10:20 - 10:40 | 긴 휴식 | 핸드폰 자유롭게 사용 가능 |
| 10:40 - 11:30 | 취약 부분 복습, 50분 | 핸드폰은 다른 방에, 방해 앱 차단 |

이런 하루는 종이 플래너와 서랍에 넣어둔 핸드폰, 네 개의 공부 박스에 맞춘 스크린 타임 다운타임만으로도 직접 만들 수 있고, 혹은 Chrobox에서 각 공부 박스에 앱 차단을 연결해두면 하루가 진행되는 동안 자동으로 켜지고 꺼집니다. 자리에 앉을 때 그 박스에서 집중 타이머를 켜면 박스 길이만큼 카운트다운합니다.

## 마무리

물리적 거리, 예약된 앱 차단, 고정된 타임박스 중 어느 하나만으로는 크게 효과를 보기 어렵습니다. 핸드폰을 방 반대편에 둬도 공부 시간이 막연하면 결국 가지러 가게 되고, 앱을 아무리 엄격하게 막아도 핸드폰이 책상 위에 있으면 노트 대신 잠긴 화면만 쳐다보게 되며, 타임박스를 아무리 잘 짜도 바로 옆에서 계속 진동이 울리면 소용이 없습니다. 세 가지를 함께 쓰면 매 순간의 선택 자체를 없앨 수 있는데, 이것이 바로 의지력이 몇 시간씩 버티기 가장 어려운 부분입니다.
`,
    'reduce-phone-addiction': `
# 폰중독 벗어나는 법: 스크린타임을 줄이는 7단계

폰중독에서 가장 빠르게 벗어나는 방법은 먼저 실제 사용량을 측정하고, 스스로 결정하지 않았는데도 스마트폰을 집어 들게 만드는 트리거를 없앤 다음, 집중이 필요한 특정 시간대에만 가장 많이 보는 앱을 차단하는 것입니다. SNS를 완전히 지우거나 피처폰으로 바꿀 필요는 없습니다. 한 번에 모든 것을 바꾸려 하기보다 순서대로 짧은 목록을 실천하면 대부분 2~3주 안에 체감할 수 있는 변화를 만들 수 있습니다.

이 글은 일상적으로 스마트폰을 습관적으로 확인하는 행동을 다루는 내용이지, 임상적 진단을 다루는 글이 아닙니다. 만약 스마트폰 사용이 일, 인간관계, 수면, 기분에 심각한 영향을 주고 있다면 의사나 전문가와 상담하시기 바랍니다. 아래 내용은 생각보다 자주 폰을 켠다는 흔한 경험을 위한 현실적이고 판단하지 않는 계획입니다.

## 왜 폰 확인 습관은 조절하기 어려울까요

스마트폰은 애초에 내려놓기 어렵게 설계되어 있습니다. 알림, 끝없이 이어지는 피드, 그리고 다음에 새로고침했을 때 뭔가 재미있는 게 있을지 없을지 알 수 없는 가변적 보상 구조는 주의를 계속 다시 끌어오도록 설계된 장치들입니다. 여기에 더해 Ward 등(2017)이 Journal of the Association for Consumer Research에 발표한 Brain Drain 연구에 따르면, 스마트폰이 꺼진 채 엎어져 있더라도 단지 근처에 있다는 사실만으로 다른 작업에 쓸 수 있는 인지 능력이 줄어들 수 있다고 합니다. 폰을 실제로 사용하지 않아도 그 존재 자체가 주의력을 소모시키는 셈입니다.

이 사실은 문제를 다르게 바라보게 해줍니다. 의지력이 부족해서가 아닙니다. 애초에 주의를 붙잡도록 정교하게 설계된 기기와 싸우고 있는 것이고, 심지어 그 기기가 근처에 있다는 것만으로도 조용히 인지 자원을 빼앗기고 있는 것입니다. 해결책은 더 강한 의지력이 아니라, 좋은 행동에 의지력이 덜 필요하도록 환경 자체를 바꾸는 것입니다.

## 1단계: 바꾸기 전에 먼저 측정하기

무엇을 고칠지 정하기 전에 숫자부터 확인합니다. 두 플랫폼 모두 이미 이를 추적하는 기능을 기본으로 제공합니다.

- 아이폰: 설정에서 스크린 타임으로 들어가면 하루/주간 평균 사용 시간, 앱·카테고리별 사용 내역, 하루 잠금 해제 횟수와 알림 수를 확인할 수 있습니다.
- 안드로이드: 설정에서 디지털 웰빙 및 보호자 사용 설정으로 들어가면 동일한 핵심 지표, 즉 하루 사용량, 앱별 내역, 잠금 해제 횟수, 받은 알림 수를 확인할 수 있습니다.

지금 바로 열어서 스스로를 판단하지 말고 그냥 살펴보세요. 하루 총 스크린타임, 잠금 해제 횟수, 알림 수, 이 세 가지 숫자를 적어두세요. 이 숫자는 7단계에서 실제로 변화가 있었는지 확인할 때 다시 쓰입니다. 대부분의 사람들은 이 세 가지 중 적어도 하나, 보통은 잠금 해제 횟수나 알림 수에서 놀라곤 하는데, 이 둘은 하루 동안 의식하지 못한 채로 쌓이기 때문입니다.

## 2단계: 트리거가 되는 앱 파악하기

1단계에서 본 앱별 내역을 살펴보세요. 확인해야 할 것은 두 가지입니다.

- 총 사용 시간을 가장 많이 잡아먹는 앱. 보통 영상, SNS, 숏폼 콘텐츠 앱인 경우가 많습니다.
- 습관적으로 가장 자주 여는 앱. 몇 초씩이라도 자주 여는 앱으로, 메신저나 특정 SNS인 경우가 많으며 시간을 가장 많이 쓰는 앱과 항상 같지는 않습니다.

상위 2~3개 트리거 앱을 구체적으로 이름 붙여두세요. 폰을 덜 쓰자 같은 막연한 목표는 구체적으로 바꿀 것이 없어서 실패하기 쉽습니다. 작업 사이에 이 특정 앱을 열지 않는다처럼 실제로 실행할 수 있는 목표가 훨씬 효과적입니다.

## 3단계: 불필요한 알림 끄기

트리거 앱마다 알림 설정에 들어가서 실제 사람이 보낸 메시지가 아닌 모든 것을 꺼두세요. 마케팅 푸시, 누가 내 게시물을 좋아합니다, 추천 알림, 새 콘텐츠가 기다리고 있어요 같은 재유입 알림은 앱이 여러분의 주의를 끊고 다시 끌어들이는 주된 수단입니다. 전화, 문자, 일정 알림처럼 실제로 즉시 확인해야 하는 것만 남기고 나머지는 거의 다 꺼두세요. 이 한 단계만으로도 며칠 안에 잠금 해제 횟수가 눈에 띄게 줄어드는 경우가 많은데, 애초에 앱을 열도록 유도하는 신호 자체가 사라지기 때문입니다.

## 4단계: 가장 많이 보는 앱에 장벽 추가하기

알림이 줄어들고 나면 남는 문제는 알림 없이도 심심하거나 습관적으로 폰을 켜고 앱 아이콘을 누르는 행동입니다. 이 행동이 자동이 아니라 의식적인 결정이 되도록 작은 장벽을 추가하세요.

- 트리거 앱을 홈 화면과 독에서 빼서 두 번째 화면의 폴더 안으로 옮기기
- 가장 줄이고 싶은 시간대에는 폰을 흑백 모드로 전환하기(아이폰: 설정 → 손쉬운 사용 → 디스플레이 및 텍스트 크기 → 색상 필터, 안드로이드는 제조사에 따라 접근성 설정이나 디지털 웰빙의 취침 모드에 있습니다). 피드가 매력적으로 보이는 이유 중 하나가 색상이기 때문에, 색을 없애면 끌림이 눈에 띄게 줄어듭니다.
- 특정 앱에서 로그아웃해두어서 바로 탭 한 번으로 들어가지 못하고 비밀번호를 다시 입력해야 하게 만들기

이런 방법들은 앱 사용을 불가능하게 만드는 것이 아닙니다. 단지 2~3초의 멈춤을 추가해서, 그 사이에 충동이 지나가거나 지금 습관적으로 폰을 켜고 있다는 사실을 스스로 알아차릴 여지를 주는 것입니다.

## 5단계: 확인하던 순간을 계획된 활동으로 바꾸기

습관을 대체 없이 없애려고만 하면 실패하기 쉽습니다. 줄 서서 기다릴 때, 회의 사이 짬, 눈 뜨자마자 등 확인 충동이 드는 순간 자체는 그대로 남아있기 때문입니다. 그저 참으려고 하는 대신, 그 시간대에 일부러 다른 할 일을 넣어두세요. 여기서 타임박싱이 도움이 됩니다. 하루를 미리 시간 단위로 계획해두면, 예전에는 무심코 폰을 확인하며 채웠던 순간이 다음에 할 구체적인 일로 채워지기 때문에 습관이 파고들 만한 빈 시간 자체가 줄어듭니다.

## 6단계: 집중 시간대에만 가장 힘든 앱 차단하기

3~5단계를 거쳐도 여전히 참기 힘든 앱이 있다면, 하루 종일 막아두기보다 특정 시간대로 범위를 좁혀서 강하게 차단하세요. 하루 종일 차단은 정당하게 그 앱이 필요한 순간이 한 번만 와도 바로 풀리는 경우가 많습니다. 두 플랫폼 모두 이를 위한 기본 기능을 제공합니다.

- 아이폰: 애플의 스크린 타임 API를 기반으로 한 앱 사용 제한과 다운타임
- 안드로이드: 디지털 웰빙의 앱 타이머와 포커스 모드(제조사마다 메뉴 이름이 다를 수 있습니다)

크로박스도 앱을 차단하지만, 하루 전체 제한이 아니라 이미 계획해둔 시간배치에 차단을 연결합니다. 작업이나 루틴에 차단 프로필을 붙이면 선택한 앱들이 해당 시간배치가 진행되는 동안에만 자동으로 차단되고, 시간이 끝나면 스스로 해제됩니다. 아이폰에서는 애플의 스크린 타임 API(FamilyControls와 커스텀 차단 화면)로, 안드로이드에서는 손쉬운 사용 서비스 오버레이로 동작합니다. 따로 눌러서 켜는 지금 차단 버튼이 없고, 이미 계획한 작업 시간에 자연스럽게 차단이 걸려 있는 방식이라 하루 종일 제한보다 지키기가 쉬운 편입니다.

## 7단계: 매주 숫자 점검하기

일주일에 한 번 같은 스크린 타임 또는 디지털 웰빙 화면으로 돌아가서 1단계에서 적어둔 숫자와 비교하세요. 전체 사용 시간뿐 아니라 잠금 해제 횟수와 알림 수를 특히 눈여겨보세요. 이 두 지표가 먼저 움직이는 경우가 많아서, 장벽과 차단이 실제로 효과를 내고 있는지 더 빨리 알려주는 신호가 되기 때문입니다. 숫자가 잘 줄지 않는다면 보통 특정 앱 하나가 여전히 알림을 켜두었거나 홈 화면에 계속 노출되어 있는 경우가 많습니다. 계획 전체를 바꾸기보다 그 한 가지를 조정해보세요.

| 단계 | 할 일 | 소요 시간 |
|---|---|---|
| 1. 측정하기 | 스크린 타임(아이폰) 또는 디지털 웰빙(안드로이드)에서 사용 시간, 잠금 해제, 알림 수 확인 | 5분 |
| 2. 트리거 파악 | 시간 기준, 빈도 기준 상위 2~3개 앱 이름 적기 | 5분 |
| 3. 알림 끄기 | 트리거 앱의 불필요한 알림 끄기 | 10분 |
| 4. 장벽 추가 | 홈 화면에서 앱 치우기, 흑백 모드 켜기, 한 앱 로그아웃하기 | 10분 |
| 5. 대체 활동 넣기 | 하루를 시간 단위로 계획해서 빈 순간에 할 일 채우기 | 하루 10~15분 |
| 6. 집중 시간대 차단 | 앱 사용 제한 설정 또는 집중 시간배치에 차단 프로필 연결 | 설정에 5분 |
| 7. 주간 점검 | 이번 주 숫자를 처음 측정값과 비교 | 주 1회, 5분 |

## 이 글이 다루지 않는 것

이 글은 일상적인 습관성 확인 행동을 줄이기 위한 계획이지, 진단된 질환에 대한 치료 방법이 아닙니다. 장벽, 차단, 대체 활동을 모두 시도해봐도 폰 사용이 불안, 우울감, 수면 문제, 혹은 스스로 조절하기 어렵다고 느껴지는 충동과 계속 연결되어 있다면, 혼자 더 애쓰기보다 전문가와 상담하는 것이 맞는 신호입니다. 크로박스 같은 도구는 더 나은 일상 습관을 만들고 싶은 사람의 행동 변화를 돕는 도구일 뿐, 의료나 정신건강 치료를 대신할 수는 없습니다.

## 정리하며

이 7단계 중 어느 것도 폰이나 좋아하는 앱을 완전히 끊으라고 요구하지 않습니다. 먼저 측정하면 추측이 아니라 실제로 문제가 어디에 있는지 알 수 있습니다. 알림을 끄고 장벽을 추가하면 자동으로 폰을 켜게 만드는 신호가 줄어듭니다. 하루를 시간 단위로 계획하면, 필요하다면 크로박스처럼 자동 차단 기능이 있는 앱을 활용해서(Pro는 3일 무료 체험으로 시작할 수 있습니다) 비워진 시간을 폰이 아니라 유용한 일로 채울 수 있습니다. 매주 점검하면 느낌이 아니라 실제 숫자로 효과가 있는지 확인할 수 있습니다. 이 순서대로 실천하면 대부분 2~3주 안에 확실한 변화를 느낄 수 있습니다.
`,
    'daily-reflection-template': `
# 하루 회고 쓰는 법: 5분이면 되는 회고 템플릿 4가지 (KPT·3줄 회고)

가장 빠른 하루 회고 방법은 3줄 회고입니다. 잘한 것 한 줄, 아쉬운 것 한 줄, 내일 할 것 한 줄만 쓰면 되고, 2분도 걸리지 않아서 시간이 없다는 핑계가 통하지 않습니다. 좀 더 구조가 필요하다면 KPT(Keep, Problem, Try)나 시간배치를 쓰는 사람을 위한 계획 대비 실행 체크가 있고, 에너지가 바닥난 날을 위한 기분 플러스 한 문장 형식도 아래에서 소개합니다. 그날 저녁의 시간과 에너지에 맞는 것을 고르는 것이 중요하지, 가장 그럴듯해 보이는 것을 고를 필요는 없습니다.

## 동기보다 템플릿이 중요한 이유

하루 회고 습관을 시작한 사람들 대부분이 2~3주 안에 그만두는데, 회고가 쓸모없어서가 아니라 애초에 형식 없이 시작했기 때문인 경우가 많습니다. 빈 입력창은 매일 밤 부담스럽고, 힘든 날에는 아예 건너뛰거나 두서없는 하소연이 되어 오히려 기분이 더 나빠지기도 합니다. 템플릿은 채워 넣을 고정된 칸을 미리 정해줘서, 습관이 그날의 기분이나 컨디션에 좌우되지 않게 해줍니다. 크로박스의 회고 탭도 같은 원리로 만들어져 있습니다. 별로/아쉬움/보통/좋음/최고의 5단계 기분 선택과 자유 텍스트, 그리고 글보다 말이 편한 날을 위한 음성 받아쓰기 기능까지 있어서, 형식 자체가 한 글자를 쓰기도 전에 부담을 줄여줍니다.

아래 네 가지 템플릿은 속도, 구조, 어울리는 날의 종류가 각각 다릅니다.

## 템플릿 1: 3줄 회고

가장 부담이 적은 방식으로, 바쁘거나 피곤한 날의 기본값으로 삼기 좋습니다.

오늘 잘한 것 한 줄
오늘 아쉬웠던 것 한 줄
내일 다르게 해볼 구체적인 것 한 줄

소요 시간: 1~2분

이럴 때 좋습니다: 어떤 날이든 괜찮지만, 특히 피곤하거나 이동 중이거나 시간이 부족한 날에 좋습니다. 일기를 한 번도 써본 적 없는 사람에게 권하기에도 좋은데, 빈 페이지보다 세 줄이 훨씬 시작하기 쉽게 느껴지기 때문입니다.

흔한 실수: 두 번째 줄을 잘못된 점 전부를 나열하는 목록으로 만드는 것입니다. 하나만 적으세요. 다섯 가지가 아쉬웠다면 내일 고치기에 가장 값어치 있는 것 하나만 고르고 나머지는 오늘 밤은 그냥 흘려보내세요.

## 템플릿 2: KPT (Keep, Problem, Try)

KPT는 원래 애자일 팀 회고에서 쓰이던 방식이지만, 혼자서 하루를 돌아볼 때도 똑같이 잘 맞습니다.

Keep(유지): 오늘 잘 됐고 계속하고 싶은 것
Problem(문제): 방해가 되었거나 잘 안 됐던 것
Try(시도): Problem을 바탕으로 내일 시도해볼 구체적인 변화 하나

소요 시간: 3~5분

이럴 때 좋습니다: 한 줄로는 담기 부족할 만큼 여러 일이 있었던 날, 혹은 특정 습관이나 작업 방식을 여러 날에 걸쳐 개선하고 싶어서 무엇을 바꿨고 효과가 있었는지 기록을 남기고 싶을 때 좋습니다. 루틴을 적극적으로 실험하고 있을 때는 3줄 회고보다 KPT가 더 유용한데, Try 줄이 내일의 Keep이나 Problem과 비교해볼 수 있는 구체적인 기준이 되기 때문입니다.

흔한 실수: Try 없이 Problem만 적는 것입니다. 짝이 없는 Problem은 매일 반복되는 불평이 될 뿐입니다. Try 줄이 있어야 회고가 좌절의 일기가 아니라 실제 개선 루프가 됩니다.

## 템플릿 3: 계획 대비 실행 체크 (시간배치용)

이 템플릿은 하루를 시간 단위로 미리 계획하는 사람, 캘린더든 다이어리든 크로박스 같은 앱이든 시간배치를 쓰는 사람을 위해 만들어졌습니다.

오늘 계획한 시간배치 수: (숫자)
실제로 끝낸 시간배치 수: (숫자)
나머지가 밀린 이유: (밀린 시간배치마다 한 줄, 혹은 이유가 같다면 전체 한 줄)
내일 계획에 반영할 변화 하나: (한 줄)

소요 시간: 3~5분

이럴 때 좋습니다: 미리 시간을 계획해두고 실제로 그대로 됐는지 확인하고 싶은 모든 날에 좋습니다. 이는 기분 점수 하나만 남기는 것보다 훨씬 많은 정보를 줍니다. 만약 매번 9개 넘는 일을 계획하고 2개만 끝낸다면, 문제는 보통 노력이 아니라 계획 자체에 있습니다. 크로박스가 250명의 사용자, 5,077건의 계획된 작업을 분석한 자체 사용 데이터에 따르면, 하루에 9개 이상을 계획한 날 중 전체 목록을 다 끝낸 경우는 198일 중 단 1번, 약 0.5%에 불과했고, 중앙값 기준으로는 하루에 5개 정도를 계획하는 경우가 가장 흔했습니다. 이는 스스로의 계획 대비 실행 격차가 평범한 수준인지 손볼 필요가 있는지 가늠할 때 참고할 만한 기준점입니다. 다만 이는 통제된 연구가 아니라 앱 사용 데이터를 관찰한 결과이므로, 규칙이 아니라 대략적인 참고치로만 받아들이는 것이 맞습니다.

흔한 실수: 밀린 시간배치를 개인적인 실패로 받아들이는 것입니다. 만약 특정 유형의 시간배치, 예를 들어 밤 9시 이후에 잡은 일정이 유독 자주 밀린다면, 그건 그 시간에는 그런 일을 잡지 말아야 한다는 정보이지, 의지가 부족하다는 증거가 아닙니다.

## 템플릿 4: 기분 플러스 한 문장

세 줄조차 버거운 날을 위한 형식입니다.

기분: (한 단어 또는 1~5점)
오늘에 대한 한 문장

소요 시간: 1분 미만

이럴 때 좋습니다: 에너지가 가장 바닥난 날, 혹은 기록이 완전히 끊기지 않도록 하는 최후의 보루로 씁니다. 습관을 이어가는 짧은 기록 한 줄이 아예 건너뛴 하루보다 훨씬 가치 있는데, 어떤 습관이든 가장 어려운 부분은 대개 공백 이후 다시 시작하는 것이기 때문입니다. 한 문장이라도 남겨두면 나중에 돌아볼 때 기분 점수만 있을 때보다 훨씬 많은 것을 떠올릴 수 있습니다.

흔한 실수: 너무 사소해서 쓸 필요 없다고 여기고 아예 건너뛰는 것입니다. 힘든 날에 남긴 한 문장도 엄연한 기록이며, 짧은 기록이라도 한 달치를 모아 다시 보면 하루하루로는 보이지 않던 패턴이 보이는 경우가 많습니다.

## 네 가지 중 무엇을 고를까

기본값은 3줄 회고로 두세요. 특정 문제를 적극적으로 고치고 있는 날에는 KPT로 바꾸세요. Try 줄이 다음에 확인할 구체적인 기준이 되어줍니다. 시간배치로 하루를 계획한 날에는 계획 대비 실행 체크를 쓰세요. 계획 자체를 손봐야 하는지 알려줍니다. 가장 힘든 날에는 기분 플러스 한 문장으로 돌아가서, 며칠치 공백이 되기 전에 습관만이라도 이어가세요. 어느 것을 고르든 틀린 선택은 없습니다. 진짜 실수는 이 중 하나를 매일 반드시 지켜야 하는 규칙처럼 여기는 것뿐입니다.

## 네 템플릿에서 공통으로 나오는 실수

어떤 템플릿을 쓰든 반복되는 문제들이 있습니다.

자기비판으로 흘러가는 것. 잘못한 것만 나열하는 회고는 이 습관 자체를 두렵게 만듭니다. 위의 모든 템플릿이 아쉬운 점 하나에 반드시 앞으로 할 일 하나를 짝지어 놓은 것은 의도적입니다. 자신의 기록이 대부분 스스로에 대한 불만이라는 걸 느낀다면, KPT나 계획 대비 실행 체크에도 잘한 것 한 줄을 억지로라도 추가해보세요.

너무 길게 쓰는 것. 긴 기록은 쓰는 데도 오래 걸리고, 나중에 다시 읽는 데도 더 오래 걸립니다. 결국 지난 기록을 다시 읽지 않게 되는데, 사실 그게 기록을 남기는 목적의 절반입니다. 한 번 쓰는 데 5분이 넘어간다면 회고가 아니라 하소연으로 흘러간 것일 가능성이 큽니다. 하소연은 다른 곳에 풀고, 회고는 나중에 실제로 다시 읽을 만큼 짧게 유지하세요.

힘든 날에 아예 건너뛰는 것. 이것이 습관이 깨지는 가장 흔한 방식입니다. 힘든 날이야말로 기분 플러스 한 문장 정도의 짧은 기록이 가장 필요한 날인데, 그날의 감정을 풀어낼 곳이 필요하기도 하고, 나중에 힘든 날들이 이어졌던 구간을 돌아볼 수 있는 자료가 되기 때문입니다.

## 앱과 함께 쓴다면

이 네 가지 템플릿은 종이에도, 메모 앱에도, 전용 도구에도 똑같이 적용할 수 있습니다. 이미 하루를 시간배치로 계획하고 있다면, 크로박스는 계획과 하루 회고를 한 앱에 두기 때문에 계획 대비 실행 템플릿을 1분이면 채울 수 있습니다. 계획한 박스와 체크한 박스가 이미 앱에 남아 있으니까요. 기록은 연속 작성 기록(스트릭)으로도 쌓이고, 크로박스 Pro에서는 자동으로 일간·주간 분석을 만들어주며 원할 경우 기록에 AI 위로 메시지를 받아볼 수도 있어서, 매일의 작은 습관이 별다른 수작업 없이 더 긴 시야의 통찰로 이어집니다. 다만 이 템플릿들의 효과를 보기 위해 앱이 꼭 필요한 것은 아닙니다. 포스트잇 한 장과 2분이면 어떤 앱 못지않게 충분합니다.

## 습관 만들기

어떤 템플릿을 쓰느냐보다 몇 주 동안 거의 매일 저녁 어떤 형태로든 앉아서 쓰는 것 자체가 훨씬 중요합니다. 매번 가장 완벽한 기록을 남기려 하기보다 오늘 저녁의 에너지에 맞는 템플릿을 고르고, 짧은 기록도 부족한 버전이 아니라 온전한 성공으로 받아들이세요. 하루 회고의 목표는 완벽한 기록이 아니라 실제로 계속 이어가는 습관입니다. 한 달간 꾸준히 남긴 기록이 정성스럽게 쓴 하루치 기록보다 여러분의 일상에 대해 훨씬 많은 것을 말해주기 때문입니다.
`,
  },
};
