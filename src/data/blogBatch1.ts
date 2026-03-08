import type { BlogPostMeta, BlogFaq } from '../types/blog';

// --- FAQs ---

const faqsPost1En: BlogFaq[] = [
  {
    question: "Is time-boxing effective for people with ADHD?",
    questionKo: "타임박싱이 ADHD가 있는 사람에게 효과적인가요?",
    answer: "Yes. Time-boxing creates clear boundaries and reduces decision fatigue, which helps people with ADHD stay on task without feeling overwhelmed by an open-ended schedule.",
    answerKo: "네. 타임박싱은 명확한 경계를 만들고 결정 피로를 줄여, ADHD가 있는 사람이 끝없는 일정에 압도되지 않고 작업에 집중할 수 있게 합니다.",
  },
  {
    question: "How long should each time box be for ADHD?",
    questionKo: "ADHD의 경우 각 타임박스는 얼마나 길어야 하나요?",
    answer: "Start with 15–25 minute blocks. Shorter intervals match the natural attention span and make it easier to re-engage after transitions.",
    answerKo: "15~25분 블록으로 시작하세요. 짧은 간격은 자연스러운 주의 집중 시간과 맞아 전환 후 재집중하기 쉽습니다.",
  },
  {
    question: "What tools work best for ADHD time-boxing?",
    questionKo: "ADHD 타임박싱에 가장 잘 맞는 도구는 무엇인가요?",
    answer: "Apps that provide visual timers, audio cues, and calendar integration work best. Chrobox combines all three, giving real-time feedback on how time is spent.",
    answerKo: "시각적 타이머, 오디오 신호, 캘린더 연동을 제공하는 앱이 가장 좋습니다. Chrobox는 세 가지를 모두 결합해 시간 사용에 대한 실시간 피드백을 제공합니다.",
  },
];

const faqsPost2En: BlogFaq[] = [
  {
    question: "Can time-boxing replace traditional study schedules?",
    questionKo: "타임박싱이 전통적인 공부 계획을 대체할 수 있나요?",
    answer: "Time-boxing is not a replacement but an enhancement. It layers structure on top of your existing schedule, turning vague study sessions into focused sprints.",
    answerKo: "타임박싱은 대체가 아닌 보완입니다. 기존 일정 위에 구조를 더해 막연한 공부 시간을 집중적인 스프린트로 전환합니다.",
  },
  {
    question: "How many subjects should I time-box per day?",
    questionKo: "하루에 몇 과목을 타임박싱해야 하나요?",
    answer: "Three to five subjects per day is ideal. Switching too frequently increases cognitive load, while covering too few may leave important topics unaddressed.",
    answerKo: "하루 3~5과목이 이상적입니다. 너무 자주 바꾸면 인지 부하가 늘고, 너무 적으면 중요한 주제를 놓칠 수 있습니다.",
  },
  {
    question: "What should I do when I go over my time box?",
    questionKo: "타임박스를 초과했을 때는 어떻게 해야 하나요?",
    answer: "Note where you stopped and continue in the next allocated slot. Avoid extending the current block as it disrupts the rest of your schedule.",
    answerKo: "멈춘 지점을 메모하고 다음 할당된 슬롯에서 계속하세요. 현재 블록을 연장하면 나머지 일정이 흐트러집니다.",
  },
];

const faqsPost3En: BlogFaq[] = [
  {
    question: "How long does it take to build a morning routine?",
    questionKo: "아침 루틴을 만드는 데 얼마나 걸리나요?",
    answer: "Research suggests 21–66 days to form a habit. Starting with just two or three time-boxed blocks makes the habit stick faster.",
    answerKo: "연구에 따르면 습관 형성에 21~66일이 걸립니다. 두세 개의 타임박스 블록으로 시작하면 습관이 더 빨리 자리잡습니다.",
  },
  {
    question: "Should I time-box exercise in the morning?",
    questionKo: "아침 운동도 타임박싱해야 하나요?",
    answer: "Yes. Assigning a fixed block to exercise removes the daily decision of whether to do it, making consistency much easier to maintain.",
    answerKo: "네. 운동에 고정된 블록을 할당하면 매일 할지 말지 결정하는 과정이 없어져 꾸준히 유지하기 훨씬 쉽습니다.",
  },
  {
    question: "What is the best length for a morning routine?",
    questionKo: "아침 루틴의 이상적인 길이는 얼마인가요?",
    answer: "60 to 90 minutes covers essentials without feeling rushed. Adjust based on your wake-up time and first commitment of the day.",
    answerKo: "60~90분이면 서두르지 않고 필수 항목을 커버할 수 있습니다. 기상 시간과 하루 첫 일정에 맞게 조정하세요.",
  },
];

