import { LOCALIZED_CONTENT } from '../data/localized';
import type { ContentLanguage } from './seo';

export type BlogClusterId =
  | 'time-boxing-fundamentals'
  | 'scheduling-routines'
  | 'focus-productivity'
  | 'app-blocking-focus'
  | 'productivity-for-audiences'
  | 'tools-comparisons';

export interface BlogClusterDefinition {
  id: BlogClusterId;
  slug: string;
  hubSlug: string;
  name: { en: string; ko: string };
  description: { en: string; ko: string };
  /**
   * Long-form category introduction. Category listing pages are otherwise
   * thin (~150 words of post titles), so each cluster carries its own 300+
   * word primer that gives the page standalone search value.
   */
  intro: { en: string[]; ko: string[] };
  members: string[];
}

export const BLOG_CLUSTERS: BlogClusterDefinition[] = [
  {
    id: 'time-boxing-fundamentals',
    slug: 'time-boxing-fundamentals',
    hubSlug: 'what-is-time-boxing',
    name: {
      en: 'Time-Boxing Fundamentals',
      ko: '타임박싱 기초',
    },
    description: {
      en: 'Core concepts, foundational techniques, and the science behind time-boxing.',
      ko: '타임박싱의 핵심 개념과 기초 기법, 과학적 원리를 다루는 글입니다.',
    },
    intro: {
      en: [
        'Time-boxing is the practice of deciding how long a task gets before you start it. Instead of working until something feels finished, you give it a fixed block — 30 minutes, 90 minutes, one afternoon — and you stop when the block ends. That single constraint changes almost everything about how a day plays out. Open-ended work stops expanding to fill the day, half-formed tasks stop hiding behind "I\'ll get to it," and the vague anxiety of a long list turns into a schedule you can actually look at.',
        'The guides in this category cover the foundations. Start with what time-boxing is and how it differs from a to-do list, then look at how it compares to the two techniques people confuse it with most: the Pomodoro Technique, which fixes the interval but not the task, and time blocking, which reserves calendar space without committing to a duration. Understanding those distinctions matters, because each one solves a different problem, and mixing them up is the most common reason a first attempt at time-boxing falls apart within a week.',
        'From there the reading moves into practice. Five core strategies show how to size a block realistically, when to batch small work together, and how to protect the first block of the morning. A separate guide walks through the mistakes that sink most beginners — boxes that are too short, schedules with no slack, treating every estimate as a promise — and how to recover when a box overruns. Two more pieces cover the ideas behind the method: Parkinson\'s Law, which explains why a deadline compresses work, and the eat-the-frog sequencing rule, which explains why the hardest task belongs early.',
        'You do not need special software to try any of this. A paper notebook and a timer are enough to run your first time-boxed day. Chrobox exists to remove the friction that makes people quit in week two: it estimates durations for you, arranges the blocks into a realistic timeline, and blocks distracting apps while each block runs — but the technique comes first, and these guides are where it starts.',
      ],
      ko: [
        '타임박싱은 작업을 시작하기 전에 "이 일에 얼마를 쓸지"를 먼저 정하는 방법입니다. 끝날 때까지 붙잡고 있는 대신 30분, 90분, 오후 한나절처럼 고정된 블록을 배정하고, 블록이 끝나면 멈춥니다. 이 제약 하나로 하루의 성격이 완전히 달라집니다. 끝이 열려 있던 작업이 하루를 다 잡아먹지 못하게 되고, 미루던 일이 "나중에 하겠다"는 말 뒤에 숨지 못하게 되며, 막막했던 목록이 눈으로 확인할 수 있는 일정으로 바뀝니다.',
        '이 카테고리의 글들은 그 기초를 다룹니다. 먼저 타임박싱이 무엇이고 할 일 목록과 어떻게 다른지 확인한 뒤, 사람들이 가장 많이 혼동하는 두 기법과 비교해 보세요. 포모도로는 시간 간격은 고정하지만 어떤 작업을 할지는 정하지 않고, 타임블로킹은 캘린더에 자리는 잡아두지만 소요 시간을 약속하지는 않습니다. 이 차이를 이해하는 게 중요합니다. 각각 해결하는 문제가 다르고, 이 셋을 뒤섞는 것이 첫 시도가 일주일 만에 무너지는 가장 흔한 이유이기 때문입니다.',
        '그다음은 실전입니다. 5가지 핵심 전략에서는 블록 크기를 현실적으로 잡는 방법, 작은 일을 묶어 처리해야 하는 시점, 아침 첫 블록을 지키는 방법을 다룹니다. 초보자가 가장 많이 빠지는 실수 — 너무 짧은 블록, 여유 없는 일정, 모든 추정치를 약속처럼 여기는 태도 — 와 블록이 초과됐을 때의 복구 방법은 따로 정리했습니다. 마지막 두 편은 이 방법론의 배경입니다. 마감이 작업을 압축하는 이유를 설명하는 파킨슨의 법칙, 그리고 가장 어려운 일을 앞에 배치해야 하는 이유인 "개구리를 먼저 먹어라" 원칙입니다.',
        '이걸 시작하는 데 특별한 앱이 필요하지는 않습니다. 종이 노트와 타이머만 있어도 첫 타임박싱 하루를 돌려볼 수 있습니다. Chrobox는 2주째에 사람들이 포기하게 만드는 마찰을 없애기 위해 존재합니다. 소요 시간을 대신 추정하고, 블록을 현실적인 타임라인으로 배치하고, 각 블록이 돌아가는 동안 방해되는 앱을 차단합니다. 하지만 순서는 언제나 기법이 먼저이고, 그 출발점이 이 글들입니다.',
      ],
    },
    members: [
      'what-is-time-boxing',
      'time-boxing-vs-pomodoro',
      'time-blocking-vs-time-boxing',
      '5-time-boxing-strategies',
      'time-boxing-mistakes-to-avoid',
      'parkinsons-law-productivity',
      'eat-the-frog-time-boxing',
    ],
  },
  {
    id: 'scheduling-routines',
    slug: 'scheduling-routines',
    hubSlug: 'morning-routine-scheduling',
    name: {
      en: 'Scheduling & Routines',
      ko: '스케줄링과 루틴',
    },
    description: {
      en: 'Daily, weekly, and rhythmic scheduling patterns that build sustainable routines.',
      ko: '하루·일주일 단위의 스케줄링 패턴과 지속 가능한 루틴을 만드는 방법입니다.',
    },
    intro: {
      en: [
        'A single well-planned day is easy. Repeating it for three months is the hard part, and that is what scheduling and routines are for. A routine is a decision you only have to make once: the shape of your morning, the hour you review the week, the block you never book meetings into. Once those are fixed, your daily planning shrinks from "what should I do with twelve hours" to "what goes in the three open slots," which is a question you can answer in two minutes instead of twenty.',
        'The guides here work outward from the day. Morning routine scheduling covers the first ninety minutes — the block with the least interruption and the most cognitive capacity, and the one most people spend on email. Weekly planning zooms out to the horizon where real priorities live, so Monday does not start with a blank page. Deep work scheduling deals with the practical problem of protecting long uninterrupted stretches inside a calendar other people can write to. The daily review ritual closes the loop: five minutes at the end of the day comparing what you planned against what actually happened, which is the only reliable way to make your time estimates accurate.',
        'Three further guides address the constraints that break otherwise good schedules. Energy management explains why identical blocks produce very different output depending on where they sit in your day, and how to match task type to your own energy curve rather than to the clock. Digital minimalism scheduling looks at what to remove — notifications, standing meetings, apps that consume attention without returning anything. Work-life balance and remote work scheduling both tackle the boundary problem: when home and office are the same room, the boundary has to be a time, because it can no longer be a place.',
        'The common thread is sustainability over intensity. A routine you keep at seventy percent for a year beats a perfect system you abandon in February. Chrobox supports that with recurring blocks, routine streak tracking, and a weekly AI review that shows which parts of your schedule you actually kept — but the patterns in these guides work with any calendar.',
      ],
      ko: [
        '하루를 잘 계획하는 건 쉽습니다. 그걸 석 달 동안 반복하는 게 어렵고, 스케줄링과 루틴이 존재하는 이유가 바로 그것입니다. 루틴은 한 번만 결정하면 되는 선택입니다. 아침의 형태, 주간 회고를 하는 시간, 절대 회의를 넣지 않는 블록. 이것들이 고정되면 매일의 계획은 "12시간을 어떻게 쓸까"에서 "비어 있는 세 자리에 무엇을 넣을까"로 줄어듭니다. 20분이 아니라 2분이면 답할 수 있는 질문이 됩니다.',
        '이 카테고리의 글들은 하루에서 시작해 밖으로 확장됩니다. 아침 루틴 스케줄링은 방해가 가장 적고 인지 자원이 가장 풍부한, 그런데도 대부분이 이메일에 써버리는 첫 90분을 다룹니다. 주간 계획은 진짜 우선순위가 존재하는 한 주 단위로 시야를 넓혀, 월요일이 백지에서 시작하지 않게 합니다. 딥워크 스케줄링은 다른 사람이 쓸 수 있는 캘린더 안에서 길고 끊기지 않는 시간을 지켜내는 현실적인 문제를 다룹니다. 데일리 리뷰 리추얼은 그 고리를 닫습니다. 하루 끝의 5분 동안 계획과 실제를 비교하는 것이 시간 추정을 정확하게 만드는 유일하게 확실한 방법입니다.',
        '나머지 세 편은 괜찮은 일정도 무너뜨리는 제약을 다룹니다. 에너지 관리는 똑같은 블록이 하루 중 어디에 놓이는지에 따라 결과물이 크게 달라지는 이유, 그리고 작업 유형을 시계가 아니라 자신의 에너지 곡선에 맞추는 방법을 설명합니다. 디지털 미니멀리즘 스케줄링은 무엇을 덜어낼지 — 알림, 관성으로 남은 정기 회의, 돌려주는 것 없이 주의력만 먹는 앱 — 를 다룹니다. 워라밸과 원격근무 스케줄링은 같은 경계 문제를 다룹니다. 집과 사무실이 같은 방이라면 경계는 장소가 될 수 없으므로 시간이어야 합니다.',
        '공통된 흐름은 강도보다 지속성입니다. 1년간 70%로 유지한 루틴이 2월에 포기한 완벽한 시스템을 이깁니다. Chrobox는 반복 블록, 루틴 잔디, 그리고 일정 중 실제로 지킨 부분을 보여주는 주간 AI 분석으로 이를 뒷받침합니다. 물론 이 글들의 패턴 자체는 어떤 캘린더에서도 동작합니다.',
      ],
    },
    members: [
      'morning-routine-scheduling',
      'weekly-planning-guide',
      'deep-work-scheduling',
      'daily-review-ritual',
      'energy-management-scheduling',
      'digital-minimalism-scheduling',
      'work-life-balance-scheduling',
      'remote-work-scheduling',
    ],
  },
  {
    id: 'focus-productivity',
    slug: 'focus-productivity',
    hubSlug: 'focus-time-optimization',
    name: {
      en: 'Focus & Productivity',
      ko: '집중력과 생산성',
    },
    description: {
      en: 'Practical methods to improve focus, reduce friction, and ship more meaningful work.',
      ko: '집중력을 끌어올리고 마찰을 줄이며 의미 있는 결과를 만드는 실전 방법입니다.',
    },
    intro: {
      en: [
        'Most productivity problems are not time problems. The hours are there; what is missing is uninterrupted attention and a clear answer to the question "what am I doing right now." This category is about closing that gap — reducing the friction between sitting down and actually working, and protecting the stretches where your best work happens.',
        'Start with focus time optimization, which covers how long a genuine focus block can realistically last, how much recovery you need between blocks, and why the standard advice to "work in four-hour deep sessions" fails for most jobs. Beating procrastination with time-boxing addresses the psychology directly: procrastination is usually a response to an unclear or unbounded task, and putting a hard edge on the work removes most of what makes it feel unpleasant. Decision fatigue takes the next layer — every choice you make about what to do next spends the same resource you need for the work itself, which is why planning the day in advance outperforms deciding as you go.',
        'The remaining guides are tactical. Task batching shows how to group similar work so you pay the context-switching cost once instead of eleven times. Productivity for beginners is the entry point if you have never used any system at all, and deliberately starts smaller than most advice does — one block a day rather than a full schedule. The time audit guide is the diagnostic: before optimizing anything, spend a week recording where your hours actually go, because almost everyone is wrong about their own numbers by several hours a day. Meeting management applies time-boxing to the part of the calendar you control least, with concrete scripts for shortening, declining, or converting meetings.',
        'Read these alongside the app-blocking guides. Focus techniques and distraction removal solve two halves of the same problem: technique tells you what to do with the time, and blocking makes sure the time survives contact with your phone. Chrobox pairs the two in one app, so a focus session and the blocklist that protects it start and end together.',
      ],
      ko: [
        '생산성 문제는 대개 시간 문제가 아닙니다. 시간은 있습니다. 없는 것은 끊기지 않는 주의력과 "지금 내가 뭘 하고 있는가"에 대한 분명한 답입니다. 이 카테고리는 그 간극을 메우는 이야기입니다. 앉는 것과 실제로 일을 시작하는 것 사이의 마찰을 줄이고, 최고의 결과가 나오는 시간대를 지켜내는 방법입니다.',
        '집중 시간 최적화부터 시작하세요. 진짜 집중 블록이 현실적으로 얼마나 지속될 수 있는지, 블록 사이에 얼마의 회복이 필요한지, 그리고 "4시간 딥워크 세션"이라는 흔한 조언이 대부분의 직업에서 실패하는 이유를 다룹니다. 타임박싱으로 미루기를 이기는 글은 심리를 정면으로 다룹니다. 미루기는 보통 불분명하거나 끝이 없는 작업에 대한 반응이고, 일에 명확한 경계를 그으면 불쾌함의 대부분이 사라집니다. 결정 피로는 그다음 층입니다. 다음에 무엇을 할지 고민하는 모든 선택은 정작 그 일에 써야 할 자원을 소모합니다. 하루를 미리 계획하는 편이 그때그때 결정하는 것보다 나은 이유가 여기 있습니다.',
        '남은 글들은 전술적입니다. 작업 배칭은 비슷한 일을 묶어 컨텍스트 전환 비용을 열한 번이 아니라 한 번만 지불하는 방법을 보여줍니다. 초보자를 위한 생산성은 어떤 시스템도 써본 적 없는 사람을 위한 입구이고, 일부러 다른 조언들보다 작게 시작합니다. 전체 일정이 아니라 하루 한 블록부터입니다. 시간 감사(time audit) 가이드는 진단입니다. 무엇을 최적화하기 전에 일주일간 시간이 실제로 어디로 가는지 기록해 보세요. 거의 모든 사람이 자기 숫자를 하루 몇 시간씩 틀리게 알고 있습니다. 회의 관리는 캘린더에서 가장 통제하기 어려운 영역에 타임박싱을 적용하며, 회의를 줄이거나 거절하거나 다른 형태로 바꾸는 구체적인 표현까지 담았습니다.',
        '이 글들은 앱 차단 카테고리와 함께 읽으면 좋습니다. 집중 기법과 방해 요소 제거는 같은 문제의 양쪽 절반입니다. 기법은 그 시간에 무엇을 할지 알려주고, 차단은 그 시간이 휴대폰과 맞닥뜨려도 살아남게 합니다. Chrobox는 이 둘을 한 앱에 묶어, 집중 세션과 그것을 지키는 차단 목록이 함께 시작하고 함께 끝나게 합니다.',
      ],
    },
    members: [
      'focus-time-optimization',
      'beat-procrastination-time-boxing',
      'beat-decision-fatigue',
      'task-batching-productivity',
      'productivity-for-beginners',
      'time-audit-guide',
      'meeting-management-time-boxing',
    ],
  },
  {
    id: 'productivity-for-audiences',
    slug: 'productivity-for-audiences',
    hubSlug: 'time-boxing-for-teams',
    name: {
      en: 'Productivity for Every Role',
      ko: '역할별 생산성',
    },
    description: {
      en: 'Time-boxing playbooks tailored to specific roles, life stages, and constraints.',
      ko: '특정 역할·라이프스테이지·환경에 맞춘 타임박싱 플레이북입니다.',
    },
    intro: {
      en: [
        'Generic productivity advice assumes a generic day: eight predictable hours, one calendar, no one else\'s schedule attached to yours. Almost nobody has that. A developer protecting a four-hour build window, a nurse on rotating shifts, a student with lectures scattered across a week, and a parent whose day is defined by school pickup all need time-boxing — but they need different versions of it. This category holds the role-specific playbooks.',
        'Time-boxing for teams covers the shared-calendar problem: how to make focus blocks visible and respected by colleagues, which meetings deserve a fixed box, and how to run a standup that ends on time. The ADHD guide adjusts the method rather than demanding more discipline from it — shorter blocks, external timers, visible countdowns, and a plan for what to do when a box collapses, because a system that assumes perfect adherence is useless to the people who most need structure. For students, the constraints are fragmented days and deadlines measured in weeks, so the guide focuses on turning a syllabus into blocks and protecting study time around a class timetable.',
        'Creative professionals face a different problem: creative work resists estimation, and a hard stop can feel like the enemy of good work. That guide covers how to box exploratory work without killing it, using separate block types for divergent and convergent phases. The side-project playbook is built around scarcity — if you have five hours a week outside your job, those five hours need more protection than a full-time schedule does. And time-boxing for working parents starts from the honest premise that large parts of the day are not yours to schedule, which makes naming the two or three blocks that are yours even more important.',
        'Pick the guide closest to your situation and ignore the rest. The underlying method is identical across all of them; only the block sizes, the recovery rules, and the negotiation with other people change. If none fits exactly, the profession templates offer twenty concrete daily schedules you can copy and adjust.',
      ],
      ko: [
        '일반적인 생산성 조언은 일반적인 하루를 가정합니다. 예측 가능한 8시간, 하나의 캘린더, 남의 일정이 얽히지 않은 시간. 그런 하루를 가진 사람은 거의 없습니다. 4시간 빌드 창을 지켜야 하는 개발자, 교대 근무를 하는 간호사, 강의가 주 전체에 흩어진 학생, 하원 시간에 하루가 규정되는 부모 모두 타임박싱이 필요하지만 각기 다른 버전이 필요합니다. 이 카테고리는 그 역할별 플레이북을 담고 있습니다.',
        '팀을 위한 타임박싱은 공유 캘린더 문제를 다룹니다. 집중 블록을 동료에게 보이게 하고 존중받게 만드는 방법, 고정 박스가 필요한 회의의 종류, 정시에 끝나는 스탠드업 운영법입니다. ADHD 가이드는 더 강한 의지를 요구하는 대신 방법 자체를 조정합니다. 더 짧은 블록, 외부 타이머, 눈에 보이는 카운트다운, 그리고 블록이 무너졌을 때의 대응 계획까지. 완벽한 준수를 가정하는 시스템은 구조가 가장 필요한 사람에게 아무 쓸모가 없기 때문입니다. 학생의 제약은 조각난 하루와 주 단위로 재는 마감이므로, 강의 시간표 사이에 학습 시간을 지키고 실라버스를 블록으로 바꾸는 데 초점을 맞춥니다.',
        '창작 직군의 문제는 다릅니다. 창작 작업은 시간 추정을 거부하고, 강제 종료가 좋은 결과의 적처럼 느껴집니다. 해당 글은 탐색적 작업을 죽이지 않으면서 박스에 담는 방법을, 발산 단계와 수렴 단계에 서로 다른 블록 유형을 쓰는 방식으로 다룹니다. 사이드 프로젝트 플레이북은 희소성을 전제로 씌었습니다. 본업 외에 주 5시간이 있다면 그 5시간은 풀타임 일정보다 더 강한 보호가 필요합니다. 워킹 페어런트를 위한 타임박싱은 하루의 상당 부분이 내가 정할 수 없는 시간이라는 솔직한 전제에서 출발하며, 그래서 내 것인 두세 개의 블록에 이름을 붙이는 일이 더욱 중요해집니다.',
        '자신의 상황에 가장 가까운 글만 읽고 나머지는 건너뛰어도 됩니다. 밑바탕의 방법은 모두 같고, 블록 크기와 회복 규칙, 그리고 다른 사람과의 협상만 달라집니다. 딱 맞는 게 없다면 직업별 템플릿에서 그대로 복사해 조정할 수 있는 20개의 하루 일정을 확인해 보세요.',
      ],
    },
    members: [
      'time-boxing-for-teams',
      'time-boxing-for-adhd',
      'time-boxing-for-students',
      'time-boxing-for-creative-professionals',
      'time-boxing-for-side-projects',
      'time-boxing-for-working-parents',
    ],
  },
  {
    id: 'app-blocking-focus',
    slug: 'app-blocking-focus',
    hubSlug: 'how-to-block-distracting-apps',
    name: {
      en: 'App Blocking & Focus',
      ko: '앱 차단과 집중',
    },
    description: {
      en: 'Block distracting apps, run focus sessions, and build a digital detox routine you can actually keep.',
      ko: '방해되는 앱을 차단하고 집중 세션을 운영하며, 지킬 수 있는 디지털 디톡스 루틴을 만드는 방법을 다룹니다.',
    },
    intro: {
      en: [
        'A plan does not survive a phone. You can schedule a ninety-minute block perfectly and still lose forty minutes of it to a notification you did not choose to receive, because the decision to check happens faster than the decision not to. App blocking is the part of a focus system that does not rely on willpower: the app is simply unavailable while the block runs, so there is no decision to lose.',
        'The guides in this category cover how to do that without turning your phone into a brick. How to block distracting apps explains the mechanics on both platforms and where they differ — iOS uses Screen Time and the Family Controls framework, which lets an app shield other apps without seeing what you do in them, while Android uses an accessibility service that detects the app in the foreground. The practical consequences differ: iOS blocking is harder to bypass, Android blocking is more flexible about what counts as a block. Both are covered, along with the settings people usually get wrong on the first attempt.',
        'App blocker plus time-boxing is the core argument of this category and the reason Chrobox exists in the shape it does. Blocking alone tends to fail, because a blocked app leaves a gap and an unplanned gap gets filled by the next available distraction. Time-boxing alone tends to fail, because a plan with no enforcement loses to a notification. Pairing them means every block of focused work has both a defined task and a shielded environment, and the two start and stop together instead of being managed separately.',
        'The digital detox guide takes the longer view. Most detoxes fail because they are framed as abstinence — delete everything, go offline for a weekend, then reinstall on Monday. A routine that lasts looks different: specific apps blocked during specific hours, a phone-free first hour, one screen-free evening a week, and a weekly review that tells you whether any of it held. That last part matters most, because a detox you cannot measure is a detox you will quietly abandon.',
      ],
      ko: [
        '계획은 휴대폰을 이기지 못합니다. 90분 블록을 완벽하게 잡아놓고도, 받기로 선택하지도 않은 알림 하나에 40분을 잃을 수 있습니다. 확인하겠다는 결정이 확인하지 않겠다는 결정보다 빠르기 때문입니다. 앱 차단은 집중 시스템에서 의지력에 의존하지 않는 부분입니다. 블록이 돌아가는 동안 앱은 그냥 열리지 않으므로, 잃을 결정 자체가 없습니다.',
        '이 카테고리의 글들은 휴대폰을 벽돌로 만들지 않으면서 그걸 해내는 방법을 다룹니다. 방해되는 앱 차단하기는 두 플랫폼의 작동 방식과 차이를 설명합니다. iOS는 스크린타임과 Family Controls 프레임워크를 사용해, 앱이 다른 앱을 가리면서도 그 안에서 무엇을 하는지는 볼 수 없게 합니다. Android는 접근성 서비스로 화면 앞에 있는 앱을 감지합니다. 실제 결과도 다릅니다. iOS 차단은 우회하기 더 어렵고, Android 차단은 무엇을 차단으로 볼지에 대해 더 유연합니다. 두 방식과 함께, 처음 설정할 때 대부분이 틀리는 항목들도 정리했습니다.',
        '앱 차단 + 타임박싱은 이 카테고리의 핵심 주장이며, Chrobox가 지금의 형태인 이유입니다. 차단만으로는 실패하기 쉽습니다. 차단된 앱은 빈자리를 남기고, 계획되지 않은 빈자리는 다음 방해 요소로 채워집니다. 타임박싱만으로도 실패하기 쉽습니다. 강제력 없는 계획은 알림에 집니다. 둘을 묶으면 모든 집중 블록이 정해진 작업과 보호된 환경을 동시에 갖게 되고, 따로 관리되는 대신 함께 시작하고 함께 끝납니다.',
        '디지털 디톡스 글은 더 긴 시야를 다룹니다. 대부분의 디톡스가 실패하는 이유는 금욕으로 설계되기 때문입니다. 전부 삭제하고, 주말 동안 오프라인으로 지내고, 월요일에 다시 설치합니다. 오래 가는 루틴은 다르게 생겼습니다. 특정 시간대에 특정 앱만 차단하고, 하루의 첫 한 시간은 휴대폰 없이 보내고, 일주일에 한 번 화면 없는 저녁을 만들고, 그중 무엇이 지켜졌는지 주간 회고로 확인합니다. 마지막 항목이 가장 중요합니다. 측정할 수 없는 디톡스는 조용히 포기하게 되는 디톡스입니다.',
      ],
    },
    members: [
      'how-to-block-distracting-apps',
      'app-blocker-plus-timeboxing',
      'digital-detox-focus-routine',
    ],
  },
  {
    id: 'tools-comparisons',
    slug: 'tools-comparisons',
    hubSlug: 'best-time-boxing-apps',
    name: {
      en: 'Tools & Comparisons',
      ko: '도구와 비교',
    },
    description: {
      en: 'Reviews, comparisons, and integration guides for time-boxing tools and calendar apps.',
      ko: '타임박싱 도구와 캘린더 앱에 대한 리뷰·비교·연동 가이드입니다.',
    },
    intro: {
      en: [
        'The tool matters less than the habit, but the wrong tool makes the habit harder to keep. Most apps marketed for time-boxing are really task managers with a calendar view attached: they are excellent at collecting work and poor at forcing you to decide how long it will take. That distinction is what this category is about — which apps actually implement time-boxing, and which just display your tasks next to a clock.',
        'The best time-boxing apps guide compares the main options on the criteria that matter in daily use: whether duration is required or optional, whether the day view shows a real timeline or a list, whether a focus timer is attached to each block, how recurring blocks work, and what happens when a block overruns. It covers free tiers honestly, including where free plans stop being usable, and notes which apps are single-platform — a real constraint if you plan on your laptop and execute on your phone.',
        'The calendar integration guide handles the situation most people are actually in: you already live in Google Calendar or Outlook, other people book time in it, and any time-boxing system has to coexist with that rather than replace it. It covers two-way sync pitfalls, how to keep focus blocks from being treated as free time by colleagues, and when a separate app is better than another calendar layer.',
        'For head-to-head comparisons against specific products — Todoist, Notion, TickTick, Google Calendar, Sunsama, and others — see the comparison pages, which lay out features side by side and state plainly which tool wins for which use case. We build Chrobox, so treat our conclusions accordingly: the comparisons are written to be accurate about what competitors do better, because a recommendation that oversells is worth nothing to a reader deciding what to install tonight.',
      ],
      ko: [
        '도구는 습관보다 덜 중요하지만, 잘못된 도구는 습관을 유지하기 더 어렵게 만듭니다. 타임박싱용으로 홍보되는 대부분의 앱은 사실 캘린더 뷰가 붙은 할 일 관리 앱입니다. 할 일을 모으는 데는 훌륭하지만, 얼마나 걸릴지 결정하도록 강제하는 데는 약합니다. 이 카테고리는 그 구분에 관한 것입니다. 어떤 앱이 실제로 타임박싱을 구현하고 있고, 어떤 앱이 그냥 시계 옆에 할 일을 보여주고 있는지입니다.',
        '최고의 타임박싱 앱 가이드는 실제 사용에서 중요한 기준으로 주요 선택지를 비교합니다. 소요 시간 입력이 필수인지 선택인지, 하루 뷰가 진짜 타임라인인지 목록인지, 각 블록에 집중 타이머가 붙는지, 반복 블록이 어떻게 동작하는지, 블록이 초과됐을 때 무슨 일이 일어나는지입니다. 무료 플랜도 솔직하게 다뤘고, 무료로 쓸 만한 선이 어디서 끝나는지, 어떤 앱이 한 플랫폼 전용인지도 표시했습니다. 노트북에서 계획하고 휴대폰에서 실행한다면 이건 실질적인 제약입니다.',
        '캘린더 연동 가이드는 대부분의 사람이 실제로 놓인 상황을 다룹니다. 이미 Google 캘린더나 Outlook에서 살고 있고, 다른 사람이 거기에 일정을 넣으며, 어떤 타임박싱 시스템이든 그것을 대체하는 대신 공존해야 하는 상황입니다. 양방향 동기화의 함정, 동료가 집중 블록을 빈 시간으로 취급하지 않게 만드는 방법, 그리고 캘린더 레이어를 하나 더 얹는 것보다 별도 앱이 나은 시점을 다룹니다.',
        'Todoist, Notion, TickTick, Google 캘린더, Sunsama 등 특정 제품과의 1대1 비교는 비교 페이지에서 볼 수 있습니다. 기능을 나란히 놓고, 어떤 용도에서 어떤 도구가 이기는지 분명히 밝혀두었습니다. 저희는 Chrobox를 만드는 쪽이니 그 점을 감안해서 읽어 주세요. 비교 글은 경쟁 제품이 더 잘하는 부분에 대해 정확하게 쓰려고 노력했습니다. 오늘 밤 무엇을 설치할지 고민하는 독자에게, 과대 포장된 추천은 아무 가치가 없기 때문입니다.',
      ],
    },
    members: [
      'best-time-boxing-apps',
      'time-boxing-with-calendar-apps',
    ],
  },
];

