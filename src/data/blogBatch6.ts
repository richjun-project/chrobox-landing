import type { BlogPostMeta } from '../types/blog';

export const enBatch6: BlogPostMeta[] = [
  {
    slug: 'time-audit-guide',
    title: 'How to Do a Time Audit: Find Where Your Hours Really Go',
    date: '2025-03-06',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['time-audit', 'time-tracking', 'productivity', 'time-management', 'self-improvement'],
    excerpt: 'A time audit reveals exactly how you spend your day. Learn the step-by-step process to track, analyze, and optimize your time for maximum productivity.',
    image: '/screenshots/en/1.webp',
    readTime: 7,
    lang: 'en',
    faqs: [
      {
        question: 'What is a time audit and why should I do one?',
        questionKo: '타임 오딧이란 무엇이며 왜 해야 하나요?',
        answer: 'A time audit is the process of tracking every activity you do for a set period (usually 3-7 days) to understand exactly how you spend your time. Most people discover they waste 2-3 hours daily on low-value activities they were not even aware of. This awareness is the first step to reclaiming productive time.',
        answerKo: '타임 오딧은 일정 기간(보통 3~7일) 동안 모든 활동을 추적하여 시간을 정확히 어떻게 사용하는지 파악하는 과정입니다. 대부분의 사람들은 인식하지 못했던 저가치 활동에 매일 2~3시간을 낭비하고 있다는 것을 발견합니다. 이 인식이 생산적인 시간을 되찾는 첫 번째 단계입니다.',
      },
      {
        question: 'How long should a time audit last?',
        questionKo: '타임 오딧은 얼마 동안 해야 하나요?',
        answer: 'A minimum of 3 days gives you useful data, but a full 7-day audit captures weekday and weekend patterns. Track in 15-30 minute intervals for the best balance between accuracy and effort. After your first audit, do a follow-up audit every quarter to measure improvement.',
        answerKo: '최소 3일이면 유용한 데이터를 얻을 수 있지만, 7일 전체 오딧은 평일과 주말 패턴을 모두 포착합니다. 정확도와 노력의 최적 균형을 위해 15~30분 간격으로 추적하세요. 첫 오딧 후에는 분기마다 후속 오딧을 실시하여 개선을 측정하세요.',
      },
      {
        question: 'What tools can I use for a time audit?',
        questionKo: '타임 오딧에 어떤 도구를 사용할 수 있나요?',
        answer: 'You can use a simple spreadsheet, a notebook, or dedicated apps like Chrobox. The key is choosing a method with zero friction so you actually stick with it. Chrobox is ideal because its time-boxing feature naturally creates a log of how you spend each block, making the audit automatic.',
        answerKo: '간단한 스프레드시트, 노트북, 또는 Chrobox 같은 전용 앱을 사용할 수 있습니다. 핵심은 실제로 지속할 수 있도록 마찰이 없는 방법을 선택하는 것입니다. Chrobox는 타임박싱 기능이 자연스럽게 각 블록을 어떻게 사용했는지 기록을 생성하므로 오딧이 자동으로 이루어져 이상적입니다.',
      },
    ],
  },
];

export const koBatch6: BlogPostMeta[] = [
  {
    slug: 'time-audit-guide',
    title: '타임 오딧 가이드: 내 시간이 어디로 가는지 파악하는 방법',
    date: '2025-03-06',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['타임오딧', '시간추적', '생산성', '시간관리', '자기개발'],
    excerpt: '타임 오딧은 하루를 정확히 어떻게 보내는지 보여줍니다. 시간을 추적하고 분석하여 생산성을 극대화하는 단계별 프로세스를 알아보세요.',
    image: '/screenshots/ko/1.webp',
    readTime: 7,
    lang: 'ko',
    faqs: [
      {
        question: 'What is a time audit and why should I do one?',
        questionKo: '타임 오딧이란 무엇이며 왜 해야 하나요?',
        answer: 'A time audit tracks every activity for 3-7 days to reveal how you actually spend your time.',
        answerKo: '타임 오딧은 일정 기간 동안 모든 활동을 추적하여 시간을 정확히 어떻게 사용하는지 파악하는 과정입니다. 대부분의 사람들은 인식하지 못했던 저가치 활동에 매일 2~3시간을 낭비하고 있다는 것을 발견합니다.',
      },
      {
        question: 'How long should a time audit last?',
        questionKo: '타임 오딧은 얼마 동안 해야 하나요?',
        answer: 'A minimum of 3 days, ideally 7 days to capture full weekly patterns.',
        answerKo: '최소 3일이면 유용한 데이터를 얻을 수 있지만, 7일 전체 오딧은 평일과 주말 패턴을 모두 포착합니다. 15~30분 간격으로 추적하세요.',
      },
      {
        question: 'What tools can I use for a time audit?',
        questionKo: '타임 오딧에 어떤 도구를 사용할 수 있나요?',
        answer: 'A spreadsheet, notebook, or apps like Chrobox which automatically logs time blocks.',
        answerKo: '스프레드시트, 노트북, 또는 Chrobox 같은 전용 앱을 사용할 수 있습니다. Chrobox는 타임박싱 기능이 자연스럽게 기록을 생성하므로 오딧이 자동으로 이루어집니다.',
      },
    ],
  },
];

