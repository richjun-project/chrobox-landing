import type { BlogPostMeta } from '../types/blog';

// English blog posts (batch 3: posts 9-12)
export const enBatch3: BlogPostMeta[] = [
  {
    slug: 'meeting-management-time-boxing',
    title: 'Meeting Management with Time-Boxing: End Unproductive Meetings',
    date: '2025-01-29',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['meetings', 'time-boxing', 'productivity', 'time-management', 'workplace'],
    excerpt: 'Discover how time-boxing transforms unproductive meetings into focused, results-driven sessions. Learn practical strategies to reclaim your calendar and boost team efficiency.',
    image: '/screenshots/en/3.webp',
    readTime: 6,
    lang: 'en',
    faqs: [
      {
        question: 'How do I convince my team to adopt time-boxed meetings?',
        questionKo: '팀원들이 타임박싱 회의를 도입하도록 어떻게 설득하나요?',
        answer: 'Start by proposing a two-week trial. Show data from your current meetings — average duration, attendee count, outcomes produced — then compare with time-boxed results after the trial. People are more persuaded by evidence than by concepts. Frame it as an experiment rather than a rule change.',
        answerKo: '2주 시범 운영을 제안하는 것으로 시작하세요. 현재 회의 데이터(평균 시간, 참석자 수, 결과물)를 보여주고 시범 후 타임박싱 결과와 비교하세요. 사람들은 개념보다 증거에 더 설득됩니다. 규칙 변경이 아닌 실험으로 제시하세요.',
      },
      {
        question: 'What is the ideal length for a time-boxed meeting?',
        questionKo: '타임박싱 회의의 이상적인 길이는 얼마인가요?',
        answer: 'Research from Harvard Business Review shows meetings shorter than 30 minutes tend to stay focused, while those exceeding 60 minutes lose attention rapidly. Start with 25-minute slots for status updates and 45-minute slots for decision-making meetings. Avoid the default 60-minute calendar block.',
        answerKo: '하버드 비즈니스 리뷰 연구에 따르면 30분 미만의 회의는 집중력을 유지하는 반면 60분을 초과하면 집중력이 급격히 저하됩니다. 현황 업데이트는 25분, 의사결정 회의는 45분으로 시작하세요. 기본 60분 캘린더 블록은 피하세요.',
      },
      {
        question: 'How do I handle agenda items that run over time?',
        questionKo: '시간을 초과하는 안건은 어떻게 처리하나요?',
        answer: 'Designate a timekeeper whose sole job is to signal when each agenda item approaches its limit. When time is up, decide in 30 seconds: resolve now, table it to async communication, or schedule a focused follow-up. Never let one item derail the entire meeting.',
        answerKo: '각 안건이 시간 한계에 가까워지면 신호를 주는 시간 관리자를 지정하세요. 시간이 되면 30초 내에 결정하세요: 지금 해결, 비동기 커뮤니케이션으로 미루기, 또는 집중 후속 회의 예약. 하나의 안건이 전체 회의를 방해하게 두지 마세요.',
      },
    ],
  },
  {
    slug: 'work-life-balance-scheduling',
    title: 'Work-Life Balance Scheduling: How Time-Boxing Creates Boundaries',
    date: '2025-02-01',
    author: 'Chrobox Team',
    category: 'Time Management',
    tags: ['work-life-balance', 'time-boxing', 'boundaries', 'wellness', 'scheduling', 'burnout'],
    excerpt: 'Learn how strategic time-boxing can help you set firm boundaries between work and personal life, reduce burnout, and build a sustainable schedule that supports your wellbeing.',
    image: '/screenshots/en/1.webp',
    readTime: 8,
    lang: 'en',
    faqs: [
      {
        question: 'Can time-boxing really help prevent burnout?',
        questionKo: '타임박싱이 정말 번아웃 예방에 도움이 될 수 있나요?',
        answer: 'Yes. Burnout often stems from blurred boundaries and feeling like work never truly ends. Time-boxing creates visible stop points — when a block ends, you have explicit permission to stop. This psychological closure reduces rumination, a key driver of burnout. Studies show workers who have clear end-of-work rituals report 34% lower stress levels.',
        answerKo: '네. 번아웃은 종종 경계가 흐려지고 일이 끝나지 않는다는 느낌에서 비롯됩니다. 타임박싱은 명확한 중단 시점을 만들어 블록이 끝나면 중단할 명시적인 허가를 줍니다. 이 심리적 종결감은 번아웃의 주요 원인인 반추를 줄입니다. 연구에 따르면 명확한 퇴근 의식을 가진 직장인들은 스트레스 수준이 34% 낮다고 보고합니다.',
      },
      {
        question: 'How do I protect personal time blocks from work encroachment?',
        questionKo: '업무 침범으로부터 개인 시간 블록을 어떻게 보호하나요?',
        answer: 'Block personal time on your calendar with the same formality as work meetings. Label them with meaningful names ("Family Dinner", "Evening Run") rather than vague labels like "Personal." When colleagues see a named block, they are less likely to book over it. Treat these blocks as non-negotiable commitments.',
        answerKo: '업무 회의와 동일한 형식으로 달력에 개인 시간을 차단하세요. "개인"과 같은 모호한 레이블보다 의미 있는 이름("가족 저녁식사", "저녁 달리기")으로 레이블을 지정하세요. 동료들이 이름이 붙은 블록을 보면 그 위에 예약할 가능성이 낮습니다. 이 블록들을 양보할 수 없는 약속으로 취급하세요.',
      },
      {
        question: 'What should I do if urgent work keeps breaking my personal time boxes?',
        questionKo: '긴급한 업무가 계속 내 개인 시간 블록을 방해하면 어떻게 해야 하나요?',
        answer: 'First, distinguish true urgency from perceived urgency. Most "urgent" requests can wait 30-60 minutes. Build a 30-minute "emergency buffer" block at the end of each workday to absorb genuine late-breaking issues. If interruptions persist, address the systemic issue — this usually means clearer communication with your team about your availability windows.',
        answerKo: '먼저 진짜 긴급함과 인식된 긴급함을 구별하세요. 대부분의 "긴급한" 요청은 30~60분을 기다릴 수 있습니다. 각 근무일 말에 진짜 뒤늦게 발생하는 문제를 흡수하기 위한 30분 "비상 버퍼" 블록을 구축하세요. 방해가 지속되면 시스템적 문제를 해결하세요. 이는 보통 가용 시간에 대한 팀과의 더 명확한 커뮤니케이션을 의미합니다.',
      },
    ],
  },
  {
    slug: 'productivity-for-beginners',
    title: 'Productivity for Beginners: Start with Time-Boxing',
    date: '2025-02-04',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['beginners', 'time-boxing', 'productivity', 'getting-started', 'habits', 'focus'],
    excerpt: 'New to productivity techniques? Time-boxing is the perfect starting point. This beginner-friendly guide walks you through everything you need to get started today.',
    image: '/screenshots/en/2.webp',
    readTime: 7,
    lang: 'en',
    faqs: [
      {
        question: 'Do I need any special tools to start time-boxing?',
        questionKo: '타임박싱을 시작하려면 특별한 도구가 필요한가요?',
        answer: 'No. You can start with a pen, paper, and a basic timer. However, a dedicated app like Chrobox significantly reduces the friction of planning, tracking, and reviewing your time boxes. The built-in analytics help beginners identify patterns and adjust quickly, which is hard to do manually.',
        answerKo: '아니요. 펜, 종이, 기본 타이머로 시작할 수 있습니다. 그러나 Chrobox와 같은 전용 앱은 타임박스를 계획, 추적, 검토하는 마찰을 크게 줄여줍니다. 내장된 분석 기능은 초보자들이 패턴을 식별하고 빠르게 조정하는 데 도움을 주며, 이는 수동으로 하기 어렵습니다.',
      },
      {
        question: 'How long does it take to see results from time-boxing?',
        questionKo: '타임박싱의 결과를 보는 데 얼마나 걸리나요?',
        answer: 'Most beginners notice a difference within the first week — typically completing more tasks with less mental fatigue. Significant improvements in estimation accuracy and schedule adherence usually appear after 3-4 weeks of consistent practice. Like any habit, the longer you maintain it, the more natural and effective it becomes.',
        answerKo: '대부분의 초보자들은 첫 주 내에 차이를 느끼며, 일반적으로 정신적 피로가 적으면서도 더 많은 작업을 완료합니다. 예측 정확도와 일정 준수의 상당한 개선은 보통 3~4주의 일관된 연습 후에 나타납니다. 모든 습관과 마찬가지로 유지할수록 더 자연스럽고 효과적이 됩니다.',
      },
      {
        question: 'What are the most common beginner mistakes with time-boxing?',
        questionKo: '타임박싱에서 초보자들이 가장 많이 하는 실수는 무엇인가요?',
        answer: 'The top three mistakes are: (1) making time boxes too long — start with 30 minutes and work up; (2) not including buffer time between boxes, which causes the whole schedule to collapse when one task runs over; (3) skipping the review step — a 5-minute end-of-day reflection is what transforms time-boxing from a timer gimmick into a genuine productivity system.',
        answerKo: '가장 흔한 세 가지 실수: (1) 타임박스를 너무 길게 만들기 - 30분으로 시작해서 늘려가기; (2) 박스 사이의 버퍼 시간을 포함하지 않아 하나의 작업이 초과되면 전체 일정이 무너지는 것; (3) 검토 단계 건너뛰기 - 하루 5분 성찰이 타임박싱을 타이머 기법에서 진정한 생산성 시스템으로 변환시킵니다.',
      },
    ],
  },
  {
    slug: 'time-boxing-for-teams',
    title: 'Time-Boxing for Teams: Boost Collective Productivity',
    date: '2025-02-07',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['teams', 'time-boxing', 'collaboration', 'productivity', 'management', 'agile'],
    excerpt: 'Time-boxing is not just for individuals. Learn how teams can use structured time allocation to improve collaboration, reduce meeting overhead, and deliver better results together.',
    image: '/screenshots/en/3.webp',
    readTime: 8,
    lang: 'en',
    faqs: [
      {
        question: 'How does team time-boxing differ from individual time-boxing?',
        questionKo: '팀 타임박싱은 개인 타임박싱과 어떻게 다른가요?',
        answer: 'Individual time-boxing manages personal focus; team time-boxing manages collective attention and coordination. The key differences are: team boxes must account for dependencies between members, require explicit handoff protocols when one person\'s output feeds another\'s input, and need shared visibility so everyone knows when to expect deliverables.',
        answerKo: '개인 타임박싱은 개인적 집중을 관리하고, 팀 타임박싱은 집단적 주의와 조율을 관리합니다. 주요 차이점: 팀 박스는 팀원 간의 의존성을 고려해야 하고, 한 사람의 결과물이 다른 사람의 입력으로 이어질 때 명시적인 인계 프로토콜이 필요하며, 모두가 언제 결과물을 기대할 수 있는지 알 수 있도록 공유된 가시성이 필요합니다.',
      },
      {
        question: 'How can a manager implement team time-boxing without micromanaging?',
        questionKo: '관리자가 마이크로매니지먼트 없이 팀 타임박싱을 구현하는 방법은 무엇인가요?',
        answer: 'The key is to time-box outcomes, not activities. Instead of saying "spend 2 hours on the report," say "produce a first draft of sections 1-3 by noon." This gives team members full autonomy over how they use their time while creating a clear, shared checkpoint. Review outputs at the checkpoint, not the process used to create them.',
        answerKo: '핵심은 활동이 아닌 결과물에 시간을 박싱하는 것입니다. "보고서에 2시간을 쓰세요"가 아니라 "정오까지 1-3절의 초안을 작성하세요"라고 말하세요. 이는 팀원들에게 시간 사용에 대한 완전한 자율성을 부여하면서 명확한 공유 체크포인트를 만듭니다. 생성 과정이 아닌 체크포인트에서 결과물을 검토하세요.',
      },
      {
        question: 'What tools work best for team time-boxing?',
        questionKo: '팀 타임박싱에 어떤 도구가 가장 잘 작동하나요?',
        answer: 'The best setup combines a shared calendar for block visibility, a project management tool for task assignment, and a dedicated time-boxing app like Chrobox for individual execution. Chrobox\'s cross-platform sync ensures all team members — whether on iOS, macOS, or working remotely — share the same time structure without friction.',
        answerKo: '가장 좋은 설정은 블록 가시성을 위한 공유 캘린더, 작업 할당을 위한 프로젝트 관리 도구, 그리고 개인 실행을 위한 Chrobox와 같은 전용 타임박싱 앱을 결합합니다. Chrobox의 크로스 플랫폼 동기화는 iOS, macOS 또는 원격으로 작업하는 모든 팀원이 마찰 없이 동일한 시간 구조를 공유하도록 합니다.',
      },
    ],
  },
];

