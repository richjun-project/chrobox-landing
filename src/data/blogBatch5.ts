import type { BlogPostMeta } from '../types/blog';

// English blog posts (17-20)
export const enBatch5: BlogPostMeta[] = [
  {
    slug: 'time-boxing-with-calendar-apps',
    title: 'How to Time-Box with Google Calendar, Apple Calendar & Outlook',
    date: '2025-02-22',
    author: 'Chrobox Team',
    category: 'Time Management',
    tags: ['time-boxing', 'google-calendar', 'apple-calendar', 'outlook', 'calendar-apps'],
    excerpt: 'Learn how to implement time-boxing directly in Google Calendar, Apple Calendar, and Outlook. Step-by-step instructions to turn any calendar into a powerful time management system.',
    image: '/screenshots/en/2.webp',
    readTime: 6,
    lang: 'en',
    faqs: [
      {
        question: 'Can I use time-boxing with any calendar app?',
        questionKo: '어떤 캘린더 앱으로도 타임박싱을 할 수 있나요?',
        answer: 'Yes. Any calendar that lets you create timed events supports basic time-boxing. Google Calendar, Apple Calendar, and Outlook all work well. The key is treating each event as a dedicated work block, not just a reminder. Apps like Chrobox add automation on top of this by syncing tasks directly into your calendar blocks.',
        answerKo: '네. 시간 기반 이벤트를 만들 수 있는 모든 캘린더는 기본 타임박싱을 지원합니다. 구글 캘린더, 애플 캘린더, 아웃룩 모두 잘 작동합니다. 핵심은 각 이벤트를 단순한 알림이 아닌 전용 작업 블록으로 취급하는 것입니다. Chrobox 같은 앱은 작업을 캘린더 블록에 직접 동기화하여 자동화를 추가합니다.',
      },
      {
        question: 'How do I stop calendar invites from breaking my time blocks?',
        questionKo: '캘린더 초대가 타임 블록을 방해하지 않게 하려면 어떻게 하나요?',
        answer: 'Mark your time-boxing blocks as "Busy" so others cannot schedule over them. In Google Calendar, set visibility to "Private" and status to "Busy." In Outlook, use the block status feature. Communicate to colleagues that blocked slots are dedicated work time, not free slots.',
        answerKo: '타임박싱 블록을 "바쁨"으로 표시하여 다른 사람들이 그 위에 일정을 잡을 수 없게 하세요. 구글 캘린더에서는 공개 설정을 "비공개"로, 상태를 "바쁨"으로 설정하세요. 아웃룩에서는 블록 상태 기능을 사용하세요. 동료들에게 차단된 슬롯이 자유 시간이 아닌 전용 작업 시간임을 알리세요.',
      },
      {
        question: 'Is there a way to automate time-boxing in my calendar?',
        questionKo: '캘린더에서 타임박싱을 자동화하는 방법이 있나요?',
        answer: 'Yes. Chrobox integrates with your existing calendar to automatically create time blocks for your tasks. You add tasks with estimated durations, and Chrobox finds available slots and populates your calendar, eliminating the manual drag-and-drop process entirely.',
        answerKo: '네. Chrobox는 기존 캘린더와 통합하여 작업에 대한 타임 블록을 자동으로 생성합니다. 예상 소요 시간과 함께 작업을 추가하면 Chrobox가 사용 가능한 슬롯을 찾아 캘린더를 채워 수동 드래그 앤 드롭 과정을 완전히 없애줍니다.',
      },
    ],
  },
  {
    slug: 'beat-procrastination-time-boxing',
    title: 'Beat Procrastination with Time-Boxing: Science-Backed Strategies',
    date: '2025-02-25',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['procrastination', 'time-boxing', 'psychology', 'focus', 'motivation'],
    excerpt: 'Understand the psychology of procrastination and how time-boxing directly counters it. Backed by research, these strategies help you start tasks faster and finish them consistently.',
    image: '/screenshots/en/3.webp',
    readTime: 7,
    lang: 'en',
    faqs: [
      {
        question: 'Why does time-boxing help with procrastination?',
        questionKo: '타임박싱이 미루기 극복에 도움이 되는 이유는 무엇인가요?',
        answer: 'Procrastination is often caused by task ambiguity and fear of imperfection. Time-boxing removes both barriers: it defines exactly when and for how long you will work, making the task feel manageable, and the fixed endpoint removes the pressure of achieving perfection in a single session.',
        answerKo: '미루기는 종종 작업의 모호함과 완벽하지 않을 것에 대한 두려움에서 비롯됩니다. 타임박싱은 두 가지 장벽을 모두 제거합니다. 언제, 얼마나 오래 작업할지를 정확히 정의하여 작업을 관리 가능하게 만들고, 고정된 종료 시점이 한 세션에서 완벽함을 달성해야 한다는 압박을 없애줍니다.',
      },
      {
        question: 'What is the two-minute rule and how does it relate to time-boxing?',
        questionKo: '2분 규칙이란 무엇이고 타임박싱과 어떻게 관련되나요?',
        answer: 'The two-minute rule, popularized by David Allen, states that if a task takes less than two minutes, do it immediately. This complements time-boxing: small tasks get handled instantly, while tasks requiring more than two minutes get assigned a dedicated time box. Together they prevent both impulsive multitasking and procrastination.',
        answerKo: '데이비드 앨런이 대중화한 2분 규칙은 2분 미만의 작업은 즉시 처리하라고 합니다. 이것은 타임박싱을 보완합니다. 작은 작업은 즉시 처리되고, 2분 이상이 필요한 작업에는 전용 타임박스가 할당됩니다. 두 가지를 합치면 충동적인 멀티태스킹과 미루기를 모두 방지합니다.',
      },
      {
        question: 'How do I time-box when I do not feel motivated?',
        questionKo: '동기가 없을 때 타임박싱을 어떻게 하나요?',
        answer: 'Start with a very short time box, as little as 10 minutes. Action precedes motivation, not the other way around. Once you begin, momentum builds naturally. Commit only to starting, not finishing. After the 10 minutes, you will usually want to continue. Chrobox lets you set flexible block lengths so you can start small and extend when ready.',
        answerKo: '10분처럼 매우 짧은 타임박스로 시작하세요. 동기가 행동보다 먼저 오는 것이 아니라 행동이 동기를 이끌어냅니다. 일단 시작하면 자연스럽게 모멘텀이 쌓입니다. 완료가 아닌 시작에만 집중하세요. 10분 후에는 보통 계속하고 싶어질 것입니다. Chrobox는 유연한 블록 길이를 설정할 수 있어 작게 시작하고 준비되면 연장할 수 있습니다.',
      },
    ],
  },
  {
    slug: 'daily-review-ritual',
    title: 'The Daily Review Ritual: How 10 Minutes Can Transform Your Productivity',
    date: '2025-02-28',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['daily-review', 'productivity', 'habits', 'reflection', 'planning'],
    excerpt: 'A structured 10-minute daily review can dramatically improve your focus and output. Learn exactly what to review, when to do it, and how to build the habit that top performers swear by.',
    image: '/screenshots/en/1.webp',
    readTime: 6,
    lang: 'en',
    faqs: [
      {
        question: 'When is the best time to do a daily review?',
        questionKo: '일일 리뷰를 하기 가장 좋은 시간은 언제인가요?',
        answer: 'Most high performers do their daily review at the end of the workday, not the morning. End-of-day reviews let you close open loops from today and prepare tomorrow while context is fresh. A morning review works well as a second pass to confirm priorities. Chrobox supports both by showing your task completion rate and suggesting the next day\'s schedule automatically.',
        answerKo: '대부분의 고성과자들은 아침이 아닌 하루 업무 마지막에 일일 리뷰를 합니다. 하루 끝 리뷰를 통해 오늘의 열린 루프를 닫고 문맥이 생생한 상태에서 내일을 준비할 수 있습니다. 아침 리뷰는 우선순위를 확인하는 두 번째 점검으로 잘 작동합니다. Chrobox는 작업 완료율을 보여주고 다음 날 일정을 자동으로 제안하여 두 방식 모두 지원합니다.',
      },
      {
        question: 'What exactly should I review during a daily review?',
        questionKo: '일일 리뷰에서 정확히 무엇을 검토해야 하나요?',
        answer: 'Focus on four areas: (1) What did I complete today? (2) What is still open or blocked? (3) What is the single most important task for tomorrow? (4) What did I learn or want to do differently? Keep it to four honest answers and stop. The discipline is in brevity, not length.',
        answerKo: '네 가지 영역에 집중하세요: (1) 오늘 무엇을 완료했나? (2) 아직 열려 있거나 막힌 것은 무엇인가? (3) 내일 가장 중요한 단 하나의 작업은 무엇인가? (4) 무엇을 배웠거나 다르게 하고 싶은가? 네 가지 솔직한 답변으로 끝내세요. 규율은 길이가 아닌 간결함에 있습니다.',
      },
      {
        question: 'How do I make the daily review a consistent habit?',
        questionKo: '일일 리뷰를 꾸준한 습관으로 만들려면 어떻게 해야 하나요?',
        answer: 'Attach it to an existing habit, such as shutting down your computer or brewing your afternoon coffee. Set a recurring 10-minute time box in your calendar as a non-negotiable block. Track your streak. Missing one day is acceptable; missing two in a row breaks the chain. Chrobox can send you a daily reminder and pre-fill your review with the day\'s completed tasks.',
        answerKo: '컴퓨터 종료나 오후 커피 내리기와 같은 기존 습관에 붙여 넣으세요. 캘린더에 10분 타임박스를 반복 이벤트로 설정하여 협상 불가능한 블록으로 만드세요. 연속 기록을 추적하세요. 하루 빠지는 것은 괜찮지만 연속 이틀 빠지면 흐름이 끊깁니다. Chrobox는 매일 알림을 보내고 당일 완료 작업으로 리뷰를 미리 채워드릴 수 있습니다.',
      },
    ],
  },
  {
    slug: 'time-boxing-for-creative-professionals',
    title: 'Time-Boxing for Creative Professionals: Structure Without Killing Creativity',
    date: '2025-03-03',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['creativity', 'time-boxing', 'creative-work', 'design', 'deep-work'],
    excerpt: 'Many creatives fear that rigid schedules will stifle their inspiration. Discover how time-boxing actually enhances creative output by providing focused energy and protecting exploration time.',
    image: '/screenshots/en/2.webp',
    readTime: 8,
    lang: 'en',
    faqs: [
      {
        question: 'Does time-boxing kill creativity?',
        questionKo: '타임박싱이 창의성을 죽이나요?',
        answer: 'Research and the experience of leading creatives suggest the opposite. Constraints trigger creative problem-solving rather than suppressing it. A fixed time box forces you to commit to ideas and make decisions rather than endlessly refining. Picasso, Mozart, and many prolific creators had strict daily work routines that protected creative time rather than limiting it.',
        answerKo: '연구와 선도적인 창작자들의 경험은 반대를 시사합니다. 제약은 창의적 문제 해결을 억누르는 것이 아니라 촉발합니다. 고정된 타임박스는 끝없이 다듬는 대신 아이디어에 전념하고 결정을 내리도록 강제합니다. 피카소, 모차르트, 그리고 많은 다작 창작자들은 창의적 시간을 제한하는 것이 아니라 보호하는 엄격한 일상 루틴을 가지고 있었습니다.',
      },
      {
        question: 'How should I structure time boxes for creative work?',
        questionKo: '창의적인 작업을 위한 타임박스는 어떻게 구성해야 하나요?',
        answer: 'Use longer boxes (60–90 minutes) for generative creative work like writing or designing, and shorter boxes (20–30 minutes) for administrative work like emails. Schedule one "exploration" block each day with no deliverable, just free creative thinking. This prevents the pressure of producing from contaminating your ideation time.',
        answerKo: '글쓰기나 디자인 같은 생성적 창작 작업에는 긴 박스(60~90분)를, 이메일 같은 행정 업무에는 짧은 박스(20~30분)를 사용하세요. 매일 산출물 없이 자유로운 창의적 사고만 하는 "탐색" 블록을 하나 예약하세요. 이것은 생산 압박이 아이디어 발상 시간을 오염시키는 것을 방지합니다.',
      },
      {
        question: 'What if inspiration strikes outside my creative time box?',
        questionKo: '창의적 타임박스 외의 시간에 영감이 떠오르면 어떻게 하나요?',
        answer: 'Capture it immediately in a frictionless system, such as a voice memo, a notes app, or a quick Chrobox task. Do not act on it during another block. Review your capture list during your designated creative block. This preserves both the idea and your current block\'s focus, giving you the best of both worlds.',
        answerKo: '음성 메모, 노트 앱, 또는 빠른 Chrobox 작업 등 마찰 없는 시스템에 즉시 캡처하세요. 다른 블록 중에는 거기에 따라 행동하지 마세요. 지정된 창의적 블록 동안 캡처 목록을 검토하세요. 이렇게 하면 아이디어와 현재 블록의 집중력 모두를 보존하여 두 가지 장점을 모두 얻을 수 있습니다.',
      },
    ],
  },
];