const faqsPost4En: BlogFaq[] = [
  {
    question: "What is the difference between deep work and flow state?",
    questionKo: "딥워크와 플로우 상태의 차이점은 무엇인가요?",
    answer: "Deep work is an intentional practice you schedule; flow is a spontaneous state of effortless focus. Time-boxing deep work sessions makes flow more likely to occur.",
    answerKo: "딥워크는 의도적으로 스케줄링하는 실천이고, 플로우는 자발적으로 발생하는 몰입 상태입니다. 딥워크 세션을 타임박싱하면 플로우가 더 자주 일어납니다.",
  },
  {
    question: "How do I protect deep work time from interruptions?",
    questionKo: "딥워크 시간을 방해 요소로부터 어떻게 보호하나요?",
    answer: "Block the time on a shared calendar, silence notifications, and communicate your unavailability to colleagues before the session begins.",
    answerKo: "공유 캘린더에 시간을 블록하고, 알림을 무음으로 설정하고, 세션 시작 전 동료에게 연락 불가 상태를 알리세요.",
  },
  {
    question: "How many deep work hours per day is realistic?",
    questionKo: "하루에 현실적인 딥워크 시간은 얼마인가요?",
    answer: "Most people can sustain two to four hours of genuine deep work per day. Beyond that, quality tends to drop even if quantity appears to continue.",
    answerKo: "대부분의 사람은 하루 2~4시간의 진정한 딥워크를 유지할 수 있습니다. 그 이상이 되면 양은 유지되는 것처럼 보여도 질이 떨어지는 경향이 있습니다.",
  },
];

// --- EN Meta ---

export const enBatch1: BlogPostMeta[] = [
  {
    slug: 'time-boxing-for-adhd',
    title: 'Time-Boxing for ADHD: A Practical Guide to Staying Focused',
    date: '2025-01-05',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['ADHD', 'Time-Boxing', 'Focus', 'Productivity', 'Mental Health'],
    excerpt: 'Discover how time-boxing can help people with ADHD create structure, reduce overwhelm, and stay focused throughout the day.',
    image: '/screenshots/en/1.webp',
    readTime: 9,
    lang: 'en',
    faqs: faqsPost1En,
  },
  {
    slug: 'time-boxing-for-students',
    title: 'Time-Boxing for Students: How to Study Smarter, Not Harder',
    date: '2025-01-08',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['Students', 'Study', 'Time-Boxing', 'Productivity', 'Learning'],
    excerpt: 'Learn how students can use time-boxing to build effective study sessions, avoid burnout, and consistently hit their academic goals.',
    image: '/screenshots/en/2.webp',
    readTime: 7,
    lang: 'en',
    faqs: faqsPost2En,
  },
  {
    slug: 'morning-routine-scheduling',
    title: 'How to Build the Perfect Morning Routine with Time-Boxing',
    date: '2025-01-11',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['Morning Routine', 'Time-Boxing', 'Habits', 'Productivity', 'Wellness'],
    excerpt: 'A structured morning routine sets the tone for your entire day. Find out how time-boxing turns good intentions into reliable daily habits.',
    image: '/screenshots/en/3.webp',
    readTime: 6,
    lang: 'en',
    faqs: faqsPost3En,
  },
  {
    slug: 'deep-work-scheduling',
    title: 'Deep Work Scheduling: How to Protect Your Most Productive Hours',
    date: '2025-01-14',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['Deep Work', 'Scheduling', 'Focus', 'Productivity', 'Cal Newport'],
    excerpt: 'Deep work is your most valuable cognitive resource. Learn how deliberate scheduling with time-boxing keeps distractions away and output high.',
    image: '/screenshots/en/1.webp',
    readTime: 8,
    lang: 'en',
    faqs: faqsPost4En,
  },
];

// --- KO Meta ---