export const contentBatch6: Record<string, Record<string, string>> = {
  en: {
    'time-audit-guide': "# How to Do a Time Audit: Find Where Your Hours Really Go\n\nDo you ever wonder where your day went? You started with good intentions, but by 5 PM, your to-do list barely moved. The problem is not laziness — it is a lack of awareness about how you actually spend your time.\n\nA **time audit** fixes this by giving you hard data on your daily habits.\n\n## What is a Time Audit?\n\nA time audit is the practice of recording every activity you perform over a set period, usually 3 to 7 days. Unlike time-tracking for billing, a time audit captures everything: work tasks, social media breaks, commute time, meals, and even staring out the window.\n\nThe goal is not to judge yourself but to see reality clearly.\n\n## Why Most People Need a Time Audit\n\nResearch from the American Psychological Association shows that people overestimate productive time by 25-50%. You think you worked 6 focused hours, but the actual number is closer to 3-4.\n\nCommon time leaks a time audit reveals:\n- **Context switching** between tasks (average cost: 23 minutes to refocus)\n- **Reactive work** like unplanned emails and messages\n- **Perfectionism** on low-impact tasks\n- **Meeting overload** with unclear outcomes\n\n## How to Conduct a Time Audit\n\n### Step 1: Choose Your Tracking Method\n\nPick something frictionless:\n- A simple notebook\n- A spreadsheet with 15-minute blocks\n- An app like Chrobox that logs time-boxes automatically\n\n### Step 2: Track Everything for 3-7 Days\n\nRecord what you do in 15 or 30-minute increments. Be honest. Include breaks, distractions, and transition time. Do not try to optimize during the audit — just observe.\n\n### Step 3: Categorize Your Activities\n\nGroup activities into categories:\n- **Deep work** (creative, analytical, high-value)\n- **Shallow work** (email, admin, routine tasks)\n- **Breaks and recovery**\n- **Time wasters** (unplanned scrolling, unnecessary meetings)\n\n### Step 4: Analyze the Results\n\nAsk yourself:\n- How many hours of deep work did I actually get?\n- What are my top 3 time wasters?\n- When is my peak energy period?\n- Which tasks took longer than expected?\n\n### Step 5: Redesign Your Schedule\n\nUse your audit findings to time-box your ideal day:\n- Protect peak hours for deep work\n- Batch shallow tasks together\n- Eliminate or delegate time wasters\n- Add buffer time for unexpected tasks\n\n## Time Audit with Chrobox\n\nChrobox makes time auditing effortless. Every time-box you create becomes a data point. After a week, you can see exactly how your time was distributed across categories.\n\nFeatures that help:\n- **Visual timeline** shows your day at a glance\n- **Category tags** automatically classify your activities\n- **Daily retrospective** prompts you to reflect on what worked\n- **AI insights** highlight patterns you might miss\n\n## Conclusion\n\nA time audit is the most powerful first step you can take toward better productivity. You cannot optimize what you do not measure. Spend one week tracking your time, and the insights will transform how you plan every week after.\n\nStart your time audit today with Chrobox's 3-day free trial.",
  },
  ko: {
    'time-audit-guide': "# 타임 오딧 가이드: 내 시간이 어디로 가는지 파악하는 방법\n\n하루가 어디로 갔는지 궁금하신 적 있으신가요? 좋은 의도로 시작했지만 오후 5시가 되면 할 일 목록은 거의 변하지 않았습니다. 문제는 게으름이 아닙니다 — 실제로 시간을 어떻게 사용하는지에 대한 인식이 부족한 것입니다.\n\n**타임 오딧**은 일상적인 습관에 대한 확실한 데이터를 제공하여 이 문제를 해결합니다.\n\n## 타임 오딧이란?\n\n타임 오딧은 보통 3~7일 동안 수행하는 모든 활동을 기록하는 관행입니다. 업무 작업, 소셜 미디어 휴식, 출퇴근 시간, 식사 등 모든 것을 포착합니다.\n\n## 타임 오딧이 필요한 이유\n\n연구에 따르면 사람들은 생산적인 시간을 25~50% 과대평가합니다. 6시간 집중해서 일했다고 생각하지만 실제 숫자는 3~4시간에 가깝습니다.\n\n타임 오딧이 밝혀내는 일반적인 시간 누수:\n- 작업 간 **컨텍스트 전환** (평균 비용: 재집중에 23분)\n- 계획되지 않은 이메일과 메시지 같은 **반응적 작업**\n- 영향력이 낮은 작업에 대한 **완벽주의**\n\n## 타임 오딧 수행 방법\n\n### 1단계: 추적 방법 선택\n\n마찰 없는 방법을 선택하세요:\n- 간단한 노트북\n- 15분 블록이 있는 스프레드시트\n- 타임박스를 자동으로 기록하는 Chrobox 같은 앱\n\n### 2단계: 3~7일 동안 모든 것을 추적\n\n15분 또는 30분 간격으로 하는 일을 기록하세요. 솔직하게 적으세요.\n\n### 3단계: 활동 분류\n\n- **딥 워크** (창의적, 분석적, 고가치)\n- **샬로우 워크** (이메일, 행정, 루틴 작업)\n- **시간 낭비** (계획되지 않은 스크롤링, 불필요한 회의)\n\n### 4단계: 결과 분석 및 스케줄 재설계\n\n오딧 결과를 사용하여 이상적인 하루를 타임박싱하세요. 피크 시간을 딥 워크로 보호하고 샬로우 작업을 함께 묶으세요.\n\n## Chrobox로 타임 오딧\n\nChrobox는 타임 오딧을 쉽게 만듭니다. 생성하는 모든 타임박스가 데이터 포인트가 됩니다. 일주일 후 시간이 카테고리별로 어떻게 분배되었는지 정확히 볼 수 있습니다.\n\n오늘 Chrobox의 3일 무료 체험으로 타임 오딧을 시작하세요.",
  },
};