// Korean blog posts (17-20)
export const koBatch5: BlogPostMeta[] = [
  {
    slug: 'time-boxing-with-calendar-apps',
    title: '구글 캘린더, 애플 캘린더, 아웃룩으로 타임박싱하는 방법',
    date: '2025-02-22',
    author: 'Chrobox Team',
    category: '시간 관리',
    tags: ['타임박싱', '구글캘린더', '애플캘린더', '아웃룩', '캘린더앱'],
    excerpt: '구글 캘린더, 애플 캘린더, 아웃룩에서 직접 타임박싱을 구현하는 방법을 배워보세요. 어떤 캘린더든 강력한 시간 관리 시스템으로 바꾸는 단계별 가이드입니다.',
    image: '/screenshots/ko/2.webp',
    readTime: 6,
    lang: 'ko',
    faqs: [
      {
        question: '어떤 캘린더 앱으로도 타임박싱을 할 수 있나요?',
        questionKo: '어떤 캘린더 앱으로도 타임박싱을 할 수 있나요?',
        answer: '네. 시간 기반 이벤트를 만들 수 있는 모든 캘린더는 기본 타임박싱을 지원합니다. 구글 캘린더, 애플 캘린더, 아웃룩 모두 잘 작동합니다. 핵심은 각 이벤트를 단순한 알림이 아닌 전용 작업 블록으로 취급하는 것입니다. Chrobox 같은 앱은 작업을 캘린더 블록에 직접 동기화하여 자동화를 추가합니다.',
        answerKo: '네. 시간 기반 이벤트를 만들 수 있는 모든 캘린더는 기본 타임박싱을 지원합니다. 구글 캘린더, 애플 캘린더, 아웃룩 모두 잘 작동합니다. 핵심은 각 이벤트를 단순한 알림이 아닌 전용 작업 블록으로 취급하는 것입니다. Chrobox 같은 앱은 작업을 캘린더 블록에 직접 동기화하여 자동화를 추가합니다.',
      },
      {
        question: '캘린더 초대가 타임 블록을 방해하지 않게 하려면 어떻게 하나요?',
        questionKo: '캘린더 초대가 타임 블록을 방해하지 않게 하려면 어떻게 하나요?',
        answer: '타임박싱 블록을 "바쁨"으로 표시하여 다른 사람들이 그 위에 일정을 잡을 수 없게 하세요. 구글 캘린더에서는 공개 설정을 "비공개"로, 상태를 "바쁨"으로 설정하세요. 아웃룩에서는 블록 상태 기능을 사용하세요. 동료들에게 차단된 슬롯이 자유 시간이 아닌 전용 작업 시간임을 알리세요.',
        answerKo: '타임박싱 블록을 "바쁨"으로 표시하여 다른 사람들이 그 위에 일정을 잡을 수 없게 하세요. 구글 캘린더에서는 공개 설정을 "비공개"로, 상태를 "바쁨"으로 설정하세요. 아웃룩에서는 블록 상태 기능을 사용하세요. 동료들에게 차단된 슬롯이 자유 시간이 아닌 전용 작업 시간임을 알리세요.',
      },
      {
        question: '캘린더에서 타임박싱을 자동화하는 방법이 있나요?',
        questionKo: '캘린더에서 타임박싱을 자동화하는 방법이 있나요?',
        answer: '네. Chrobox는 기존 캘린더와 통합하여 작업에 대한 타임 블록을 자동으로 생성합니다. 예상 소요 시간과 함께 작업을 추가하면 Chrobox가 사용 가능한 슬롯을 찾아 캘린더를 채워 수동 드래그 앤 드롭 과정을 완전히 없애줍니다.',
        answerKo: '네. Chrobox는 기존 캘린더와 통합하여 작업에 대한 타임 블록을 자동으로 생성합니다. 예상 소요 시간과 함께 작업을 추가하면 Chrobox가 사용 가능한 슬롯을 찾아 캘린더를 채워 수동 드래그 앤 드롭 과정을 완전히 없애줍니다.',
      },
    ],
  },
  {
    slug: 'beat-procrastination-time-boxing',
    title: '타임박싱으로 미루기 극복하기: 과학적으로 검증된 전략',
    date: '2025-02-25',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['미루기', '타임박싱', '심리학', '집중', '동기부여'],
    excerpt: '미루기의 심리학을 이해하고 타임박싱이 이를 어떻게 직접적으로 극복하는지 알아보세요. 연구로 검증된 이 전략들이 더 빠르게 시작하고 일관되게 완료하도록 도와줍니다.',
    image: '/screenshots/ko/3.webp',
    readTime: 7,
    lang: 'ko',
    faqs: [
      {
        question: '타임박싱이 미루기 극복에 도움이 되는 이유는 무엇인가요?',
        questionKo: '타임박싱이 미루기 극복에 도움이 되는 이유는 무엇인가요?',
        answer: '미루기는 종종 작업의 모호함과 완벽하지 않을 것에 대한 두려움에서 비롯됩니다. 타임박싱은 두 가지 장벽을 모두 제거합니다. 언제, 얼마나 오래 작업할지를 정확히 정의하여 작업을 관리 가능하게 만들고, 고정된 종료 시점이 한 세션에서 완벽함을 달성해야 한다는 압박을 없애줍니다.',
        answerKo: '미루기는 종종 작업의 모호함과 완벽하지 않을 것에 대한 두려움에서 비롯됩니다. 타임박싱은 두 가지 장벽을 모두 제거합니다. 언제, 얼마나 오래 작업할지를 정확히 정의하여 작업을 관리 가능하게 만들고, 고정된 종료 시점이 한 세션에서 완벽함을 달성해야 한다는 압박을 없애줍니다.',
      },
      {
        question: '2분 규칙이란 무엇이고 타임박싱과 어떻게 관련되나요?',
        questionKo: '2분 규칙이란 무엇이고 타임박싱과 어떻게 관련되나요?',
        answer: '데이비드 앨런이 대중화한 2분 규칙은 2분 미만의 작업은 즉시 처리하라고 합니다. 이것은 타임박싱을 보완합니다. 작은 작업은 즉시 처리되고, 2분 이상이 필요한 작업에는 전용 타임박스가 할당됩니다. 두 가지를 합치면 충동적인 멀티태스킹과 미루기를 모두 방지합니다.',
        answerKo: '데이비드 앨런이 대중화한 2분 규칙은 2분 미만의 작업은 즉시 처리하라고 합니다. 이것은 타임박싱을 보완합니다. 작은 작업은 즉시 처리되고, 2분 이상이 필요한 작업에는 전용 타임박스가 할당됩니다. 두 가지를 합치면 충동적인 멀티태스킹과 미루기를 모두 방지합니다.',
      },
      {
        question: '동기가 없을 때 타임박싱을 어떻게 하나요?',
        questionKo: '동기가 없을 때 타임박싱을 어떻게 하나요?',
        answer: '10분처럼 매우 짧은 타임박스로 시작하세요. 동기가 행동보다 먼저 오는 것이 아니라 행동이 동기를 이끌어냅니다. 일단 시작하면 자연스럽게 모멘텀이 쌓입니다. 완료가 아닌 시작에만 집중하세요. 10분 후에는 보통 계속하고 싶어질 것입니다. Chrobox는 유연한 블록 길이를 설정할 수 있어 작게 시작하고 준비되면 연장할 수 있습니다.',
        answerKo: '10분처럼 매우 짧은 타임박스로 시작하세요. 동기가 행동보다 먼저 오는 것이 아니라 행동이 동기를 이끌어냅니다. 일단 시작하면 자연스럽게 모멘텀이 쌓입니다. 완료가 아닌 시작에만 집중하세요. 10분 후에는 보통 계속하고 싶어질 것입니다. Chrobox는 유연한 블록 길이를 설정할 수 있어 작게 시작하고 준비되면 연장할 수 있습니다.',
      },
    ],
  },
  {
    slug: 'daily-review-ritual',
    title: '일일 리뷰 루틴: 10분이 생산성을 바꾸는 방법',
    date: '2025-02-28',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['일일리뷰', '생산성', '습관', '성찰', '계획'],
    excerpt: '체계적인 10분 일일 리뷰는 집중력과 성과를 극적으로 향상시킬 수 있습니다. 무엇을, 언제 검토해야 하는지, 그리고 최고 성과자들이 맹세하는 습관을 만드는 방법을 알아보세요.',
    image: '/screenshots/ko/1.webp',
    readTime: 6,
    lang: 'ko',
    faqs: [
      {
        question: '일일 리뷰를 하기 가장 좋은 시간은 언제인가요?',
        questionKo: '일일 리뷰를 하기 가장 좋은 시간은 언제인가요?',
        answer: '대부분의 고성과자들은 아침이 아닌 하루 업무 마지막에 일일 리뷰를 합니다. 하루 끝 리뷰를 통해 오늘의 열린 루프를 닫고 문맥이 생생한 상태에서 내일을 준비할 수 있습니다. 아침 리뷰는 우선순위를 확인하는 두 번째 점검으로 잘 작동합니다. Chrobox는 작업 완료율을 보여주고 다음 날 일정을 자동으로 제안하여 두 방식 모두 지원합니다.',
        answerKo: '대부분의 고성과자들은 아침이 아닌 하루 업무 마지막에 일일 리뷰를 합니다. 하루 끝 리뷰를 통해 오늘의 열린 루프를 닫고 문맥이 생생한 상태에서 내일을 준비할 수 있습니다. 아침 리뷰는 우선순위를 확인하는 두 번째 점검으로 잘 작동합니다. Chrobox는 작업 완료율을 보여주고 다음 날 일정을 자동으로 제안하여 두 방식 모두 지원합니다.',
      },
      {
        question: '일일 리뷰에서 정확히 무엇을 검토해야 하나요?',
        questionKo: '일일 리뷰에서 정확히 무엇을 검토해야 하나요?',
        answer: '네 가지 영역에 집중하세요: (1) 오늘 무엇을 완료했나? (2) 아직 열려 있거나 막힌 것은 무엇인가? (3) 내일 가장 중요한 단 하나의 작업은 무엇인가? (4) 무엇을 배웠거나 다르게 하고 싶은가? 네 가지 솔직한 답변으로 끝내세요. 규율은 길이가 아닌 간결함에 있습니다.',
        answerKo: '네 가지 영역에 집중하세요: (1) 오늘 무엇을 완료했나? (2) 아직 열려 있거나 막힌 것은 무엇인가? (3) 내일 가장 중요한 단 하나의 작업은 무엇인가? (4) 무엇을 배웠거나 다르게 하고 싶은가? 네 가지 솔직한 답변으로 끝내세요. 규율은 길이가 아닌 간결함에 있습니다.',
      },
      {
        question: '일일 리뷰를 꾸준한 습관으로 만들려면 어떻게 해야 하나요?',
        questionKo: '일일 리뷰를 꾸준한 습관으로 만들려면 어떻게 해야 하나요?',
        answer: '컴퓨터 종료나 오후 커피 내리기와 같은 기존 습관에 붙여 넣으세요. 캘린더에 10분 타임박스를 반복 이벤트로 설정하여 협상 불가능한 블록으로 만드세요. 연속 기록을 추적하세요. 하루 빠지는 것은 괜찮지만 연속 이틀 빠지면 흐름이 끊깁니다. Chrobox는 매일 알림을 보내고 당일 완료 작업으로 리뷰를 미리 채워드릴 수 있습니다.',
        answerKo: '컴퓨터 종료나 오후 커피 내리기와 같은 기존 습관에 붙여 넣으세요. 캘린더에 10분 타임박스를 반복 이벤트로 설정하여 협상 불가능한 블록으로 만드세요. 연속 기록을 추적하세요. 하루 빠지는 것은 괜찮지만 연속 이틀 빠지면 흐름이 끊깁니다. Chrobox는 매일 알림을 보내고 당일 완료 작업으로 리뷰를 미리 채워드릴 수 있습니다.',
      },
    ],
  },
  {
    slug: 'time-boxing-for-creative-professionals',
    title: '크리에이티브 전문가를 위한 타임박싱: 창의성을 죽이지 않는 구조',
    date: '2025-03-03',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['창의성', '타임박싱', '창작활동', '디자인', '딥워크'],
    excerpt: '많은 크리에이터들은 엄격한 일정이 영감을 억누를 것을 두려워합니다. 타임박싱이 집중된 에너지를 제공하고 탐색 시간을 보호함으로써 창의적 산출물을 어떻게 향상시키는지 알아보세요.',
    image: '/screenshots/ko/2.webp',
    readTime: 8,
    lang: 'ko',
    faqs: [
      {
        question: '타임박싱이 창의성을 죽이나요?',
        questionKo: '타임박싱이 창의성을 죽이나요?',
        answer: '연구와 선도적인 창작자들의 경험은 반대를 시사합니다. 제약은 창의적 문제 해결을 억누르는 것이 아니라 촉발합니다. 고정된 타임박스는 끝없이 다듬는 대신 아이디어에 전념하고 결정을 내리도록 강제합니다. 피카소, 모차르트, 그리고 많은 다작 창작자들은 창의적 시간을 제한하는 것이 아니라 보호하는 엄격한 일상 루틴을 가지고 있었습니다.',
        answerKo: '연구와 선도적인 창작자들의 경험은 반대를 시사합니다. 제약은 창의적 문제 해결을 억누르는 것이 아니라 촉발합니다. 고정된 타임박스는 끝없이 다듬는 대신 아이디어에 전념하고 결정을 내리도록 강제합니다. 피카소, 모차르트, 그리고 많은 다작 창작자들은 창의적 시간을 제한하는 것이 아니라 보호하는 엄격한 일상 루틴을 가지고 있었습니다.',
      },
      {
        question: '창의적인 작업을 위한 타임박스는 어떻게 구성해야 하나요?',
        questionKo: '창의적인 작업을 위한 타임박스는 어떻게 구성해야 하나요?',
        answer: '글쓰기나 디자인 같은 생성적 창작 작업에는 긴 박스(60~90분)를, 이메일 같은 행정 업무에는 짧은 박스(20~30분)를 사용하세요. 매일 산출물 없이 자유로운 창의적 사고만 하는 "탐색" 블록을 하나 예약하세요. 이것은 생산 압박이 아이디어 발상 시간을 오염시키는 것을 방지합니다.',
        answerKo: '글쓰기나 디자인 같은 생성적 창작 작업에는 긴 박스(60~90분)를, 이메일 같은 행정 업무에는 짧은 박스(20~30분)를 사용하세요. 매일 산출물 없이 자유로운 창의적 사고만 하는 "탐색" 블록을 하나 예약하세요. 이것은 생산 압박이 아이디어 발상 시간을 오염시키는 것을 방지합니다.',
      },
      {
        question: '창의적 타임박스 외의 시간에 영감이 떠오르면 어떻게 하나요?',
        questionKo: '창의적 타임박스 외의 시간에 영감이 떠오르면 어떻게 하나요?',
        answer: '음성 메모, 노트 앱, 또는 빠른 Chrobox 작업 등 마찰 없는 시스템에 즉시 캡처하세요. 다른 블록 중에는 거기에 따라 행동하지 마세요. 지정된 창의적 블록 동안 캡처 목록을 검토하세요. 이렇게 하면 아이디어와 현재 블록의 집중력 모두를 보존하여 두 가지 장점을 모두 얻을 수 있습니다.',
        answerKo: '음성 메모, 노트 앱, 또는 빠른 Chrobox 작업 등 마찰 없는 시스템에 즉시 캡처하세요. 다른 블록 중에는 거기에 따라 행동하지 마세요. 지정된 창의적 블록 동안 캡처 목록을 검토하세요. 이렇게 하면 아이디어와 현재 블록의 집중력 모두를 보존하여 두 가지 장점을 모두 얻을 수 있습니다.',
      },
    ],
  },
];