// Korean blog posts (batch 3: posts 9-12)
export const koBatch3: BlogPostMeta[] = [
  {
    slug: 'meeting-management-time-boxing',
    title: '타임박싱으로 회의 관리: 비생산적인 회의 끝내기',
    date: '2025-01-29',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['회의', '타임박싱', '생산성', '시간관리', '직장'],
    excerpt: '타임박싱이 어떻게 비생산적인 회의를 집중적이고 결과 중심의 세션으로 변환하는지 알아보세요. 일정을 되찾고 팀 효율성을 높이는 실용적인 전략을 배우세요.',
    image: '/screenshots/ko/3.webp',
    readTime: 6,
    lang: 'ko',
    faqs: [
      {
        question: '팀원들이 타임박싱 회의를 도입하도록 어떻게 설득하나요?',
        questionKo: '팀원들이 타임박싱 회의를 도입하도록 어떻게 설득하나요?',
        answer: '2주 시범 운영을 제안하는 것으로 시작하세요. 현재 회의 데이터(평균 시간, 참석자 수, 결과물)를 보여주고 시범 후 타임박싱 결과와 비교하세요. 사람들은 개념보다 증거에 더 설득됩니다. 규칙 변경이 아닌 실험으로 제시하세요.',
        answerKo: '2주 시범 운영을 제안하는 것으로 시작하세요. 현재 회의 데이터(평균 시간, 참석자 수, 결과물)를 보여주고 시범 후 타임박싱 결과와 비교하세요. 사람들은 개념보다 증거에 더 설득됩니다. 규칙 변경이 아닌 실험으로 제시하세요.',
      },
      {
        question: '타임박싱 회의의 이상적인 길이는 얼마인가요?',
        questionKo: '타임박싱 회의의 이상적인 길이는 얼마인가요?',
        answer: '하버드 비즈니스 리뷰 연구에 따르면 30분 미만의 회의는 집중력을 유지하는 반면 60분을 초과하면 집중력이 급격히 저하됩니다. 현황 업데이트는 25분, 의사결정 회의는 45분으로 시작하세요. 기본 60분 캘린더 블록은 피하세요.',
        answerKo: '하버드 비즈니스 리뷰 연구에 따르면 30분 미만의 회의는 집중력을 유지하는 반면 60분을 초과하면 집중력이 급격히 저하됩니다. 현황 업데이트는 25분, 의사결정 회의는 45분으로 시작하세요. 기본 60분 캘린더 블록은 피하세요.',
      },
      {
        question: '시간을 초과하는 안건은 어떻게 처리하나요?',
        questionKo: '시간을 초과하는 안건은 어떻게 처리하나요?',
        answer: '각 안건이 시간 한계에 가까워지면 신호를 주는 시간 관리자를 지정하세요. 시간이 되면 30초 내에 결정하세요: 지금 해결, 비동기 커뮤니케이션으로 미루기, 또는 집중 후속 회의 예약. 하나의 안건이 전체 회의를 방해하게 두지 마세요.',
        answerKo: '각 안건이 시간 한계에 가까워지면 신호를 주는 시간 관리자를 지정하세요. 시간이 되면 30초 내에 결정하세요: 지금 해결, 비동기 커뮤니케이션으로 미루기, 또는 집중 후속 회의 예약. 하나의 안건이 전체 회의를 방해하게 두지 마세요.',
      },
    ],
  },
  {
    slug: 'work-life-balance-scheduling',
    title: '워라밸 스케줄링: 타임박싱으로 경계 만들기',
    date: '2025-02-01',
    author: 'Chrobox Team',
    category: '시간 관리',
    tags: ['워라밸', '타임박싱', '경계', '웰니스', '스케줄링', '번아웃'],
    excerpt: '전략적 타임박싱이 업무와 개인 생활 사이의 확실한 경계를 설정하고, 번아웃을 줄이며, 웰빙을 지원하는 지속 가능한 일정을 구축하는 방법을 알아보세요.',
    image: '/screenshots/en/1.webp',
    readTime: 8,
    lang: 'ko',
    faqs: [
      {
        question: '타임박싱이 정말 번아웃 예방에 도움이 될 수 있나요?',
        questionKo: '타임박싱이 정말 번아웃 예방에 도움이 될 수 있나요?',
        answer: '네. 번아웃은 종종 경계가 흐려지고 일이 끝나지 않는다는 느낌에서 비롯됩니다. 타임박싱은 명확한 중단 시점을 만들어 블록이 끝나면 중단할 명시적인 허가를 줍니다. 이 심리적 종결감은 번아웃의 주요 원인인 반추를 줄입니다.',
        answerKo: '네. 번아웃은 종종 경계가 흐려지고 일이 끝나지 않는다는 느낌에서 비롯됩니다. 타임박싱은 명확한 중단 시점을 만들어 블록이 끝나면 중단할 명시적인 허가를 줍니다. 이 심리적 종결감은 번아웃의 주요 원인인 반추를 줄입니다.',
      },
      {
        question: '업무 침범으로부터 개인 시간 블록을 어떻게 보호하나요?',
        questionKo: '업무 침범으로부터 개인 시간 블록을 어떻게 보호하나요?',
        answer: '업무 회의와 동일한 형식으로 달력에 개인 시간을 차단하세요. "개인"과 같은 모호한 레이블보다 의미 있는 이름("가족 저녁식사", "저녁 달리기")으로 레이블을 지정하세요. 동료들이 이름이 붙은 블록을 보면 그 위에 예약할 가능성이 낮습니다.',
        answerKo: '업무 회의와 동일한 형식으로 달력에 개인 시간을 차단하세요. "개인"과 같은 모호한 레이블보다 의미 있는 이름("가족 저녁식사", "저녁 달리기")으로 레이블을 지정하세요. 동료들이 이름이 붙은 블록을 보면 그 위에 예약할 가능성이 낮습니다.',
      },
      {
        question: '긴급한 업무가 계속 내 개인 시간 블록을 방해하면 어떻게 해야 하나요?',
        questionKo: '긴급한 업무가 계속 내 개인 시간 블록을 방해하면 어떻게 해야 하나요?',
        answer: '먼저 진짜 긴급함과 인식된 긴급함을 구별하세요. 대부분의 "긴급한" 요청은 30~60분을 기다릴 수 있습니다. 각 근무일 말에 진짜 뒤늦게 발생하는 문제를 흡수하기 위한 30분 "비상 버퍼" 블록을 구축하세요.',
        answerKo: '먼저 진짜 긴급함과 인식된 긴급함을 구별하세요. 대부분의 "긴급한" 요청은 30~60분을 기다릴 수 있습니다. 각 근무일 말에 진짜 뒤늦게 발생하는 문제를 흡수하기 위한 30분 "비상 버퍼" 블록을 구축하세요.',
      },
    ],
  },
  {
    slug: 'productivity-for-beginners',
    title: '생산성 초보자 가이드: 타임박싱으로 시작하기',
    date: '2025-02-04',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['초보자', '타임박싱', '생산성', '시작하기', '습관', '집중'],
    excerpt: '생산성 기법이 처음이신가요? 타임박싱은 완벽한 출발점입니다. 이 초보자 친화적인 가이드가 오늘 당장 시작하는 데 필요한 모든 것을 안내해 드립니다.',
    image: '/screenshots/en/2.webp',
    readTime: 7,
    lang: 'ko',
    faqs: [
      {
        question: '타임박싱을 시작하려면 특별한 도구가 필요한가요?',
        questionKo: '타임박싱을 시작하려면 특별한 도구가 필요한가요?',
        answer: '아니요. 펜, 종이, 기본 타이머로 시작할 수 있습니다. 그러나 Chrobox와 같은 전용 앱은 타임박스를 계획, 추적, 검토하는 마찰을 크게 줄여줍니다. 내장된 분석 기능은 초보자들이 패턴을 식별하고 빠르게 조정하는 데 도움을 줍니다.',
        answerKo: '아니요. 펜, 종이, 기본 타이머로 시작할 수 있습니다. 그러나 Chrobox와 같은 전용 앱은 타임박스를 계획, 추적, 검토하는 마찰을 크게 줄여줍니다. 내장된 분석 기능은 초보자들이 패턴을 식별하고 빠르게 조정하는 데 도움을 줍니다.',
      },
      {
        question: '타임박싱의 결과를 보는 데 얼마나 걸리나요?',
        questionKo: '타임박싱의 결과를 보는 데 얼마나 걸리나요?',
        answer: '대부분의 초보자들은 첫 주 내에 차이를 느끼며, 일반적으로 정신적 피로가 적으면서도 더 많은 작업을 완료합니다. 예측 정확도와 일정 준수의 상당한 개선은 보통 3~4주의 일관된 연습 후에 나타납니다.',
        answerKo: '대부분의 초보자들은 첫 주 내에 차이를 느끼며, 일반적으로 정신적 피로가 적으면서도 더 많은 작업을 완료합니다. 예측 정확도와 일정 준수의 상당한 개선은 보통 3~4주의 일관된 연습 후에 나타납니다.',
      },
      {
        question: '타임박싱에서 초보자들이 가장 많이 하는 실수는 무엇인가요?',
        questionKo: '타임박싱에서 초보자들이 가장 많이 하는 실수는 무엇인가요?',
        answer: '가장 흔한 세 가지 실수: (1) 타임박스를 너무 길게 만들기 - 30분으로 시작해서 늘려가기; (2) 박스 사이의 버퍼 시간을 포함하지 않아 하나의 작업이 초과되면 전체 일정이 무너지는 것; (3) 검토 단계 건너뛰기 - 하루 5분 성찰이 타임박싱을 진정한 생산성 시스템으로 변환시킵니다.',
        answerKo: '가장 흔한 세 가지 실수: (1) 타임박스를 너무 길게 만들기 - 30분으로 시작해서 늘려가기; (2) 박스 사이의 버퍼 시간을 포함하지 않아 하나의 작업이 초과되면 전체 일정이 무너지는 것; (3) 검토 단계 건너뛰기 - 하루 5분 성찰이 타임박싱을 진정한 생산성 시스템으로 변환시킵니다.',
      },
    ],
  },
  {
    slug: 'time-boxing-for-teams',
    title: '팀을 위한 타임박싱: 집단 생산성 향상하기',
    date: '2025-02-07',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['팀', '타임박싱', '협업', '생산성', '관리', '애자일'],
    excerpt: '타임박싱은 개인만을 위한 것이 아닙니다. 팀이 구조화된 시간 배분을 통해 협업을 개선하고, 회의 오버헤드를 줄이며, 함께 더 나은 결과를 달성하는 방법을 알아보세요.',
    image: '/screenshots/en/3.webp',
    readTime: 8,
    lang: 'ko',
    faqs: [
      {
        question: '팀 타임박싱은 개인 타임박싱과 어떻게 다른가요?',
        questionKo: '팀 타임박싱은 개인 타임박싱과 어떻게 다른가요?',
        answer: '개인 타임박싱은 개인적 집중을 관리하고, 팀 타임박싱은 집단적 주의와 조율을 관리합니다. 팀 박스는 팀원 간의 의존성을 고려해야 하고, 명시적인 인계 프로토콜이 필요하며, 모두가 결과물을 언제 기대할 수 있는지 알 수 있도록 공유된 가시성이 필요합니다.',
        answerKo: '개인 타임박싱은 개인적 집중을 관리하고, 팀 타임박싱은 집단적 주의와 조율을 관리합니다. 팀 박스는 팀원 간의 의존성을 고려해야 하고, 명시적인 인계 프로토콜이 필요하며, 모두가 결과물을 언제 기대할 수 있는지 알 수 있도록 공유된 가시성이 필요합니다.',
      },
      {
        question: '관리자가 마이크로매니지먼트 없이 팀 타임박싱을 구현하는 방법은 무엇인가요?',
        questionKo: '관리자가 마이크로매니지먼트 없이 팀 타임박싱을 구현하는 방법은 무엇인가요?',
        answer: '핵심은 활동이 아닌 결과물에 시간을 박싱하는 것입니다. "보고서에 2시간을 쓰세요"가 아니라 "정오까지 1-3절의 초안을 작성하세요"라고 말하세요. 이는 팀원들에게 완전한 자율성을 부여하면서 명확한 공유 체크포인트를 만듭니다.',
        answerKo: '핵심은 활동이 아닌 결과물에 시간을 박싱하는 것입니다. "보고서에 2시간을 쓰세요"가 아니라 "정오까지 1-3절의 초안을 작성하세요"라고 말하세요. 이는 팀원들에게 완전한 자율성을 부여하면서 명확한 공유 체크포인트를 만듭니다.',
      },
      {
        question: '팀 타임박싱에 어떤 도구가 가장 잘 작동하나요?',
        questionKo: '팀 타임박싱에 어떤 도구가 가장 잘 작동하나요?',
        answer: '가장 좋은 설정은 블록 가시성을 위한 공유 캘린더, 작업 할당을 위한 프로젝트 관리 도구, 개인 실행을 위한 Chrobox와 같은 전용 타임박싱 앱을 결합합니다. Chrobox의 크로스 플랫폼 동기화는 iOS, macOS 또는 원격으로 작업하는 모든 팀원이 마찰 없이 동일한 시간 구조를 공유하도록 합니다.',
        answerKo: '가장 좋은 설정은 블록 가시성을 위한 공유 캘린더, 작업 할당을 위한 프로젝트 관리 도구, 개인 실행을 위한 Chrobox와 같은 전용 타임박싱 앱을 결합합니다. Chrobox의 크로스 플랫폼 동기화는 iOS, macOS 또는 원격으로 작업하는 모든 팀원이 마찰 없이 동일한 시간 구조를 공유하도록 합니다.',
      },
    ],
  },
];