const slugToCluster: Map<string, BlogClusterDefinition> = new Map();
for (const cluster of BLOG_CLUSTERS) {
  for (const slug of cluster.members) {
    slugToCluster.set(slug, cluster);
  }
}

export function getClusterBySlug(slug: string): BlogClusterDefinition | undefined {
  return slugToCluster.get(slug);
}

export function getClusterById(id: BlogClusterId): BlogClusterDefinition | undefined {
  return BLOG_CLUSTERS.find((cluster) => cluster.id === id);
}

export function getClusterByCategorySlug(categorySlug: string): BlogClusterDefinition | undefined {
  return BLOG_CLUSTERS.find((cluster) => cluster.slug === categorySlug);
}

export interface ClusterCopy {
  name: string;
  description: string;
  intro: string[];
}

/**
 * Resolves a cluster's display copy for a locale: English and Korean are
 * authored inline, every other locale comes from its localized content pack
 * and falls back to English when a key is missing.
 */
export function clusterCopy(cluster: BlogClusterDefinition, lang: ContentLanguage): ClusterCopy {
  if (lang === 'ko') {
    return { name: cluster.name.ko, description: cluster.description.ko, intro: cluster.intro.ko };
  }

  const fallback: ClusterCopy = {
    name: cluster.name.en,
    description: cluster.description.en,
    intro: cluster.intro.en,
  };

  if (lang === 'en') {
    return fallback;
  }

  const copy = LOCALIZED_CONTENT[lang]?.clusters?.[cluster.slug];

  if (!copy) {
    return fallback;
  }

  return {
    name: copy.name || fallback.name,
    description: copy.description || fallback.description,
    intro: copy.intro?.length ? copy.intro : fallback.intro,
  };
}

export function clusterCategoryName(slug: string, lang: ContentLanguage): string {
  const cluster = getClusterBySlug(slug);

  if (!cluster) {
    return lang === 'ko' ? '생산성' : 'Productivity';
  }

  return clusterCopy(cluster, lang).name;
}

export function clusterHubSlug(slug: string): string | undefined {
  return getClusterBySlug(slug)?.hubSlug;
}

export function isHub(slug: string): boolean {
  const cluster = getClusterBySlug(slug);
  return Boolean(cluster && cluster.hubSlug === slug);
}

export function clusterMembers(clusterId: BlogClusterId): string[] {
  return getClusterById(clusterId)?.members ?? [];
}

export function siblingSlugs(slug: string, limit = 4): string[] {
  const cluster = getClusterBySlug(slug);
  if (!cluster) return [];
  return cluster.members.filter((member) => member !== slug).slice(0, limit);
}