// Content for posts 17-20
export const contentBatch5: Record<string, Record<string, string>> = {
  'time-boxing-with-calendar-apps': {
    en: "## Why Your Calendar is Already a Time-Boxing Tool\n\nMost people use their calendar as a passive record of commitments. Time-boxing flips this: your calendar becomes an active plan for where your attention goes every hour of the day. The good news is that Google Calendar, Apple Calendar, and Outlook all have everything you need to start today.\n\n## Setting Up Time Blocks in Google Calendar\n\nOpen Google Calendar and create a new event. Give it the name of your task, not a vague label like \"work.\" Set the duration to match your intended focus session. Under the \"more options\" menu, set your status to \"Busy\" and visibility to \"Private\" so colleagues cannot see the details or schedule over you.\n\nUse color coding to distinguish block types. For example, green for deep work, blue for meetings, and orange for administrative tasks. Google Calendar's color system makes it easy to see at a glance whether your day is balanced or overloaded.\n\nCreate recurring blocks for daily habits like your morning planning session or end-of-day review. Recurring events ensure these critical routines never get crowded out.\n\n## Time-Boxing in Apple Calendar\n\nApple Calendar works best when paired with iOS Reminders or a task manager. Create a calendar dedicated to time blocks and give it a distinct color. When you add a block, use the notes field to list the specific tasks you plan to complete during that session.\n\nEnable the \"Alerts\" feature to get a five-minute warning before each block starts. This gives you time to close other tabs, silence notifications, and mentally shift into focus mode before the block begins.\n\n## Outlook Time-Boxing for Teams\n\nOutlook's strength is its deep integration with Microsoft Teams and shared calendars. Block time using \"New Appointment\" rather than \"New Meeting\" to keep it off shared calendars by default. Set the show-as status to \"Busy\" and enable the private flag.\n\nUse Outlook's category colors to match your organization's workflow. If your team already uses color conventions for meeting types, extend those conventions to your personal work blocks so the visual language stays consistent.\n\n## The Problem with Manual Calendar Time-Boxing\n\nThe biggest friction point is that manually dragging tasks onto a calendar is time-consuming and rarely updated when plans change. Chrobox solves this by syncing your task list directly with your calendar. Add a task with an estimated duration, and Chrobox finds the next available slot and creates the block automatically. When priorities shift, it reschedules affected blocks without manual intervention.\n\n## Tips for Protecting Your Time Blocks\n\nCommunicate your system to your team. Let them know that blocked time means you are unavailable, not just tentatively busy. Designate a specific window each day for impromptu requests so colleagues have a predictable time to reach you without disrupting your blocks.\n\nReview your calendar each morning for the next 24 hours. Confirm that your blocks align with your top priorities and adjust if a new urgent task has emerged. This five-minute check prevents the day from running you instead of you running the day.",

    ko: "## 캘린더가 이미 타임박싱 도구인 이유\n\n대부분의 사람들은 캘린더를 약속의 수동적인 기록으로 사용합니다. 타임박싱은 이것을 뒤집습니다. 캘린더가 하루의 매 시간 주의를 어디에 쏟을지에 대한 능동적인 계획이 됩니다.\n\n## 구글 캘린더에서 타임 블록 설정하기\n\n구글 캘린더를 열고 새 이벤트를 만드세요. \"작업\"처럼 막연한 이름이 아닌 작업 이름을 붙이세요. 집중 세션 시간에 맞게 기간을 설정하세요. \"더 많은 옵션\" 메뉴에서 상태를 \"바쁨\"으로, 공개 설정을 \"비공개\"로 설정하세요.\n\n블록 유형을 구분하기 위해 색상 코딩을 사용하세요. 예를 들어 딥워크는 녹색, 회의는 파란색, 행정 업무는 주황색으로 설정하세요. 반복 블록을 만들어 아침 계획 세션이나 하루 마무리 리뷰 같은 일상 습관이 절대 밀려나지 않게 하세요.\n\n## Chrobox로 자동화하기\n\n수동으로 캘린더에 작업을 드래그하는 것은 시간이 많이 걸리고 계획이 바뀌면 거의 업데이트되지 않습니다. Chrobox는 작업 목록을 캘린더와 직접 동기화하여 이 문제를 해결합니다. 예상 소요 시간과 함께 작업을 추가하면 Chrobox가 다음 사용 가능한 슬롯을 찾아 블록을 자동으로 만듭니다.\n\n## 타임 블록 보호 팁\n\n시스템을 팀에 알리세요. 차단된 시간은 단순히 잠정적으로 바쁜 것이 아니라 사용 불가능하다는 것을 알려주세요. 매일 즉흥적인 요청을 위한 특정 창을 지정하여 동료들이 블록을 방해하지 않고 연락할 수 있는 예측 가능한 시간을 갖도록 하세요.",
  },

  'beat-procrastination-time-boxing': {
    en: "## The Real Reason You Procrastinate\n\nProcrastination is not a character flaw. It is a neurological response to perceived threat. When a task feels ambiguous, overwhelming, or tied to your self-worth, your brain triggers avoidance behaviors to protect you from potential failure. Understanding this mechanism is the first step to beating it.\n\nResearchers at Carleton University found that procrastination is fundamentally about managing negative emotions, not poor time management. This means that strategies targeting only your schedule will fall short unless they also address the emotional dimension.\n\n## How Time-Boxing Addresses the Root Cause\n\nTime-boxing works against procrastination on multiple levels. First, it removes task ambiguity by defining exactly when work will happen. The brain resists open-ended commitments but readily accepts bounded ones. Second, a fixed endpoint removes the pressure of perfection. You are not trying to finish the task perfectly; you are working for 45 minutes and then stopping.\n\nThird, time-boxing creates what psychologists call \"implementation intentions.\" Research by Peter Gollwitzer shows that people who specify when and where they will act on a goal are significantly more likely to follow through than those with vague intentions. Scheduling a task as a time box is an implementation intention in its strongest form.\n\n## The Five-Minute Start Protocol\n\nFor tasks you have been avoiding, use the five-minute start protocol. Commit to working on the task for exactly five minutes. Tell yourself you can stop after five minutes if you want to. This technique exploits the Zeigarnik effect: humans have a natural drive to complete tasks they have started, making it easier to continue than to stop once you begin.\n\nAfter five minutes, you will almost always choose to continue. If you do not, something is wrong with the task itself, such as it being unclear or requiring a resource you do not have. That information is valuable and prevents you from sitting paralyzed without knowing why.\n\n## Using Time-Boxing to Break Down Overwhelming Tasks\n\nLarge tasks are the biggest procrastination triggers because their scope is undefined. Break every large task into sub-tasks that fit within a single time box. \"Write the report\" becomes \"outline introduction\" (20 min), \"draft methodology section\" (45 min), and \"review and edit\" (30 min).\n\nChrobox makes this decomposition easy. You can create parent tasks with sub-tasks, each with their own time estimates, and Chrobox will schedule them across available slots in your calendar automatically.\n\n## Handling the Emotional Discomfort\n\nThe moment before starting a dreaded task is when discomfort peaks. Acknowledge the feeling without acting on it. A simple phrase like \"I notice I want to check my phone instead of starting this\" creates psychological distance between the urge and the action.\n\nThen start your timer and begin. The discomfort drops dramatically within two to three minutes of genuine effort, which is why the five-minute start protocol is so effective.\n\n## Building Momentum Across the Day\n\nSchedule your most avoided task first thing in the morning before your brain has time to negotiate. After completing it, the psychological payoff gives you momentum for the rest of the day. Chrobox can automatically prioritize avoided tasks by tracking which items get repeatedly rescheduled, flagging them so you confront them early rather than pushing them indefinitely forward.",

    ko: "## 미루기의 진짜 이유\n\n미루기는 성격 결함이 아닙니다. 인지된 위협에 대한 신경학적 반응입니다. 작업이 모호하거나 압도적이거나 자존감과 연결되어 있을 때, 뇌는 잠재적 실패로부터 보호하기 위해 회피 행동을 촉발합니다.\n\n## 타임박싱이 근본 원인을 해결하는 방법\n\n타임박싱은 여러 수준에서 미루기에 맞서 작동합니다. 첫째, 언제 작업이 일어날지를 정확히 정의하여 작업의 모호함을 제거합니다. 뇌는 끝없는 약속에 저항하지만 경계가 있는 약속은 쉽게 받아들입니다. 둘째, 고정된 종료 시점이 완벽함의 압박을 없앱니다. 45분 동안 작업하고 멈추는 것이지, 완벽하게 완료하려는 것이 아닙니다.\n\n## 5분 시작 프로토콜\n\n피해왔던 작업에는 5분 시작 프로토콜을 사용하세요. 정확히 5분 동안 작업에 집중하겠다고 약속하세요. 5분 후에 멈출 수 있다고 스스로에게 말하세요. 일단 시작하면 거의 항상 계속하기를 선택하게 됩니다.\n\n## Chrobox로 모멘텀 쌓기\n\nChrobox는 반복적으로 재일정되는 항목을 추적하여 미루고 있는 작업을 자동으로 우선순위 지정하고, 무기한 미루는 대신 일찍 직면할 수 있도록 플래그를 표시합니다. 큰 작업을 단일 타임박스에 맞는 하위 작업으로 분류하면 Chrobox가 사용 가능한 슬롯에 자동으로 일정을 잡아줍니다.",
  },

  'daily-review-ritual': {
    en: "## Why Most People Skip the Daily Review\n\nThe daily review is one of the most recommended habits in productivity literature, yet it is also one of the most skipped. The reason is usually the same: it feels optional. When you are busy, the first thing to cut is reflection time, because reflection does not produce an immediate tangible output. This is a costly mistake.\n\nTop performers across disciplines, from athletes to CEOs, consistently report that structured reflection is not separate from high performance. It is the engine of it. A 10-minute investment in reviewing your day can save two hours of misdirected effort the following day.\n\n## The Four Questions That Make a Review Effective\n\nA good daily review does not need to be long or complex. It needs to be honest. Focus on four questions:\n\n1. What did I complete today? Write down what you actually finished, not what you planned. This builds an accurate picture of your real output over time.\n\n2. What is still open or blocked? Identify anything that did not get done and why. Is it blocked by a dependency? Does it need more information? This prevents tasks from quietly disappearing from your radar.\n\n3. What is the single most important task for tomorrow? Choose one, not five. Having one clear priority makes starting tomorrow morning dramatically easier.\n\n4. What did I learn or want to do differently? This is where growth happens. Even one small observation per day compounds into significant improvement over months.\n\n## Timing Your Review for Maximum Impact\n\nEnd-of-day reviews, completed before you close your laptop, outperform morning reviews because your working memory is still primed with the day's context. You know exactly what happened, what was left undone, and what caused friction. Morning reviews are better as a second pass to confirm priorities, not as a substitute for end-of-day processing.\n\nIf you work from home, create a physical ritual that signals the end of the workday: brew a specific tea, change out of work clothes, or take a short walk. Attach your review to this ritual so the behavior becomes automatic.\n\n## Building the Habit So It Sticks\n\nHabit research consistently shows that attaching a new behavior to an existing one, a technique called habit stacking, dramatically increases the likelihood of consistency. Choose an anchor habit you already do reliably at the end of the day and stack your review immediately before or after it.\n\nTrack your streak visually. Seeing a chain of completed reviews makes you psychologically reluctant to break it. Chrobox includes a streak tracker for your daily review habit that sends a gentle reminder five minutes before your designated review time.\n\n## Using Chrobox for Automated Review Support\n\nChrobox pre-fills your daily review with that day's completed, incomplete, and rescheduled tasks, removing the effort of manually recalling what happened. You see your completion rate, where you overestimated or underestimated task duration, and which tasks migrated from earlier days. This data makes your four questions much easier and more accurate to answer.\n\nOver time, Chrobox's analytics show you patterns: which days of the week you are most productive, what task types you consistently underestimate, and which recurring blockers keep appearing. This turns your daily review from a simple habit into a genuine continuous improvement system.",

    ko: "## 일일 리뷰를 건너뛰는 이유\n\n일일 리뷰는 생산성 문헌에서 가장 많이 권장되는 습관 중 하나이지만, 또한 가장 많이 건너뛰는 습관이기도 합니다. 이유는 보통 같습니다. 선택적인 것처럼 느껴지기 때문입니다. 바쁠 때 가장 먼저 줄이는 것은 성찰 시간인데, 성찰은 즉각적인 유형의 결과물을 만들지 않기 때문입니다. 이것은 비용이 많이 드는 실수입니다.\n\n## 리뷰를 효과적으로 만드는 네 가지 질문\n\n좋은 일일 리뷰는 길거나 복잡할 필요가 없습니다. 솔직해야 합니다. 네 가지 질문에 집중하세요: (1) 오늘 무엇을 완료했나? (2) 아직 열려 있거나 막힌 것은 무엇인가? (3) 내일 가장 중요한 단 하나의 작업은 무엇인가? (4) 무엇을 배웠거나 다르게 하고 싶은가?\n\n## 습관을 지속시키기\n\n기존 습관에 새로운 행동을 붙이는 습관 쌓기 기법은 일관성 가능성을 극적으로 높입니다. 하루 마지막에 이미 신뢰할 수 있게 하는 앵커 습관을 선택하고 바로 전후에 리뷰를 쌓으세요.\n\n## Chrobox로 자동화된 리뷰 지원\n\nChrobox는 당일 완료, 미완료, 재일정된 작업으로 일일 리뷰를 미리 채워 무슨 일이 있었는지 수동으로 기억하는 노력을 제거합니다. 완료율, 작업 기간을 과대 또는 과소 추정한 곳, 이전 날에서 이동한 작업을 확인할 수 있습니다. 시간이 지나면서 Chrobox의 분석이 패턴을 보여주어 일일 리뷰가 진정한 지속적 개선 시스템이 됩니다.",
  },

  'time-boxing-for-creative-professionals': {
    en: "## The Creative Professional's Dilemma\n\nCreative professionals face a unique tension. Their work requires both disciplined execution and open-ended exploration. Too much structure, they fear, will squeeze out the spontaneous insights that make creative work valuable. Too little structure, and the day disappears into distraction, procrastination, and reactive tasks.\n\nThe resolution to this dilemma is not choosing between structure and freedom. It is designing a schedule that provides dedicated time for both, with clear boundaries between each mode.\n\n## What the Research Actually Shows\n\nPsychological research on creativity consistently finds that moderate constraints enhance creative performance rather than limiting it. This phenomenon, known as \"creative constraint,\" occurs because limitations force the brain to explore solutions it would otherwise skip when the solution space is infinite.\n\nPatricia Stokes's research on artists including Monet and Picasso found that their most innovative periods coincided with self-imposed constraints, not freedom from them. Monet's series paintings, for example, emerged from his decision to paint the same subject under different conditions, a constraint that forced previously unexplored solutions.\n\n## Designing Your Creative Time-Boxing System\n\nThe key principle is to distinguish between generative time and productive time. Generative time is for creating new material: writing first drafts, sketching concepts, brainstorming, and ideating. Productive time is for refining, editing, executing, and delivering.\n\nSchedule your generative blocks when your mental energy is highest, typically in the morning. Reserve productive blocks for lower energy periods. Use longer blocks (60-90 minutes) for generative work where sustained flow is valuable, and shorter blocks (25-45 minutes) for productive tasks that have clear endpoints.\n\nCritically, include at least one unstructured exploration block each week with no deliverable attached. This is time for reading, wandering, observing, or simply thinking without an agenda. This block feeds your creative reserves rather than depleting them.\n\n## Protecting Deep Creative Work\n\nSchedule your creative blocks early and mark them as non-negotiable. Communicate to clients and colleagues that these hours are unavailable. The pushback is usually minimal when you frame it as a reliability investment: you deliver better work when you protect your creative hours.\n\nTurn off all notifications during creative blocks. Research from the University of California Irvine found that it takes an average of 23 minutes to return to full focus after an interruption. A single notification does not cost you one second; it costs you 23 minutes.\n\n## Handling Inspiration That Arrives at the Wrong Time\n\nCreative ideas do not follow schedules. When inspiration strikes during an administrative block or a meeting, capture it immediately in a frictionless system. A voice memo, a single line in a dedicated note, or a quick Chrobox task with the idea as the title all work well. The key is to capture without acting, preserving both the idea and your current block's focus.\n\nReview your capture list at the start of each creative block. Often the ideas that survive until your next creative session are the genuinely good ones, while impulses that seemed urgent in the moment fade on reflection.\n\n## Using Chrobox for Creative Project Management\n\nChrobox supports creative workflows by letting you create project-level groupings of time blocks. A design project might have blocks for research, concept development, execution, and client review, each with different durations. Chrobox schedules these across your calendar based on deadlines and your available capacity, giving you a complete view of when creative work will happen without requiring you to manually plan each session.\n\nThe platform also tracks which blocks you extend, helping you understand which creative tasks you consistently underestimate, so you can build more realistic schedules for future projects.",

    ko: "## 크리에이티브 전문가의 딜레마\n\n크리에이티브 전문가들은 독특한 긴장감에 직면합니다. 그들의 작업은 훈련된 실행과 열린 탐색 모두를 필요로 합니다. 너무 많은 구조는 창의적 작업을 가치 있게 만드는 자발적인 통찰을 압박할 것이라고 두려워하고, 너무 적은 구조는 하루가 산만함과 미루기로 사라지게 합니다.\n\n## 연구가 실제로 보여주는 것\n\n창의성에 대한 심리학 연구는 일관되게 적당한 제약이 창의적 성과를 제한하는 것이 아니라 향상시킨다는 것을 발견합니다. \"창의적 제약\"으로 알려진 이 현상은 제한이 해결 공간이 무한할 때 뇌가 건너뛰었을 해결책을 탐색하도록 강제하기 때문에 발생합니다.\n\n## 창의적 타임박싱 시스템 설계\n\n핵심 원칙은 생성적 시간과 생산적 시간을 구분하는 것입니다. 생성적 시간은 초안 작성, 개념 스케치, 브레인스토밍을 위한 것입니다. 생산적 시간은 다듬고, 편집하고, 실행하고, 전달하기 위한 것입니다.\n\n정신 에너지가 가장 높을 때, 보통 아침에 생성적 블록을 예약하세요. 생성적 작업에는 긴 블록(60~90분)을, 명확한 종료 지점이 있는 생산적 작업에는 짧은 블록(25~45분)을 사용하세요.\n\n## Chrobox로 창의적 프로젝트 관리\n\nChrobox는 타임 블록의 프로젝트 수준 그룹화를 만들어 창의적 워크플로를 지원합니다. 디자인 프로젝트에는 연구, 개념 개발, 실행, 클라이언트 검토를 위한 블록이 있을 수 있으며, 각각 다른 기간을 가질 수 있습니다. Chrobox는 마감일과 사용 가능한 용량을 기반으로 캘린더에 이를 일정화하여 각 세션을 수동으로 계획할 필요 없이 창의적 작업이 언제 일어날지 완전한 뷰를 제공합니다.",
  },
};