export const koBatch1: BlogPostMeta[] = [
  {
    slug: 'time-boxing-for-adhd',
    title: 'ADHD를 위한 타임박싱: 집중력 유지를 위한 실용 가이드',
    date: '2025-01-05',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['ADHD', '타임박싱', '집중력', '생산성', '정신건강'],
    excerpt: '타임박싱이 ADHD를 가진 사람들이 구조를 만들고, 압도감을 줄이며, 하루 종일 집중력을 유지하는 데 어떻게 도움이 되는지 알아보세요.',
    image: '/screenshots/ko/1.webp',
    readTime: 9,
    lang: 'ko',
    faqs: faqsPost1En,
  },
  {
    slug: 'time-boxing-for-students',
    title: '학생을 위한 타임박싱: 더 똑똑하게 공부하는 방법',
    date: '2025-01-08',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['학생', '공부', '타임박싱', '생산성', '학습'],
    excerpt: '학생들이 타임박싱을 활용해 효과적인 공부 세션을 만들고, 번아웃을 피하며, 꾸준히 학업 목표를 달성하는 방법을 알아보세요.',
    image: '/screenshots/en/2.webp',
    readTime: 7,
    lang: 'ko',
    faqs: faqsPost2En,
  },
  {
    slug: 'morning-routine-scheduling',
    title: '타임박싱으로 완벽한 아침 루틴 만들기',
    date: '2025-01-11',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['아침 루틴', '타임박싱', '습관', '생산성', '웰니스'],
    excerpt: '체계적인 아침 루틴은 하루 전체의 분위기를 결정합니다. 타임박싱이 좋은 의도를 믿을 수 있는 일상 습관으로 바꾸는 방법을 알아보세요.',
    image: '/screenshots/en/3.webp',
    readTime: 6,
    lang: 'ko',
    faqs: faqsPost3En,
  },
  {
    slug: 'deep-work-scheduling',
    title: '딥워크 스케줄링: 가장 생산적인 시간을 보호하는 방법',
    date: '2025-01-14',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['딥워크', '스케줄링', '집중력', '생산성', '칼 뉴포트'],
    excerpt: '딥워크는 가장 소중한 인지 자원입니다. 타임박싱을 활용한 의도적인 스케줄링으로 방해 요소를 차단하고 높은 성과를 유지하는 방법을 알아보세요.',
    image: '/screenshots/en/1.webp',
    readTime: 8,
    lang: 'ko',
    faqs: faqsPost4En,
  },
];

// --- Content ---