// Content for blog posts (batch 3: posts 9-12)
export const contentBatch3: Record<string, Record<string, string>> = {
  'meeting-management-time-boxing': {
    en: "## The Hidden Cost of Unproductive Meetings\n\nThe average knowledge worker attends 62 meetings per month, yet studies show that over 35% of meeting time is considered unproductive. That adds up to roughly 31 hours wasted every month — nearly an entire work week. Time-boxing is the single most effective intervention for reclaiming that time.\n\n## What Makes Meetings Go Wrong\n\nMost meetings fail for predictable reasons: no clear agenda, no time limits, the wrong people in the room, and no accountability for outcomes. Time-boxing directly addresses the first two problems and creates the conditions for solving the other two.\n\nWithout a time constraint, conversations expand to fill whatever space is available — this is Parkinson's Law at work. Introducing a firm end time forces prioritization and keeps discussions on track.\n\n## How to Time-Box Your Meetings\n\n**1. Set the meeting duration before you send the invite.** Default calendar slots are 30 or 60 minutes, but your meeting might only need 20. Be deliberate.\n\n**2. Create a timed agenda.** Divide the total meeting time among agenda items before the meeting starts. For a 30-minute meeting with three topics, allocate 10 minutes each — and communicate this to participants in advance.\n\n**3. Assign a timekeeper.** One participant is responsible for tracking time per agenda item and giving a 2-minute warning before each slot closes.\n\n**4. Use a shared visible timer.** When everyone can see the clock counting down, the group self-regulates more effectively than any facilitator can achieve alone.\n\n**5. Define the outcome for each agenda item.** Before the meeting, label each item as: Decision, Information Share, or Discussion. This sets participant expectations and speeds resolution.\n\n## The 48-Hour Rule for Async Follow-Up\n\nWhen agenda items run over or raise new questions, resist the temptation to extend the meeting. Instead, route unresolved items to async channels (email, Slack, project management tools) with a 48-hour response window. This respects everyone's time while ensuring issues don't fall through the cracks.\n\n## Using Chrobox to Prepare for Meetings\n\nBefore each meeting, use Chrobox to time-box your preparation: 15 minutes to review materials, 5 minutes to write your talking points. After the meeting, time-box your follow-up actions immediately — studies show task completion rates drop by 40% when follow-up is delayed by more than an hour.\n\n## The Compound Effect of Better Meetings\n\nTeams that implement structured time-boxing in meetings typically report:\n- 25-40% reduction in meeting duration\n- Higher decision quality due to forced prioritization\n- Lower frustration and improved morale\n- More calendar space for deep, focused work\n\nStart with your next recurring meeting. Apply a timed agenda, designate a timekeeper, and measure the difference after four weeks.",

    ko: "## 비생산적인 회의의 숨겨진 비용\n\n지식 근로자는 월평균 62회의 회의에 참석하지만, 연구에 따르면 회의 시간의 35% 이상이 비생산적이라고 합니다. 이는 매달 약 31시간, 즉 거의 한 주의 근무 시간이 낭비된다는 것을 의미합니다. 타임박싱은 이 시간을 되찾기 위한 가장 효과적인 방법입니다.\n\n## 회의에 타임박싱 적용하는 방법\n\n**1. 초대장을 보내기 전에 회의 시간을 설정하세요.** 기본 캘린더 슬롯은 30분 또는 60분이지만, 회의에는 20분만 필요할 수 있습니다. 의도적으로 설정하세요.\n\n**2. 시간이 정해진 안건을 만드세요.** 회의 전에 안건 항목 간에 총 회의 시간을 나누세요. 3개 주제로 30분 회의라면 각 10분씩 배분하고 이를 참석자에게 미리 알리세요.\n\n**3. 시간 관리자를 지정하세요.** 한 참석자가 안건별 시간을 추적하고 각 슬롯이 끝나기 2분 전에 신호를 주는 역할을 담당합니다.\n\n**4. 공유 가시 타이머를 사용하세요.** 모든 사람이 카운트다운을 볼 수 있으면 그룹이 진행자보다 더 효과적으로 자율 규제합니다.\n\n## Chrobox로 회의 준비하기\n\n각 회의 전에 Chrobox를 사용하여 준비 시간을 박싱하세요: 자료 검토에 15분, 발언 요점 작성에 5분. 회의 후에는 즉시 후속 조치를 시간 박싱하세요. 연구에 따르면 후속 조치가 1시간 이상 지연되면 작업 완료율이 40% 감소합니다.\n\n## 더 나은 회의의 복합 효과\n\n구조화된 타임박싱을 회의에 도입한 팀들은 일반적으로 회의 시간 25~40% 단축, 강제 우선순위 지정으로 인한 더 높은 의사결정 품질, 낮은 불만족과 개선된 사기를 보고합니다. 다음 정기 회의부터 시작하세요.",
  },

  'work-life-balance-scheduling': {
    en: `## Why Work-Life Balance Is a Scheduling Problem\n\nMost conversations about work-life balance focus on mindset or culture. But underneath every imbalance is a scheduling problem: work expands into personal time because there are no clear boundaries encoded in the calendar. Time-boxing solves this at the structural level.\n\n## The Boundary Paradox\n\nMany people intend to stop working at 6 PM but find themselves checking email at 10 PM. The intention exists; the structure does not. Without explicit time boxes for personal activities, work always wins — because it has an endless supply of tasks, urgency, and social pressure.\n\nThe solution is to treat personal time with the same structural formality as professional commitments.\n\n## How to Build a Balanced Time-Boxed Schedule\n\n**1. Start with your non-negotiables.** Before scheduling work, block your core personal commitments: sleep, meals, exercise, family time. These are the foundation, not the afterthought.\n\n**2. Apply the Energy Mapping principle.** Schedule your most demanding work during your peak energy hours (typically morning for most people), and lighter tasks or meetings during natural energy dips. This prevents using personal time as overflow for procrastinated work.\n\n**3. Create a hard stop ritual.** At the end of your last work time box, spend 10 minutes processing your inbox, updating your task list, and writing your top 3 priorities for tomorrow. This psychological closure signals to your brain that work is done.\n\n**4. Build transition time boxes.** Between work and personal time, schedule a 15-30 minute transition activity — a walk, a workout, a brief meditation. This prevents work stress from bleeding into personal hours.\n\n**5. Schedule recovery, not just rest.** Rest is passive (watching TV); recovery is active restoration (exercise, social connection, hobbies). Time-box recovery activities to ensure they actually happen.\n\n## The 80/20 Availability Rule\n\nNot all work time needs to be equally accessible. Consider making 80% of your work time box hours fully focused (notifications off, status set to "Do Not Disturb") and 20% open for collaboration and response. This structure dramatically reduces the pressure to be constantly available, which is one of the main drivers of work bleeding into personal time.\n\n## Using Chrobox for Work-Life Balance\n\nChrobox allows you to color-code time boxes by life domain — work, health, family, personal development. When you view your week, you get an immediate visual signal of whether your time allocation matches your stated priorities. If the work color dominates, you can rebalance before the week starts, not after it ends.\n\n## The Long Game\n\nWork-life balance is not achieved in a single good week. It is built through consistent scheduling habits that compound over months and years. Time-boxing gives you the daily practice that makes this possible — one structured day at a time.\n\nCommit to a 30-day experiment: time-box at least two personal commitments per day, treat them as non-negotiable, and measure your stress and satisfaction at the end of the month.`,

    ko: "## 워라밸은 스케줄링 문제입니다\n\n워라밸에 대한 대부분의 대화는 마인드셋이나 문화에 초점을 맞춥니다. 하지만 모든 불균형 뒤에는 스케줄링 문제가 있습니다. 업무가 개인 시간으로 확장되는 이유는 달력에 명확한 경계가 없기 때문입니다. 타임박싱은 이를 구조적 수준에서 해결합니다.\n\n## 균형 잡힌 타임박싱 일정 구축 방법\n\n**1. 양보할 수 없는 것들부터 시작하세요.** 업무를 예약하기 전에 핵심 개인 약속(수면, 식사, 운동, 가족 시간)을 차단하세요. 이것들이 기반입니다.\n\n**2. 에너지 매핑 원칙을 적용하세요.** 최고 에너지 시간(대부분의 경우 아침)에 가장 요구하는 업무를 예약하고, 자연적 에너지 저하 시간에 가벼운 작업이나 회의를 예약하세요.\n\n**3. 완전한 중단 의식을 만드세요.** 마지막 업무 타임박스가 끝날 때 10분을 받은 편지함 처리, 작업 목록 업데이트, 내일 상위 3개 우선순위 작성에 사용하세요.\n\n**4. 전환 타임박스를 구축하세요.** 업무와 개인 시간 사이에 15~30분 전환 활동(산책, 운동, 짧은 명상)을 예약하세요.\n\n## Chrobox로 워라밸 관리하기\n\nChrobox를 사용하면 생활 영역별로(업무, 건강, 가족, 개인 개발) 타임박스를 색상으로 구분할 수 있습니다. 한 주를 볼 때 시간 배분이 명시된 우선순위와 일치하는지 즉각적인 시각적 신호를 받습니다. 30일 실험을 약속하세요: 매일 최소 두 개의 개인 약속을 타임박싱하고 한 달 말에 스트레스와 만족도를 측정하세요.",
  },

  'productivity-for-beginners': {
    en: `## Why Time-Boxing Is the Best First Productivity Technique\n\nThe productivity landscape is overwhelming for beginners. GTD, Pomodoro, Eisenhower Matrix, Eat the Frog, Deep Work — where do you start? The answer is time-boxing, because it is the foundation that makes every other technique work better.\n\nTime-boxing requires no personality change, no complex system to maintain, and no significant upfront investment of time. You start seeing results in days, not months.\n\n## Understanding the Core Principle\n\nTime-boxing has one fundamental insight: tasks will consume however much time you give them. Give a task an open-ended slot ("work on the report until it's done") and it will expand. Give it a fixed slot ("45 minutes on the report, then stop") and Parkinson's Law works in your favor — you produce something concrete within the constraint.\n\n## Your First Week: A Step-by-Step Plan\n\n**Day 1-2: Observe.** Before changing anything, track how you currently spend time for two days. Note the start and end time of each activity. This baseline reveals where time actually goes versus where you think it goes.\n\n**Day 3-4: Plan.** At the start of each day, write down your 3-5 most important tasks and assign each a time estimate. Start conservatively — add 50% to whatever you think a task will take.\n\n**Day 5-7: Execute and adjust.** Follow your time boxes and record actual time spent. Compare estimate versus actual. Most beginners discover they underestimate by 30-50%. This data is gold.\n\n## The Four Essential Time Box Types\n\n1. **Deep Work Blocks** (60-90 min): For complex, creative, or cognitively demanding tasks. No interruptions.\n2. **Admin Blocks** (20-30 min): For email, messages, administrative tasks. Batch these together.\n3. **Meeting Blocks**: For calls and meetings. Always time-box meeting preparation separately.\n4. **Buffer Blocks** (15-30 min): Unscheduled time between major blocks. Essential for unexpected issues.\n\n## Common Beginner Adjustments\n\n**Your boxes are too long.** If you consistently cannot maintain focus for the duration of your boxes, shorten them. A 25-minute box you complete beats a 90-minute box you abandon.\n\n**You're scheduling too much.** Fill no more than 60-70% of your available time with planned boxes. The rest is buffer. This sounds counterintuitive, but it produces better outcomes than 100% scheduling.\n\n**You're skipping the review.** At the end of each day, spend 5 minutes reviewing what you completed versus what you planned. This single habit, more than any other, drives rapid improvement.\n\n## Getting Started with Chrobox\n\nChrobox is designed specifically for time-boxing beginners and experts alike. The app guides you through creating your first time boxes, tracks your actual time automatically, and provides weekly insights about your patterns. Available on iOS and macOS with real-time sync, so your plan is always with you.\n\nStart with three time boxes tomorrow: one for your most important task, one for email, and one buffer. That's it. Build from there.`,

    ko: `## 왜 타임박싱이 첫 번째 생산성 기법으로 최선인가요?\n\n타임박싱은 하나의 근본적인 통찰력을 가지고 있습니다. 작업은 주어진 시간을 소비한다는 것입니다. 작업에 개방형 슬롯을 주면("보고서가 완료될 때까지 작업") 확장됩니다. 고정 슬롯을 주면("보고서에 45분, 그 후 중단") 파킨슨의 법칙이 유리하게 작용합니다.\n\n## 첫 주: 단계별 계획\n\n**1~2일차: 관찰.** 아무것도 바꾸기 전에 이틀 동안 현재 시간 사용 방식을 추적하세요. 각 활동의 시작 및 종료 시간을 기록하세요.\n\n**3~4일차: 계획.** 하루 시작 시 3~5가지 가장 중요한 작업을 적고 각각에 시간 예측을 할당하세요. 보수적으로 시작하고 예상 시간에 50%를 추가하세요.\n\n**5~7일차: 실행 및 조정.** 타임박스를 따르고 실제 소요 시간을 기록하세요. 예측과 실제를 비교하세요. 대부분의 초보자는 30~50% 과소평가한다는 것을 발견합니다.\n\n## 네 가지 필수 타임박스 유형\n\n1. **딥워크 블록** (60~90분): 복잡하고 창의적이거나 인지적으로 요구하는 작업용.\n2. **행정 블록** (20~30분): 이메일, 메시지, 행정 업무용. 이것들을 함께 묶으세요.\n3. **회의 블록**: 통화 및 회의용.\n4. **버퍼 블록** (15~30분): 주요 블록 사이의 예약되지 않은 시간.\n\n## Chrobox로 시작하기\n\nChrobox는 타임박싱 초보자와 전문가 모두를 위해 특별히 설계되었습니다. 앱은 첫 타임박스 만들기를 안내하고, 실제 시간을 자동으로 추적하며, 패턴에 대한 주간 인사이트를 제공합니다. 내일 타임박스 세 개로 시작하세요: 가장 중요한 작업 하나, 이메일 하나, 버퍼 하나.`,
  },

  'time-boxing-for-teams': {
    en: `## Why Teams Struggle with Productivity Differently Than Individuals\n\nIndividual productivity is hard. Team productivity is harder. When you add coordination costs, communication overhead, and the challenge of aligning diverse working styles, the complexity multiplies. Time-boxing addresses these team-specific challenges in ways that individual productivity techniques cannot.\n\n## The Core Problem: Invisible Time\n\nIn most teams, time is invisible. People work, meetings happen, and results appear (or don't) — but nobody has a clear picture of how collective time is actually being spent. This opacity makes it impossible to identify waste, optimize workflows, or set realistic expectations.\n\nTeam time-boxing makes time visible. When everyone's blocks are shared and structured, patterns emerge: where are the bottlenecks? Which team members are over-scheduled? Where does rework happen most?\n\n## Implementing Team Time-Boxing: A Framework\n\n**Phase 1: Align on principles (Week 1)**\nBefore tools or schedules, agree on team norms: What counts as an interruption? What communication requires immediate response versus a same-day response? When is it appropriate to book over someone's focus time? Documenting these agreements prevents conflict later.\n\n**Phase 2: Establish shared structure (Week 2)**\nCreate a team time-boxing template: morning sync (15 min), deep work blocks (2-3 per day, minimum 90 min each), collaboration windows (specific hours when meetings can be scheduled), and end-of-day wrap-up (15 min). Protect deep work blocks from meeting scheduling.\n\n**Phase 3: Use outcome-based time boxes (Week 3+)**\nShift from task-based to outcome-based assignments. Instead of "work on the marketing campaign," assign "complete first draft of Q2 campaign brief by Thursday 5 PM." This changes accountability dynamics and makes handoffs cleaner.\n\n**Phase 4: Review and refine (Monthly)**\nHold a monthly retrospective specifically on time structure. Review: Are deep work blocks being honored? Are meeting hours staying within their windows? Is rework decreasing? Adjust the team template based on data.\n\n## Time-Boxing in Agile Teams\n\nAgile teams already use time-boxing at the sprint level (2-week boxes). The opportunity is to extend this discipline to the daily level. Daily stand-ups should themselves be time-boxed to 15 minutes. Sprint ceremonies (planning, review, retrospective) benefit from timed agendas within their already time-boxed formats.\n\n## Managing Different Work Styles\n\nTeams contain both morning people and evening people, both deep-work specialists and collaborative generalists. A good team time-boxing system accommodates this by defining shared availability windows (e.g., 10 AM-12 PM and 2-4 PM for collaboration) while leaving remaining time for individual autonomy.\n\n## Cross-Platform Coordination with Chrobox\n\nOne of the biggest friction points in team time-boxing is tool fragmentation — some team members use iOS, others macOS, some work remotely. Chrobox's cross-platform sync ensures that time structures are consistent regardless of device or location. When a team block is set, everyone sees it. When a time box is completed, the data is available for team-level reporting.\n\n## Measuring Team Time-Boxing Success\n\nTrack these metrics after implementing team time-boxing:\n- **Meeting time per week** (target: reduce by 20% within 60 days)\n- **Deep work hours per person per week** (target: increase by 30%)\n- **Rework rate** (target: decrease by 15%)\n- **Team satisfaction score** (monthly pulse survey)\n\nTime-boxing for teams is not about control — it is about creating the conditions for individual excellence to combine into collective excellence.`,

    ko: `## 팀이 개인과 다르게 생산성에 어려움을 겪는 이유\n\n개인 생산성은 어렵습니다. 팀 생산성은 더 어렵습니다. 조율 비용, 커뮤니케이션 오버헤드, 다양한 작업 스타일 정렬 과제가 추가되면 복잡성이 배가됩니다. 타임박싱은 개인 생산성 기법으로는 해결할 수 없는 팀 특유의 문제를 해결합니다.\n\n## 팀 타임박싱 구현: 프레임워크\n\n**1단계: 원칙 정렬 (1주차)**\n도구나 일정 전에 팀 규범에 동의하세요: 무엇이 방해로 간주되나요? 어떤 커뮤니케이션이 즉각적인 응답이 필요한가요? 집중 시간을 예약하는 것이 언제 적절한가요?\n\n**2단계: 공유 구조 구축 (2주차)**\n팀 타임박싱 템플릿 만들기: 아침 동기화(15분), 딥워크 블록(하루 2~3개, 각 최소 90분), 협업 창(회의를 예약할 수 있는 특정 시간), 하루 마무리(15분).\n\n**3단계: 결과 기반 타임박스 사용 (3주차+)**\n작업 기반에서 결과 기반 할당으로 전환하세요. "마케팅 캠페인 작업" 대신 "목요일 오후 5시까지 2분기 캠페인 브리프 초안 완성"을 할당하세요.\n\n## Chrobox로 크로스 플랫폼 조율\n\n팀 타임박싱의 가장 큰 마찰 중 하나는 도구 파편화입니다. Chrobox의 크로스 플랫폼 동기화는 기기나 위치에 관계없이 시간 구조가 일관성 있게 유지되도록 합니다. 팀 블록이 설정되면 모든 사람이 볼 수 있고, 타임박스가 완료되면 팀 수준 보고를 위한 데이터를 사용할 수 있습니다.\n\n## 팀 타임박싱 성과 측정\n\n팀 타임박싱 구현 후 이 지표들을 추적하세요: 주당 회의 시간(목표: 60일 내 20% 감소), 개인당 주당 딥워크 시간(목표: 30% 증가), 재작업률(목표: 15% 감소). 팀 타임박싱은 통제에 관한 것이 아니라 개인적 탁월함이 집단적 탁월함으로 결합되는 조건을 만드는 것입니다.`,
  },
};