export const contentBatch1: Record<string, Record<string, string>> = {
  'time-boxing-for-adhd': {
    en: "# Time-Boxing for ADHD: A Practical Guide to Staying Focused\n\nADHD makes it hard to start tasks, switch between them, and—perhaps most frustratingly—stop working on something engaging to do something important. Time-boxing addresses all three challenges by creating pre-decided boundaries around every activity.\n\n## What Is Time-Boxing?\n\nTime-boxing means assigning a fixed time limit to a specific task before you begin. Instead of working on a report 'until it's done,' you work on it for exactly 25 minutes. When the timer ends, you stop—regardless of where you are.\n\nFor ADHD brains, this removes two of the biggest obstacles: the paralysis of deciding when to start and the difficulty of knowing when to stop.\n\n## Why It Works for ADHD\n\nThe ADHD brain responds strongly to deadlines and novelty. A ticking timer introduces an artificial urgency that can activate the same dopamine response that makes crisis-driven work feel manageable.\n\nAdditionally, breaking the day into discrete blocks reduces the cognitive load of planning. Instead of maintaining a mental map of an entire project, you only need to focus on the next 20 minutes.\n\n## How to Get Started\n\n**1. Start small.** Use 15-minute blocks for the first week. This feels achievable and builds the habit before you extend to longer sessions.\n\n**2. Write the task on paper before you start.** Externalizing the goal prevents mid-session drift into tangential topics.\n\n**3. Use a physical or visual timer.** Audio and visual cues are more effective than phone notifications for ADHD. A dedicated timer app with a visual countdown keeps the passage of time concrete.\n\n**4. Include transition time.** Add a 5-minute buffer between blocks. This reduces the stress of hard stops and gives your brain time to reset.\n\n**5. Log what you actually completed.** Reviewing completed blocks at the end of the day provides a dopamine reward and helps calibrate future estimates.\n\n## Common Pitfalls to Avoid\n\n- **Hyperfocus traps:** If you're deep in a task when the timer rings, write a quick note about where you are and stop anyway. Skipping one block cascades into schedule collapse.\n- **Overly long blocks:** 45+ minute blocks are rarely sustainable for ADHD. Shorter, more frequent blocks with movement breaks between them outperform long unbroken stretches.\n- **Perfectionism in planning:** Don't spend 30 minutes crafting the perfect schedule. Block your top three priorities and adjust as the day unfolds.\n\n## Using Chrobox for ADHD Time-Boxing\n\nChrobox is built around the idea that your calendar should reflect how you actually spend time. Its visual time-tracking makes it easy to see at a glance whether your planned blocks matched reality—giving ADHD users the immediate feedback loop that makes behavior change sustainable.\n\nStart with three time-boxed blocks tomorrow morning. That's all it takes to begin.",

    ko: "# ADHD를 위한 타임박싱: 집중력 유지를 위한 실용 가이드\n\nADHD는 작업을 시작하고, 전환하고, 중요한 일을 하기 위해 흥미로운 일을 멈추는 것을 어렵게 만듭니다. 타임박싱은 모든 활동에 사전에 결정된 경계를 만들어 이 세 가지 문제를 모두 해결합니다.\n\n## 타임박싱이란?\n\n타임박싱은 시작 전에 특정 작업에 고정된 시간 제한을 설정하는 방법입니다. 보고서를 '끝날 때까지' 작성하는 대신, 정확히 25분 동안 작업합니다. 타이머가 끝나면 어디에 있든 멈춥니다.\n\nADHD 두뇌에게 이것은 두 가지 가장 큰 장애물을 제거합니다: 언제 시작할지 결정하는 마비와 언제 멈춰야 하는지 아는 어려움.\n\n## ADHD에 효과적인 이유\n\nADHD 두뇌는 마감과 새로움에 강하게 반응합니다. 째깍거리는 타이머는 인위적인 긴박감을 도입해 위기 상황의 작업을 관리 가능하게 만드는 것과 같은 도파민 반응을 활성화할 수 있습니다.\n\n## 시작하는 방법\n\n**1. 작게 시작하세요.** 첫 주에는 15분 블록을 사용하세요.\n\n**2. 시작 전에 작업을 종이에 적으세요.** 목표를 외부화하면 세션 중 다른 주제로 이탈하는 것을 방지합니다.\n\n**3. 시각적 타이머를 사용하세요.** 시각적 카운트다운이 있는 전용 타이머 앱이 ADHD에 더 효과적입니다.\n\n**4. 전환 시간을 포함하세요.** 블록 사이에 5분 버퍼를 추가하세요.\n\n**5. 실제로 완료한 것을 기록하세요.** 완료된 블록을 검토하면 도파민 보상을 제공합니다.\n\n## Chrobox 활용\n\nChrobox는 계획한 블록이 실제와 얼마나 일치했는지 한눈에 확인할 수 있는 시각적 시간 추적을 제공해 ADHD 사용자에게 지속 가능한 행동 변화를 위한 즉각적인 피드백 루프를 제공합니다.\n\n내일 아침 세 개의 타임박스 블록으로 시작해 보세요.",
  },

  'time-boxing-for-students': {
    en: "# Time-Boxing for Students: How to Study Smarter, Not Harder\n\nStudying harder is rarely the answer. Students who perform consistently well don't necessarily log the most hours—they protect the quality of each hour they study. Time-boxing is the mechanism that makes this possible.\n\n## The Problem with Open-Ended Study Sessions\n\nWhen you sit down to 'study for the exam,' your brain has no clear endpoint. Without a boundary, Parkinson's Law takes over: work expands to fill the time available. The result is three hours of low-intensity effort that feels productive but produces little retention.\n\n## How Time-Boxing Changes the Equation\n\nBy setting a 45-minute block for a single subject, you:\n\n- Create urgency that improves recall encoding\n- Prevent the diminishing returns of marathon sessions\n- Make it easier to track how much time each subject actually receives\n- Build in mandatory breaks that consolidate memory\n\n## Building a Student Time-Box Schedule\n\n**Step 1: List your subjects and estimate weekly hours needed.**\nBe honest. Difficult subjects need more blocks. Don't assign equal time to everything.\n\n**Step 2: Assign blocks to specific days and times.**\nStudy the hardest subject during your peak mental performance window—usually mid-morning for most people.\n\n**Step 3: Protect review blocks.**\nAt least 20% of your study time should be dedicated to reviewing previous material, not just covering new content.\n\n**Step 4: Plan for overrun.**\nIf you need more time on a topic, schedule a makeup block rather than extending the current one. This keeps your overall schedule intact.\n\n## Subject-Switching Strategy\n\nInterleaving—switching between subjects in a single study session—has been shown to improve long-term retention compared to blocking a single subject for hours. A time-boxed schedule naturally supports this strategy.\n\nFor example:\n- 9:00–9:45 Mathematics\n- 9:55–10:40 History\n- 10:50–11:35 Literature\n\n## Managing Exam Pressure\n\nTwo weeks before an exam, gradually shift blocks toward the exam subject without eliminating others entirely. Cramming in the final 48 hours is a symptom of poor block planning earlier in the semester.\n\n## Chrobox for Students\n\nChrobox lets you plan time blocks and see where your hours actually went. Comparing your intended study schedule against your actual behavior reveals patterns—like always skipping the math block—that you can fix before they cost you grades.\n\nSmarter studying starts with knowing exactly how your time is being spent.",

    ko: "# 학생을 위한 타임박싱: 더 똑똑하게 공부하는 방법\n\n더 열심히 공부하는 것이 항상 답은 아닙니다. 꾸준히 좋은 성과를 내는 학생들은 반드시 가장 많은 시간을 공부하는 것이 아니라 각 시간의 질을 보호합니다. 타임박싱이 그것을 가능하게 합니다.\n\n## 열린 공부 세션의 문제\n\n'시험 공부'를 위해 앉을 때 두뇌에는 명확한 종료 시점이 없습니다. 경계 없이는 파킨슨의 법칙이 작동합니다: 일은 주어진 시간을 채우도록 늘어납니다.\n\n## 타임박싱이 방정식을 바꾸는 방법\n\n단일 과목에 45분 블록을 설정하면:\n- 기억 부호화를 향상시키는 긴박감이 생깁니다\n- 장시간 세션의 수익 체감을 방지합니다\n- 각 과목이 실제로 얼마나 시간을 받는지 추적하기 쉽습니다\n- 기억을 통합하는 필수 휴식이 포함됩니다\n\n## 학생 타임박스 일정 구성\n\n**1단계:** 과목을 나열하고 주간 필요 시간을 추정합니다.\n**2단계:** 특정 날짜와 시간에 블록을 할당합니다.\n**3단계:** 복습 블록을 보호합니다. 공부 시간의 최소 20%는 복습에 할당하세요.\n**4단계:** 초과를 계획합니다. 주제에 더 많은 시간이 필요하면 보충 블록을 예약하세요.\n\n## 과목 전환 전략\n\n단일 공부 세션에서 과목을 전환하는 인터리빙은 장기 기억 보유를 향상시키는 것으로 나타났습니다. 타임박스 일정은 자연스럽게 이 전략을 지원합니다.\n\n## Chrobox 활용\n\nChrobox를 사용하면 시간 블록을 계획하고 실제로 어디에 시간이 갔는지 확인할 수 있습니다. 의도한 공부 일정과 실제 행동을 비교하면 수정할 수 있는 패턴을 발견할 수 있습니다.",
  },

  'morning-routine-scheduling': {
    en: "# How to Build the Perfect Morning Routine with Time-Boxing\n\nThe morning is the one part of the day you can control most completely. No meetings have been scheduled, no emails demand immediate replies, and your willpower reserve is at its highest. Time-boxing that window turns good intentions into a repeatable system.\n\n## Why Morning Routines Fail\n\nMost people approach mornings reactively—reaching for the phone, responding to whatever feels most urgent. Without a plan, the first hour drifts by in a fog of low-value activity, and the day never recovers its sense of direction.\n\nTime-boxing solves this by making decisions in advance. You don't choose what to do each morning; you simply execute the plan you already made.\n\n## Designing Your Morning Blocks\n\n**Identify your non-negotiables.**\nList the three to five activities that, if completed every morning, would make the biggest difference to your health, focus, and mood. Common options: exercise, journaling, reading, deep work, meditation.\n\n**Order by energy requirement.**\nPhysical activity first if you need an energy jolt. Creative or cognitive work next, while the mind is fresh. Lower-stakes tasks last.\n\n**Assign realistic durations.**\nDon't schedule a 60-minute workout if you've never exercised in the morning before. Start with 20 minutes and build up.\n\n## Sample Morning Time-Box (90 minutes)\n\n- 6:00–6:20 Light exercise or walk (20 min)\n- 6:20–6:30 Shower and dress (10 min)\n- 6:30–6:50 Breakfast without screens (20 min)\n- 6:50–7:20 Deep work or reading (30 min)\n- 7:20–7:30 Day planning and inbox review (10 min)\n\n## Making It Stick\n\n**Anchor to an existing habit.** Attach your first block immediately after waking. The habit of waking becomes the trigger for the routine.\n\n**Prepare the night before.** Lay out workout clothes, set up your journal, and close unnecessary browser tabs. Reducing friction at the start of each block increases follow-through.\n\n**Track completion, not perfection.** Missing one block doesn't ruin the routine. Log what you completed and carry on.\n\n## The Role of Flexibility\n\nA rigid routine breaks under real-life pressure. Build in one flex block of 15 minutes that you can repurpose as needed. This buffer prevents a single unexpected event from collapsing the entire morning.\n\n## Chrobox and Your Morning Routine\n\nChrobox integrates with your calendar to visualize your morning blocks alongside the rest of your day. Reviewing how your mornings compare week over week reveals drift before it becomes a problem—and keeps your most important hours protected.\n\nYour best days start the night before, with a plan already in place.",

    ko: "# 타임박싱으로 완벽한 아침 루틴 만들기\n\n아침은 하루 중 가장 완전하게 통제할 수 있는 시간입니다. 타임박싱으로 그 시간을 활용하면 좋은 의도를 반복 가능한 시스템으로 전환할 수 있습니다.\n\n## 아침 루틴이 실패하는 이유\n\n대부분의 사람들은 반응적으로 아침을 맞이합니다. 계획 없이는 첫 한 시간이 낮은 가치의 활동으로 흘러가고, 하루는 방향감각을 회복하지 못합니다.\n\n타임박싱은 미리 결정을 내려 이것을 해결합니다. 매일 아침 무엇을 할지 선택하지 않고, 이미 만들어 놓은 계획을 실행하기만 합니다.\n\n## 아침 블록 설계하기\n\n**필수 활동을 파악하세요.** 매일 아침 완료하면 건강, 집중력, 기분에 가장 큰 차이를 만들 3~5가지 활동을 나열합니다.\n\n**에너지 요구량 순으로 정렬하세요.** 신체 활동을 먼저, 창의적 작업을 다음으로 배치합니다.\n\n**현실적인 시간을 할당하세요.** 처음부터 60분 운동을 계획하지 마세요. 20분으로 시작해 늘려가세요.\n\n## 샘플 아침 타임박스 (90분)\n\n- 6:00–6:20 가벼운 운동 또는 산책\n- 6:20–6:30 샤워와 옷 입기\n- 6:30–6:50 화면 없이 아침 식사\n- 6:50–7:20 딥워크 또는 독서\n- 7:20–7:30 하루 계획 및 받은 편지함 검토\n\n## Chrobox 활용\n\nChrobox는 캘린더와 연동하여 아침 블록을 하루 일정과 함께 시각화합니다. 주간 비교를 통해 루틴의 이탈을 문제가 되기 전에 발견할 수 있습니다.",
  },

  'deep-work-scheduling': {
    en: "# Deep Work Scheduling: How to Protect Your Most Productive Hours\n\nCal Newport defines deep work as 'professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit.' It produces the work that moves careers forward. Yet most knowledge workers get less than one hour of genuine deep work per day.\n\nThe obstacle isn't willpower. It's scheduling.\n\n## Why Deep Work Is So Hard to Protect\n\nDeep work competes with shallow work for calendar space. Meetings, emails, and Slack messages are easier to schedule and feel immediately productive. They also tend to multiply. Without deliberate protection, deep work gets crowded out.\n\n## The Time-Boxing Solution\n\nTime-boxing deep work means treating it like any other appointment: it goes on the calendar, it has a start time, and it cannot be casually rescheduled.\n\nThe key difference from regular scheduling is the explicit commitment to distraction-free conditions. A deep work block isn't just time reserved—it's time protected.\n\n## How to Schedule Deep Work Blocks\n\n**1. Identify your peak hours.**\nMost people have a two to four hour window when their analytical thinking is sharpest. For many, this is mid-morning. Protect this window ruthlessly.\n\n**2. Schedule in advance.**\nPlan deep work blocks at the start of each week, not the start of each day. Day-of scheduling leads to displacement by urgent but shallow tasks.\n\n**3. Limit to four hours maximum.**\nQuality deep work degrades after four hours. Scheduling six hours looks productive but often produces the same output as four hours at higher quality.\n\n**4. Stack similar tasks.**\nIf writing requires deep work, schedule all writing tasks together. Context-switching between different types of deep work reduces the benefit.\n\n## Creating the Right Conditions\n\n- Close email and messaging applications entirely—not just notifications\n- Use a dedicated browser profile with distracting sites blocked\n- Communicate your deep work hours to your team at the start of the week\n- Have a physical signal (closed door, headphones) that signals unavailability\n\n## Handling Interruptions\n\nDespite preparation, interruptions happen. Keep a small notepad for capturing urgent items that arise during deep work. Noting them removes the mental burden and lets you return to focus immediately.\n\nNever break a deep work block to handle an email unless it is a genuine emergency. Almost nothing is.\n\n## Measuring Output, Not Time\n\nThe goal of a deep work block is not to sit at a desk for two hours—it's to produce a specific output. Define the deliverable before the block begins: 'Complete the first draft of section three' beats 'work on the report.'\n\n## Chrobox for Deep Work\n\nChrobox makes deep work blocks visible alongside every other commitment in your day. The visual time log lets you verify that your scheduled deep work actually happened—not just that you were at your desk. Over time, this data helps you find the scheduling patterns that produce your best work.\n\nProtect your deep hours. Everything else can wait.",

    ko: "# 딥워크 스케줄링: 가장 생산적인 시간을 보호하는 방법\n\n칼 뉴포트는 딥워크를 '인지 능력을 한계까지 밀어붙이는 방해 없는 집중 상태에서 수행되는 직업적 활동'으로 정의합니다. 하지만 대부분의 지식 노동자는 하루에 진정한 딥워크를 한 시간도 채 하지 못합니다.\n\n## 딥워크를 보호하기 어려운 이유\n\n딥워크는 얕은 작업과 캘린더 공간을 두고 경쟁합니다. 회의, 이메일, 메시지는 예약하기 쉽고 즉시 생산적인 것처럼 느껴집니다. 의도적인 보호 없이는 딥워크가 밀려납니다.\n\n## 타임박싱 솔루션\n\n딥워크를 타임박싱하는 것은 다른 약속처럼 취급하는 것을 의미합니다: 캘린더에 기록하고, 시작 시간이 있으며, 임의로 일정을 변경할 수 없습니다.\n\n## 딥워크 블록 예약 방법\n\n**1. 최적 시간대를 파악하세요.** 대부분의 사람들은 오전 중반에 분석적 사고가 가장 날카롭습니다. 이 시간대를 철저히 보호하세요.\n\n**2. 미리 예약하세요.** 매일 시작할 때가 아니라 매주 시작할 때 딥워크 블록을 계획하세요.\n\n**3. 최대 4시간으로 제한하세요.** 4시간 후에는 딥워크의 질이 저하됩니다.\n\n**4. 유사한 작업을 묶으세요.** 다른 유형의 딥워크 간 전환은 효과를 감소시킵니다.\n\n## 올바른 조건 만들기\n\n- 이메일과 메시지 앱을 완전히 닫으세요\n- 팀에게 딥워크 시간을 주 초에 알리세요\n- 물리적 신호(닫힌 문, 헤드폰)로 연락 불가 상태를 표시하세요\n\n## Chrobox 활용\n\nChrobox는 딥워크 블록을 하루의 모든 다른 일정과 함께 가시화합니다. 시각적 시간 로그를 통해 예약된 딥워크가 실제로 이루어졌는지 확인할 수 있습니다. 시간이 지남에 따라 이 데이터는 최고의 성과를 만드는 스케줄링 패턴을 찾는 데 도움이 됩니다.",
  },
};
