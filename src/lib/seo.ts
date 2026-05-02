export const SITE_URL = 'https://chrobox.net';

export const SEO_LOCALES = [
  { code: 'en', pathPrefix: '', htmlLang: 'en', ogLocale: 'en_US', nativeLabel: 'English' },
  { code: 'ko', pathPrefix: '/ko', htmlLang: 'ko', ogLocale: 'ko_KR', nativeLabel: '한국어' },
  { code: 'ja', pathPrefix: '/ja', htmlLang: 'ja', ogLocale: 'ja_JP', nativeLabel: '日本語' },
  { code: 'zh-CN', pathPrefix: '/zh-cn', htmlLang: 'zh-CN', ogLocale: 'zh_CN', nativeLabel: '简体中文' },
  { code: 'zh-TW', pathPrefix: '/zh-tw', htmlLang: 'zh-TW', ogLocale: 'zh_TW', nativeLabel: '繁體中文' },
  { code: 'es', pathPrefix: '/es', htmlLang: 'es', ogLocale: 'es_ES', nativeLabel: 'Español' },
  { code: 'fr', pathPrefix: '/fr', htmlLang: 'fr', ogLocale: 'fr_FR', nativeLabel: 'Français' },
  { code: 'de', pathPrefix: '/de', htmlLang: 'de', ogLocale: 'de_DE', nativeLabel: 'Deutsch' },
  { code: 'pt-BR', pathPrefix: '/pt-br', htmlLang: 'pt-BR', ogLocale: 'pt_BR', nativeLabel: 'Português' },
  { code: 'it', pathPrefix: '/it', htmlLang: 'it', ogLocale: 'it_IT', nativeLabel: 'Italiano' },
  { code: 'nl', pathPrefix: '/nl', htmlLang: 'nl', ogLocale: 'nl_NL', nativeLabel: 'Nederlands' },
  { code: 'pl', pathPrefix: '/pl', htmlLang: 'pl', ogLocale: 'pl_PL', nativeLabel: 'Polski' },
  { code: 'tr', pathPrefix: '/tr', htmlLang: 'tr', ogLocale: 'tr_TR', nativeLabel: 'Türkçe' },
  { code: 'id', pathPrefix: '/id', htmlLang: 'id', ogLocale: 'id_ID', nativeLabel: 'Bahasa Indonesia' },
  { code: 'vi', pathPrefix: '/vi', htmlLang: 'vi', ogLocale: 'vi_VN', nativeLabel: 'Tiếng Việt' },
  { code: 'th', pathPrefix: '/th', htmlLang: 'th', ogLocale: 'th_TH', nativeLabel: 'ไทย' },
  { code: 'hi', pathPrefix: '/hi', htmlLang: 'hi', ogLocale: 'hi_IN', nativeLabel: 'हिन्दी' },
  { code: 'ar', pathPrefix: '/ar', htmlLang: 'ar', ogLocale: 'ar_AR', nativeLabel: 'العربية' },
  { code: 'ru', pathPrefix: '/ru', htmlLang: 'ru', ogLocale: 'ru_RU', nativeLabel: 'Русский' },
  { code: 'ms', pathPrefix: '/ms', htmlLang: 'ms', ogLocale: 'ms_MY', nativeLabel: 'Bahasa Melayu' },
] as const;

export type SiteLocale = typeof SEO_LOCALES[number]['code'];
export type ContentLanguage = 'en' | 'ko';

type LocaleConfig = typeof SEO_LOCALES[number];
type SeoCopy = {
  homeTitle: string;
  homeDescription: string;
  blogTitle: string;
  blogDescription: string;
  templatesTitle: string;
  templatesDescription: string;
  compareTitle: string;
  compareDescription: string;
  homeLabel: string;
  blogLabel: string;
  templatesLabel: string;
  compareLabel: string;
  blogArticleTitle: string;
  blogArticleDescription: string;
  templateArticleTitle: string;
  templateArticleDescription: string;
  comparisonArticleTitle: string;
  comparisonArticleDescription: string;
};

export const DEFAULT_LOCALE: SiteLocale = 'en';
const INDEXABLE_LOCALES = new Set<SiteLocale>(['en', 'ko']);

const SEO_COPY: Record<SiteLocale, SeoCopy> = {
  en: {
    homeTitle: 'Chrobox - Master Your Time with Intelligent Time-Boxing | Productivity App',
    homeDescription: 'Chrobox helps you master your time with intelligent time-boxing methodology. Plan, prioritize, and track your daily tasks with AI-powered insights. Available for iOS and Android.',
    blogTitle: 'Blog - Time-Boxing & Productivity Tips | Chrobox',
    blogDescription: 'Insights, tips, and strategies on time-boxing and productivity. Master your day with Chrobox.',
    templatesTitle: 'Daily Schedule Templates for Every Profession | Chrobox',
    templatesDescription: 'Free daily schedule templates for 20+ professions. Proven time-boxing plans for developers, nurses, teachers, and more.',
    compareTitle: 'Chrobox Alternatives & Comparisons | Time-Boxing App',
    compareDescription: 'Compare Chrobox to Todoist, Notion, TickTick, Google Calendar, and more. Find the best productivity app for your workflow.',
    homeLabel: 'Home',
    blogLabel: 'Blog',
    templatesLabel: 'Templates',
    compareLabel: 'Compare',
    blogArticleTitle: '{title} | Chrobox Blog',
    blogArticleDescription: 'Read this Chrobox guide to time-boxing, productivity, focus planning, and building a calmer daily schedule.',
    templateArticleTitle: '{profession} Daily Schedule Template | Free Time-Boxing Plan | Chrobox',
    templateArticleDescription: 'A free time-boxed daily schedule for {profession}. Plan focused work, breaks, admin tasks, and realistic routines with Chrobox.',
    comparisonArticleTitle: 'Chrobox vs {competitor}: Which is Better? [2025 Comparison]',
    comparisonArticleDescription: 'Compare Chrobox with {competitor} and see which productivity app fits your time-boxing, planning, and focus workflow.',
  },
  ko: {
    homeTitle: 'Chrobox - 지능형 타임박싱으로 시간을 마스터하세요 | 생산성 앱',
    homeDescription: 'Chrobox는 지능형 타임박싱 방법론으로 시간을 마스터하도록 도와줍니다. AI 기반 인사이트로 일일 작업을 계획, 우선순위 설정, 추적하세요. iOS, Android에서 사용 가능.',
    blogTitle: '블로그 - 타임박싱과 생산성 팁 | Chrobox',
    blogDescription: '타임박싱과 생산성에 대한 인사이트, 팁, 전략을 공유합니다. Chrobox로 더 효율적인 하루를 만드세요.',
    templatesTitle: '직업별 하루 일정 템플릿 | Chrobox',
    templatesDescription: '20가지 직업별 맞춤 하루 일정 템플릿. 소프트웨어 개발자, 간호사, 교사 등을 위한 무료 타임박싱 플랜.',
    compareTitle: 'Chrobox 대안 & 비교 | 타임박싱 앱',
    compareDescription: 'Chrobox를 Todoist, Notion, TickTick, Google 캘린더 등 인기 앱과 비교해보세요. 당신에게 맞는 생산성 앱을 찾아보세요.',
    homeLabel: '홈',
    blogLabel: '블로그',
    templatesLabel: '템플릿',
    compareLabel: '비교',
    blogArticleTitle: '{title} | Chrobox 블로그',
    blogArticleDescription: '타임박싱, 생산성, 집중 계획, 더 차분한 하루 일정을 만드는 방법을 Chrobox 가이드에서 확인하세요.',
    templateArticleTitle: '{profession} 하루 일정 템플릿 | 무료 타임박싱 플랜 | Chrobox',
    templateArticleDescription: '{profession}를 위한 무료 타임박싱 하루 일정입니다. Chrobox로 집중 업무, 휴식, 관리 업무, 현실적인 루틴을 계획하세요.',
    comparisonArticleTitle: 'Chrobox vs {competitor}: 어떤 앱이 더 좋을까요? [2025 비교]',
    comparisonArticleDescription: 'Chrobox와 {competitor}를 비교하고 타임박싱, 계획, 집중 워크플로우에 맞는 생산성 앱을 찾아보세요.',
  },
  ja: {
    homeTitle: 'Chrobox - インテリジェントなタイムボクシングで時間を管理 | 生産性アプリ',
    homeDescription: 'Chroboxはインテリジェントなタイムボクシングで毎日のタスクを計画、優先順位付け、追跡できる生産性アプリです。iOSとAndroidで利用できます。',
    blogTitle: 'ブログ - タイムボクシングと生産性のヒント | Chrobox',
    blogDescription: 'タイムボクシング、集中、時間管理の実践的なヒントをChroboxブログで紹介します。',
    templatesTitle: '職種別の1日スケジュールテンプレート | Chrobox',
    templatesDescription: '開発者、看護師、教師など20以上の職種向け無料タイムボクシングテンプレート。',
    compareTitle: 'Chroboxの代替アプリと比較 | タイムボクシングアプリ',
    compareDescription: 'Todoist、Notion、TickTick、GoogleカレンダーなどとChroboxを比較し、自分に合う生産性アプリを見つけましょう。',
    homeLabel: 'ホーム',
    blogLabel: 'ブログ',
    templatesLabel: 'テンプレート',
    compareLabel: '比較',
    blogArticleTitle: 'タイムボクシングガイド: {title} | Chrobox Blog',
    blogArticleDescription: 'タイムボクシング、生産性、集中計画、落ち着いた1日の作り方をChroboxガイドで学びましょう。',
    templateArticleTitle: '{profession}向け1日スケジュールテンプレート | 無料タイムボクシングプラン | Chrobox',
    templateArticleDescription: '{profession}向けの無料タイムボクシングスケジュールです。集中作業、休憩、管理タスク、現実的なルーティンをChroboxで計画できます。',
    comparisonArticleTitle: 'Chrobox vs {competitor}: どちらが最適？ [2025年比較]',
    comparisonArticleDescription: 'Chroboxと{competitor}を比較し、タイムボクシング、計画、集中ワークフローに合うアプリを確認しましょう。',
  },
  'zh-CN': {
    homeTitle: 'Chrobox - 用智能时间盒掌控时间 | 效率应用',
    homeDescription: 'Chrobox通过智能时间盒方法帮助你计划、排序并追踪每日任务，配合AI洞察提升专注与效率。支持iOS和Android。',
    blogTitle: '博客 - 时间盒与效率技巧 | Chrobox',
    blogDescription: '获取关于时间盒、专注规划和高效时间管理的实用策略，使用Chrobox掌控每一天。',
    templatesTitle: '各职业每日计划模板 | Chrobox',
    templatesDescription: '为开发者、护士、教师等20多个职业提供免费的每日时间盒计划模板。',
    compareTitle: 'Chrobox替代方案与应用比较 | 时间盒应用',
    compareDescription: '将Chrobox与Todoist、Notion、TickTick、Google日历等应用比较，找到适合你的效率工具。',
    homeLabel: '首页',
    blogLabel: '博客',
    templatesLabel: '模板',
    compareLabel: '比较',
    blogArticleTitle: '时间盒指南: {title} | Chrobox博客',
    blogArticleDescription: '阅读Chrobox指南，学习时间盒、效率提升、专注计划以及更从容的每日安排。',
    templateArticleTitle: '{profession}每日计划模板 | 免费时间盒计划 | Chrobox',
    templateArticleDescription: '面向{profession}的免费时间盒每日计划。用Chrobox安排专注工作、休息、行政任务和现实可行的日常节奏。',
    comparisonArticleTitle: 'Chrobox vs {competitor}: 哪个更好？[2025比较]',
    comparisonArticleDescription: '比较Chrobox和{competitor}，了解哪款效率应用更适合你的时间盒、计划和专注流程。',
  },
  'zh-TW': {
    homeTitle: 'Chrobox - 用智慧時間盒掌控時間 | 生產力 App',
    homeDescription: 'Chrobox以智慧時間盒方法協助你規劃、排序並追蹤每日任務，透過AI洞察提升專注與效率。支援iOS與Android。',
    blogTitle: '部落格 - 時間盒與生產力技巧 | Chrobox',
    blogDescription: '在Chrobox部落格閱讀時間盒、專注規劃與高效時間管理的實用策略。',
    templatesTitle: '各職業每日行程範本 | Chrobox',
    templatesDescription: '為開發者、護理師、教師等20多種職業提供免費每日時間盒計畫範本。',
    compareTitle: 'Chrobox替代方案與比較 | 時間盒 App',
    compareDescription: '比較Chrobox與Todoist、Notion、TickTick、Google日曆等工具，找到適合你的生產力App。',
    homeLabel: '首頁',
    blogLabel: '部落格',
    templatesLabel: '範本',
    compareLabel: '比較',
    blogArticleTitle: '時間盒指南: {title} | Chrobox部落格',
    blogArticleDescription: '閱讀Chrobox指南，學習時間盒、生產力、專注規劃，以及打造更從容每日行程的方法。',
    templateArticleTitle: '{profession}每日行程範本 | 免費時間盒計畫 | Chrobox',
    templateArticleDescription: '為{profession}設計的免費時間盒每日行程。用Chrobox規劃專注工作、休息、行政任務與可持續的日常節奏。',
    comparisonArticleTitle: 'Chrobox vs {competitor}: 哪個更適合？[2025比較]',
    comparisonArticleDescription: '比較Chrobox與{competitor}，了解哪款生產力App更符合你的時間盒、規劃與專注工作流程。',
  },
  es: {
    homeTitle: 'Chrobox - Domina tu tiempo con time-boxing inteligente | App de productividad',
    homeDescription: 'Chrobox te ayuda a planificar, priorizar y seguir tus tareas diarias con time-boxing inteligente e insights de IA. Disponible para iOS y Android.',
    blogTitle: 'Blog - Consejos de time-boxing y productividad | Chrobox',
    blogDescription: 'Estrategias prácticas sobre time-boxing, enfoque y gestión del tiempo para dominar tu día con Chrobox.',
    templatesTitle: 'Plantillas de horario diario para cada profesión | Chrobox',
    templatesDescription: 'Plantillas gratuitas de time-boxing para más de 20 profesiones, incluidos desarrolladores, enfermeros, docentes y más.',
    compareTitle: 'Alternativas y comparativas de Chrobox | App de time-boxing',
    compareDescription: 'Compara Chrobox con Todoist, Notion, TickTick, Google Calendar y más para encontrar la app de productividad adecuada.',
    homeLabel: 'Inicio',
    blogLabel: 'Blog',
    templatesLabel: 'Plantillas',
    compareLabel: 'Comparar',
    blogArticleTitle: 'Guía de time-boxing: {title} | Blog de Chrobox',
    blogArticleDescription: 'Lee esta guía de Chrobox sobre time-boxing, productividad, planificación enfocada y cómo construir una agenda diaria más tranquila.',
    templateArticleTitle: 'Plantilla de horario diario para {profession} | Plan gratuito de time-boxing | Chrobox',
    templateArticleDescription: 'Un horario diario gratuito con time-boxing para {profession}. Planifica trabajo profundo, descansos, tareas administrativas y rutinas realistas con Chrobox.',
    comparisonArticleTitle: 'Chrobox vs {competitor}: ¿cuál es mejor? [Comparativa 2025]',
    comparisonArticleDescription: 'Compara Chrobox con {competitor} y descubre qué app se adapta mejor a tu flujo de time-boxing, planificación y enfoque.',
  },
  fr: {
    homeTitle: 'Chrobox - Maîtrisez votre temps avec le time-boxing intelligent | Application de productivité',
    homeDescription: 'Chrobox vous aide à planifier, prioriser et suivre vos tâches quotidiennes grâce au time-boxing intelligent et aux insights IA. Disponible sur iOS et Android.',
    blogTitle: 'Blog - Conseils de time-boxing et productivité | Chrobox',
    blogDescription: 'Des stratégies concrètes sur le time-boxing, la concentration et la gestion du temps pour mieux organiser vos journées avec Chrobox.',
    templatesTitle: 'Modèles de planning quotidien pour chaque métier | Chrobox',
    templatesDescription: 'Modèles gratuits de time-boxing pour plus de 20 métiers, dont développeurs, infirmiers, enseignants et plus encore.',
    compareTitle: 'Alternatives et comparatifs Chrobox | Application de time-boxing',
    compareDescription: 'Comparez Chrobox à Todoist, Notion, TickTick, Google Agenda et plus pour trouver l’application de productivité adaptée.',
    homeLabel: 'Accueil',
    blogLabel: 'Blog',
    templatesLabel: 'Modèles',
    compareLabel: 'Comparer',
    blogArticleTitle: 'Guide de time-boxing: {title} | Blog Chrobox',
    blogArticleDescription: 'Lisez ce guide Chrobox sur le time-boxing, la productivité, la planification concentrée et la création d’un planning quotidien plus serein.',
    templateArticleTitle: 'Modèle de planning quotidien pour {profession} | Plan de time-boxing gratuit | Chrobox',
    templateArticleDescription: 'Un planning quotidien gratuit en time-boxing pour {profession}. Planifiez travail concentré, pauses, tâches administratives et routines réalistes avec Chrobox.',
    comparisonArticleTitle: 'Chrobox vs {competitor}: lequel est le meilleur ? [Comparatif 2025]',
    comparisonArticleDescription: 'Comparez Chrobox avec {competitor} et voyez quelle application convient le mieux à votre time-boxing, votre planification et votre concentration.',
  },
  de: {
    homeTitle: 'Chrobox - Beherrsche deine Zeit mit intelligentem Time-Boxing | Produktivitäts-App',
    homeDescription: 'Chrobox hilft dir, tägliche Aufgaben mit intelligentem Time-Boxing, Priorisierung und KI-Insights zu planen und zu verfolgen. Verfügbar für iOS und Android.',
    blogTitle: 'Blog - Time-Boxing und Produktivitätstipps | Chrobox',
    blogDescription: 'Praktische Strategien zu Time-Boxing, Fokus und Zeitmanagement, damit du deinen Tag mit Chrobox besser steuerst.',
    templatesTitle: 'Tägliche Zeitplan-Vorlagen für jeden Beruf | Chrobox',
    templatesDescription: 'Kostenlose Time-Boxing-Vorlagen für mehr als 20 Berufe, darunter Entwickler, Pflegekräfte, Lehrkräfte und mehr.',
    compareTitle: 'Chrobox Alternativen und Vergleiche | Time-Boxing-App',
    compareDescription: 'Vergleiche Chrobox mit Todoist, Notion, TickTick, Google Kalender und weiteren Tools, um die passende Produktivitäts-App zu finden.',
    homeLabel: 'Startseite',
    blogLabel: 'Blog',
    templatesLabel: 'Vorlagen',
    compareLabel: 'Vergleichen',
    blogArticleTitle: 'Time-Boxing-Leitfaden: {title} | Chrobox Blog',
    blogArticleDescription: 'Lies diesen Chrobox-Leitfaden zu Time-Boxing, Produktivität, fokussierter Planung und einem ruhigeren Tagesablauf.',
    templateArticleTitle: 'Tägliche Zeitplan-Vorlage für {profession} | Kostenloser Time-Boxing-Plan | Chrobox',
    templateArticleDescription: 'Ein kostenloser Time-Boxing-Tagesplan für {profession}. Plane Fokusarbeit, Pausen, Admin-Aufgaben und realistische Routinen mit Chrobox.',
    comparisonArticleTitle: 'Chrobox vs {competitor}: Was ist besser? [Vergleich 2025]',
    comparisonArticleDescription: 'Vergleiche Chrobox mit {competitor} und finde heraus, welche App zu deinem Time-Boxing-, Planungs- und Fokus-Workflow passt.',
  },
  'pt-BR': {
    homeTitle: 'Chrobox - Domine seu tempo com time-boxing inteligente | App de produtividade',
    homeDescription: 'Chrobox ajuda você a planejar, priorizar e acompanhar tarefas diárias com time-boxing inteligente e insights de IA. Disponível para iOS e Android.',
    blogTitle: 'Blog - Dicas de time-boxing e produtividade | Chrobox',
    blogDescription: 'Estratégias práticas de time-boxing, foco e gestão do tempo para dominar seu dia com Chrobox.',
    templatesTitle: 'Modelos de agenda diária para cada profissão | Chrobox',
    templatesDescription: 'Modelos gratuitos de time-boxing para mais de 20 profissões, incluindo desenvolvedores, enfermeiros, professores e muito mais.',
    compareTitle: 'Alternativas e comparações do Chrobox | App de time-boxing',
    compareDescription: 'Compare Chrobox com Todoist, Notion, TickTick, Google Calendar e outros para encontrar o app de produtividade ideal.',
    homeLabel: 'Início',
    blogLabel: 'Blog',
    templatesLabel: 'Modelos',
    compareLabel: 'Comparar',
    blogArticleTitle: 'Guia de time-boxing: {title} | Blog Chrobox',
    blogArticleDescription: 'Leia este guia da Chrobox sobre time-boxing, produtividade, planejamento focado e como criar uma rotina diária mais tranquila.',
    templateArticleTitle: 'Modelo de agenda diária para {profession} | Plano gratuito de time-boxing | Chrobox',
    templateArticleDescription: 'Uma agenda diária gratuita com time-boxing para {profession}. Planeje trabalho focado, pausas, tarefas administrativas e rotinas realistas com Chrobox.',
    comparisonArticleTitle: 'Chrobox vs {competitor}: qual é melhor? [Comparativo 2025]',
    comparisonArticleDescription: 'Compare Chrobox com {competitor} e veja qual app se adapta melhor ao seu fluxo de time-boxing, planejamento e foco.',
  },
  it: {
    homeTitle: 'Chrobox - Domina il tuo tempo con il time-boxing intelligente | App di produttività',
    homeDescription: 'Chrobox ti aiuta a pianificare, dare priorità e monitorare le attività quotidiane con time-boxing intelligente e insight IA. Disponibile per iOS e Android.',
    blogTitle: 'Blog - Consigli su time-boxing e produttività | Chrobox',
    blogDescription: 'Strategie pratiche su time-boxing, concentrazione e gestione del tempo per organizzare meglio la giornata con Chrobox.',
    templatesTitle: 'Modelli di programma giornaliero per ogni professione | Chrobox',
    templatesDescription: 'Modelli gratuiti di time-boxing per oltre 20 professioni, inclusi sviluppatori, infermieri, insegnanti e altro.',
    compareTitle: 'Alternative e confronti Chrobox | App di time-boxing',
    compareDescription: 'Confronta Chrobox con Todoist, Notion, TickTick, Google Calendar e altri strumenti per trovare l’app di produttività giusta.',
    homeLabel: 'Home',
    blogLabel: 'Blog',
    templatesLabel: 'Modelli',
    compareLabel: 'Confronta',
    blogArticleTitle: 'Guida al time-boxing: {title} | Blog Chrobox',
    blogArticleDescription: 'Leggi questa guida Chrobox su time-boxing, produttività, pianificazione focalizzata e creazione di una giornata più ordinata.',
    templateArticleTitle: 'Modello di programma giornaliero per {profession} | Piano gratuito di time-boxing | Chrobox',
    templateArticleDescription: 'Un programma giornaliero gratuito con time-boxing per {profession}. Pianifica lavoro profondo, pause, attività amministrative e routine realistiche con Chrobox.',
    comparisonArticleTitle: 'Chrobox vs {competitor}: quale è migliore? [Confronto 2025]',
    comparisonArticleDescription: 'Confronta Chrobox con {competitor} e scopri quale app si adatta meglio al tuo flusso di time-boxing, pianificazione e concentrazione.',
  },
  nl: {
    homeTitle: 'Chrobox - Beheers je tijd met intelligent time-boxing | Productiviteitsapp',
    homeDescription: 'Chrobox helpt je dagelijkse taken plannen, prioriteren en volgen met intelligent time-boxing en AI-inzichten. Beschikbaar voor iOS en Android.',
    blogTitle: 'Blog - Time-boxing en productiviteitstips | Chrobox',
    blogDescription: 'Praktische strategieën voor time-boxing, focus en tijdmanagement om je dag beter te sturen met Chrobox.',
    templatesTitle: 'Dagelijkse planningssjablonen voor elk beroep | Chrobox',
    templatesDescription: 'Gratis time-boxing-sjablonen voor meer dan 20 beroepen, waaronder ontwikkelaars, verpleegkundigen, docenten en meer.',
    compareTitle: 'Chrobox alternatieven en vergelijkingen | Time-boxing-app',
    compareDescription: 'Vergelijk Chrobox met Todoist, Notion, TickTick, Google Agenda en meer om de juiste productiviteitsapp te vinden.',
    homeLabel: 'Home',
    blogLabel: 'Blog',
    templatesLabel: 'Sjablonen',
    compareLabel: 'Vergelijken',
    blogArticleTitle: 'Time-boxinggids: {title} | Chrobox Blog',
    blogArticleDescription: 'Lees deze Chrobox-gids over time-boxing, productiviteit, focusplanning en het bouwen van een rustigere dagindeling.',
    templateArticleTitle: 'Dagelijkse planningssjabloon voor {profession} | Gratis time-boxing-plan | Chrobox',
    templateArticleDescription: 'Een gratis dagelijkse time-boxing-planning voor {profession}. Plan focuswerk, pauzes, administratieve taken en realistische routines met Chrobox.',
    comparisonArticleTitle: 'Chrobox vs {competitor}: welke is beter? [Vergelijking 2025]',
    comparisonArticleDescription: 'Vergelijk Chrobox met {competitor} en ontdek welke app past bij je time-boxing-, plannings- en focusworkflow.',
  },
  pl: {
    homeTitle: 'Chrobox - Opanuj swój czas dzięki inteligentnemu time-boxingowi | Aplikacja produktywności',
    homeDescription: 'Chrobox pomaga planować, priorytetyzować i śledzić codzienne zadania dzięki inteligentnemu time-boxingowi oraz wnioskom AI. Dostępne na iOS i Android.',
    blogTitle: 'Blog - Time-boxing i wskazówki produktywności | Chrobox',
    blogDescription: 'Praktyczne strategie time-boxingu, skupienia i zarządzania czasem, aby lepiej prowadzić dzień z Chrobox.',
    templatesTitle: 'Szablony dziennego harmonogramu dla każdego zawodu | Chrobox',
    templatesDescription: 'Darmowe szablony time-boxingu dla ponad 20 zawodów, w tym programistów, pielęgniarek, nauczycieli i nie tylko.',
    compareTitle: 'Alternatywy i porównania Chrobox | Aplikacja time-boxingowa',
    compareDescription: 'Porównaj Chrobox z Todoist, Notion, TickTick, Google Calendar i innymi narzędziami, aby znaleźć najlepszą aplikację produktywności.',
    homeLabel: 'Strona główna',
    blogLabel: 'Blog',
    templatesLabel: 'Szablony',
    compareLabel: 'Porównaj',
    blogArticleTitle: 'Przewodnik time-boxingu: {title} | Blog Chrobox',
    blogArticleDescription: 'Przeczytaj przewodnik Chrobox o time-boxingu, produktywności, planowaniu skupienia i spokojniejszym harmonogramie dnia.',
    templateArticleTitle: 'Szablon dziennego harmonogramu dla {profession} | Darmowy plan time-boxingu | Chrobox',
    templateArticleDescription: 'Darmowy dzienny harmonogram time-boxingowy dla {profession}. Planuj pracę w skupieniu, przerwy, administrację i realistyczne rutyny z Chrobox.',
    comparisonArticleTitle: 'Chrobox vs {competitor}: co jest lepsze? [Porównanie 2025]',
    comparisonArticleDescription: 'Porównaj Chrobox z {competitor} i sprawdź, która aplikacja pasuje do Twojego time-boxingu, planowania i pracy w skupieniu.',
  },
  tr: {
    homeTitle: 'Chrobox - Akıllı time-boxing ile zamanını yönet | Verimlilik uygulaması',
    homeDescription: 'Chrobox, akıllı time-boxing ve AI içgörüleriyle günlük görevlerini planlamana, önceliklendirmen ve takip etmene yardımcı olur. iOS ve Android için kullanılabilir.',
    blogTitle: 'Blog - Time-boxing ve verimlilik ipuçları | Chrobox',
    blogDescription: 'Chrobox ile gününü yönetmek için time-boxing, odaklanma ve zaman yönetimi üzerine pratik stratejiler.',
    templatesTitle: 'Her meslek için günlük program şablonları | Chrobox',
    templatesDescription: 'Geliştiriciler, hemşireler, öğretmenler ve daha fazlası için 20’den fazla ücretsiz time-boxing programı.',
    compareTitle: 'Chrobox alternatifleri ve karşılaştırmaları | Time-boxing uygulaması',
    compareDescription: 'Chrobox’u Todoist, Notion, TickTick, Google Calendar ve diğer araçlarla karşılaştırarak sana uygun verimlilik uygulamasını bul.',
    homeLabel: 'Ana sayfa',
    blogLabel: 'Blog',
    templatesLabel: 'Şablonlar',
    compareLabel: 'Karşılaştır',
    blogArticleTitle: 'Time-boxing rehberi: {title} | Chrobox Blog',
    blogArticleDescription: 'Time-boxing, verimlilik, odaklı planlama ve daha sakin bir günlük akış oluşturma hakkında bu Chrobox rehberini oku.',
    templateArticleTitle: '{profession} için günlük program şablonu | Ücretsiz time-boxing planı | Chrobox',
    templateArticleDescription: '{profession} için ücretsiz time-boxing günlük programı. Chrobox ile odaklı çalışma, molalar, idari işler ve gerçekçi rutinler planla.',
    comparisonArticleTitle: 'Chrobox vs {competitor}: hangisi daha iyi? [2025 karşılaştırması]',
    comparisonArticleDescription: 'Chrobox ile {competitor} karşılaştırmasını incele ve time-boxing, planlama ve odak iş akışına en uygun uygulamayı gör.',
  },
  id: {
    homeTitle: 'Chrobox - Kuasai waktumu dengan time-boxing cerdas | Aplikasi produktivitas',
    homeDescription: 'Chrobox membantu kamu merencanakan, memprioritaskan, dan melacak tugas harian dengan time-boxing cerdas serta insight AI. Tersedia untuk iOS dan Android.',
    blogTitle: 'Blog - Tips time-boxing dan produktivitas | Chrobox',
    blogDescription: 'Strategi praktis tentang time-boxing, fokus, dan manajemen waktu untuk menguasai harimu bersama Chrobox.',
    templatesTitle: 'Template jadwal harian untuk setiap profesi | Chrobox',
    templatesDescription: 'Template time-boxing gratis untuk 20+ profesi, termasuk developer, perawat, guru, dan lainnya.',
    compareTitle: 'Alternatif dan perbandingan Chrobox | Aplikasi time-boxing',
    compareDescription: 'Bandingkan Chrobox dengan Todoist, Notion, TickTick, Google Calendar, dan lainnya untuk menemukan aplikasi produktivitas terbaik.',
    homeLabel: 'Beranda',
    blogLabel: 'Blog',
    templatesLabel: 'Template',
    compareLabel: 'Bandingkan',
    blogArticleTitle: 'Panduan time-boxing: {title} | Blog Chrobox',
    blogArticleDescription: 'Baca panduan Chrobox tentang time-boxing, produktivitas, perencanaan fokus, dan cara membangun jadwal harian yang lebih tenang.',
    templateArticleTitle: 'Template jadwal harian untuk {profession} | Rencana time-boxing gratis | Chrobox',
    templateArticleDescription: 'Jadwal harian time-boxing gratis untuk {profession}. Rencanakan kerja fokus, istirahat, tugas admin, dan rutinitas realistis dengan Chrobox.',
    comparisonArticleTitle: 'Chrobox vs {competitor}: mana yang lebih baik? [Perbandingan 2025]',
    comparisonArticleDescription: 'Bandingkan Chrobox dengan {competitor} dan lihat aplikasi mana yang cocok untuk alur time-boxing, perencanaan, dan fokusmu.',
  },
  vi: {
    homeTitle: 'Chrobox - Làm chủ thời gian với time-boxing thông minh | Ứng dụng năng suất',
    homeDescription: 'Chrobox giúp bạn lập kế hoạch, ưu tiên và theo dõi công việc hằng ngày bằng time-boxing thông minh và insight AI. Có trên iOS và Android.',
    blogTitle: 'Blog - Mẹo time-boxing và năng suất | Chrobox',
    blogDescription: 'Chiến lược thực tế về time-boxing, tập trung và quản lý thời gian để làm chủ ngày làm việc cùng Chrobox.',
    templatesTitle: 'Mẫu lịch trình hằng ngày cho mọi nghề nghiệp | Chrobox',
    templatesDescription: 'Mẫu time-boxing miễn phí cho hơn 20 nghề nghiệp, gồm lập trình viên, y tá, giáo viên và nhiều hơn nữa.',
    compareTitle: 'Các lựa chọn thay thế và so sánh Chrobox | Ứng dụng time-boxing',
    compareDescription: 'So sánh Chrobox với Todoist, Notion, TickTick, Google Calendar và nhiều công cụ khác để tìm ứng dụng năng suất phù hợp.',
    homeLabel: 'Trang chủ',
    blogLabel: 'Blog',
    templatesLabel: 'Mẫu',
    compareLabel: 'So sánh',
    blogArticleTitle: 'Hướng dẫn time-boxing: {title} | Blog Chrobox',
    blogArticleDescription: 'Đọc hướng dẫn Chrobox về time-boxing, năng suất, lập kế hoạch tập trung và xây dựng lịch trình hằng ngày bình tĩnh hơn.',
    templateArticleTitle: 'Mẫu lịch trình hằng ngày cho {profession} | Kế hoạch time-boxing miễn phí | Chrobox',
    templateArticleDescription: 'Lịch trình hằng ngày time-boxing miễn phí cho {profession}. Lên kế hoạch cho công việc tập trung, nghỉ ngơi, việc hành chính và thói quen thực tế với Chrobox.',
    comparisonArticleTitle: 'Chrobox vs {competitor}: ứng dụng nào tốt hơn? [So sánh 2025]',
    comparisonArticleDescription: 'So sánh Chrobox với {competitor} và xem ứng dụng nào phù hợp với quy trình time-boxing, lập kế hoạch và tập trung của bạn.',
  },
  th: {
    homeTitle: 'Chrobox - จัดการเวลาอย่างชาญฉลาดด้วย time-boxing | แอปเพิ่มประสิทธิภาพ',
    homeDescription: 'Chrobox ช่วยให้คุณวางแผน จัดลำดับความสำคัญ และติดตามงานประจำวันด้วย time-boxing อัจฉริยะและข้อมูลเชิงลึกจาก AI ใช้ได้บน iOS และ Android',
    blogTitle: 'บล็อก - เคล็ดลับ time-boxing และประสิทธิภาพ | Chrobox',
    blogDescription: 'กลยุทธ์ที่ใช้ได้จริงเกี่ยวกับ time-boxing การโฟกัส และการจัดการเวลา เพื่อควบคุมวันของคุณด้วย Chrobox',
    templatesTitle: 'เทมเพลตกำหนดการรายวันสำหรับทุกอาชีพ | Chrobox',
    templatesDescription: 'เทมเพลต time-boxing ฟรีสำหรับมากกว่า 20 อาชีพ รวมถึงนักพัฒนา พยาบาล ครู และอื่นๆ',
    compareTitle: 'ทางเลือกและการเปรียบเทียบ Chrobox | แอป time-boxing',
    compareDescription: 'เปรียบเทียบ Chrobox กับ Todoist, Notion, TickTick, Google Calendar และเครื่องมืออื่นๆ เพื่อหาแอปเพิ่มประสิทธิภาพที่เหมาะกับคุณ',
    homeLabel: 'หน้าแรก',
    blogLabel: 'บล็อก',
    templatesLabel: 'เทมเพลต',
    compareLabel: 'เปรียบเทียบ',
    blogArticleTitle: 'คู่มือ time-boxing: {title} | บล็อก Chrobox',
    blogArticleDescription: 'อ่านคู่มือ Chrobox เกี่ยวกับ time-boxing ประสิทธิภาพ การวางแผนเพื่อโฟกัส และการสร้างตารางประจำวันที่สงบขึ้น',
    templateArticleTitle: 'เทมเพลตกำหนดการรายวันสำหรับ {profession} | แผน time-boxing ฟรี | Chrobox',
    templateArticleDescription: 'กำหนดการรายวันแบบ time-boxing ฟรีสำหรับ {profession} วางแผนงานที่ต้องโฟกัส พัก งานธุรการ และกิจวัตรที่ทำได้จริงด้วย Chrobox',
    comparisonArticleTitle: 'Chrobox vs {competitor}: อะไรดีกว่า? [เปรียบเทียบ 2025]',
    comparisonArticleDescription: 'เปรียบเทียบ Chrobox กับ {competitor} และดูว่าแอปใดเหมาะกับ time-boxing การวางแผน และการโฟกัสของคุณ',
  },
  hi: {
    homeTitle: 'Chrobox - स्मार्ट time-boxing से अपना समय संभालें | उत्पादकता ऐप',
    homeDescription: 'Chrobox स्मार्ट time-boxing और AI insights के साथ दैनिक कार्यों की योजना, प्राथमिकता और ट्रैकिंग में मदद करता है। iOS और Android पर उपलब्ध।',
    blogTitle: 'ब्लॉग - Time-boxing और उत्पादकता टिप्स | Chrobox',
    blogDescription: 'Chrobox के साथ दिन को बेहतर बनाने के लिए time-boxing, focus और time management की व्यावहारिक रणनीतियाँ।',
    templatesTitle: 'हर पेशे के लिए दैनिक schedule templates | Chrobox',
    templatesDescription: 'Developers, nurses, teachers और 20+ पेशों के लिए मुफ्त time-boxing schedule templates।',
    compareTitle: 'Chrobox alternatives और comparisons | Time-boxing app',
    compareDescription: 'Chrobox की तुलना Todoist, Notion, TickTick, Google Calendar और अन्य tools से करें और सही productivity app चुनें।',
    homeLabel: 'होम',
    blogLabel: 'ब्लॉग',
    templatesLabel: 'टेम्पलेट',
    compareLabel: 'तुलना',
    blogArticleTitle: 'Time-boxing guide: {title} | Chrobox Blog',
    blogArticleDescription: 'Time-boxing, productivity, focused planning और शांत दैनिक schedule बनाने के लिए यह Chrobox guide पढ़ें।',
    templateArticleTitle: '{profession} के लिए daily schedule template | Free time-boxing plan | Chrobox',
    templateArticleDescription: '{profession} के लिए मुफ्त time-boxing daily schedule। Chrobox से focused work, breaks, admin tasks और realistic routines plan करें।',
    comparisonArticleTitle: 'Chrobox vs {competitor}: कौन बेहतर है? [2025 Comparison]',
    comparisonArticleDescription: 'Chrobox और {competitor} की तुलना करें और देखें कि time-boxing, planning और focus workflow के लिए कौन सा app बेहतर है।',
  },
  ar: {
    homeTitle: 'Chrobox - أتقن وقتك باستخدام time-boxing ذكي | تطبيق إنتاجية',
    homeDescription: 'يساعدك Chrobox على تخطيط مهامك اليومية وترتيب أولوياتها وتتبعها باستخدام time-boxing ذكي ورؤى مدعومة بالذكاء الاصطناعي. متاح على iOS وAndroid.',
    blogTitle: 'المدونة - نصائح time-boxing والإنتاجية | Chrobox',
    blogDescription: 'استراتيجيات عملية حول time-boxing والتركيز وإدارة الوقت لتنظيم يومك مع Chrobox.',
    templatesTitle: 'قوالب جدول يومي لكل مهنة | Chrobox',
    templatesDescription: 'قوالب time-boxing مجانية لأكثر من 20 مهنة، بما في ذلك المطورون والممرضون والمعلمون والمزيد.',
    compareTitle: 'بدائل Chrobox والمقارنات | تطبيق time-boxing',
    compareDescription: 'قارن Chrobox مع Todoist وNotion وTickTick وGoogle Calendar وغيرها لاختيار تطبيق الإنتاجية المناسب.',
    homeLabel: 'الرئيسية',
    blogLabel: 'المدونة',
    templatesLabel: 'القوالب',
    compareLabel: 'مقارنة',
    blogArticleTitle: 'دليل time-boxing: {title} | مدونة Chrobox',
    blogArticleDescription: 'اقرأ دليل Chrobox حول time-boxing والإنتاجية والتخطيط المركز وبناء جدول يومي أكثر هدوءا.',
    templateArticleTitle: 'قالب جدول يومي لـ {profession} | خطة time-boxing مجانية | Chrobox',
    templateArticleDescription: 'جدول يومي مجاني بنظام time-boxing لـ {profession}. خطط للعمل المركز والاستراحات والمهام الإدارية والروتين الواقعي مع Chrobox.',
    comparisonArticleTitle: 'Chrobox vs {competitor}: أيهما أفضل؟ [مقارنة 2025]',
    comparisonArticleDescription: 'قارن Chrobox مع {competitor} لمعرفة التطبيق الأنسب لسير عمل time-boxing والتخطيط والتركيز لديك.',
  },
  ru: {
    homeTitle: 'Chrobox - Управляйте временем с умным time-boxing | Приложение для продуктивности',
    homeDescription: 'Chrobox помогает планировать, расставлять приоритеты и отслеживать ежедневные задачи с помощью умного time-boxing и AI-инсайтов. Доступно для iOS и Android.',
    blogTitle: 'Блог - Time-boxing и советы по продуктивности | Chrobox',
    blogDescription: 'Практические стратегии time-boxing, фокуса и управления временем, чтобы лучше организовать день с Chrobox.',
    templatesTitle: 'Шаблоны ежедневного расписания для каждой профессии | Chrobox',
    templatesDescription: 'Бесплатные шаблоны time-boxing для 20+ профессий, включая разработчиков, медсестер, учителей и других.',
    compareTitle: 'Альтернативы и сравнения Chrobox | Time-boxing приложение',
    compareDescription: 'Сравните Chrobox с Todoist, Notion, TickTick, Google Calendar и другими инструментами, чтобы выбрать подходящее приложение для продуктивности.',
    homeLabel: 'Главная',
    blogLabel: 'Блог',
    templatesLabel: 'Шаблоны',
    compareLabel: 'Сравнить',
    blogArticleTitle: 'Руководство по time-boxing: {title} | Блог Chrobox',
    blogArticleDescription: 'Прочитайте руководство Chrobox о time-boxing, продуктивности, фокус-планировании и более спокойном ежедневном расписании.',
    templateArticleTitle: 'Шаблон ежедневного расписания для {profession} | Бесплатный time-boxing план | Chrobox',
    templateArticleDescription: 'Бесплатное ежедневное расписание с time-boxing для {profession}. Планируйте глубокую работу, перерывы, административные задачи и реалистичные рутины с Chrobox.',
    comparisonArticleTitle: 'Chrobox vs {competitor}: что лучше? [Сравнение 2025]',
    comparisonArticleDescription: 'Сравните Chrobox с {competitor} и узнайте, какое приложение лучше подходит для time-boxing, планирования и фокусной работы.',
  },
  ms: {
    homeTitle: 'Chrobox - Kuasai masa anda dengan time-boxing pintar | Aplikasi produktiviti',
    homeDescription: 'Chrobox membantu anda merancang, mengutamakan dan menjejak tugasan harian dengan time-boxing pintar serta insight AI. Tersedia untuk iOS dan Android.',
    blogTitle: 'Blog - Tip time-boxing dan produktiviti | Chrobox',
    blogDescription: 'Strategi praktikal tentang time-boxing, fokus dan pengurusan masa untuk menguasai hari anda bersama Chrobox.',
    templatesTitle: 'Templat jadual harian untuk setiap profesion | Chrobox',
    templatesDescription: 'Templat time-boxing percuma untuk lebih 20 profesion, termasuk pembangun, jururawat, guru dan banyak lagi.',
    compareTitle: 'Alternatif dan perbandingan Chrobox | Aplikasi time-boxing',
    compareDescription: 'Bandingkan Chrobox dengan Todoist, Notion, TickTick, Google Calendar dan lain-lain untuk mencari aplikasi produktiviti yang sesuai.',
    homeLabel: 'Laman utama',
    blogLabel: 'Blog',
    templatesLabel: 'Templat',
    compareLabel: 'Bandingkan',
    blogArticleTitle: 'Panduan time-boxing: {title} | Blog Chrobox',
    blogArticleDescription: 'Baca panduan Chrobox tentang time-boxing, produktiviti, perancangan fokus dan cara membina jadual harian yang lebih tenang.',
    templateArticleTitle: 'Templat jadual harian untuk {profession} | Pelan time-boxing percuma | Chrobox',
    templateArticleDescription: 'Jadual harian time-boxing percuma untuk {profession}. Rancang kerja fokus, rehat, tugasan pentadbiran dan rutin realistik dengan Chrobox.',
    comparisonArticleTitle: 'Chrobox vs {competitor}: mana lebih baik? [Perbandingan 2025]',
    comparisonArticleDescription: 'Bandingkan Chrobox dengan {competitor} dan lihat aplikasi mana yang sesuai untuk aliran time-boxing, perancangan dan fokus anda.',
  },
};

function localeConfig(locale: SiteLocale): LocaleConfig {
  return SEO_LOCALES.find((item) => item.code === locale) ?? SEO_LOCALES[0];
}

function normalizedEnglishPath(path: string) {
  if (!path || path === '/') {
    return '/';
  }

  const normalized = path.startsWith('/') ? path : `/${path}`;
  return normalized.length > 1 && normalized.endsWith('/')
    ? normalized.slice(0, -1)
    : normalized;
}

function fillTemplate(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.split(`{${key}}`).join(value),
    template,
  );
}

export function localeFromPathSegment(segment: string | undefined): SiteLocale | undefined {
  if (!segment) {
    return undefined;
  }

  const normalized = segment.toLowerCase();
  const locale = SEO_LOCALES.find((item) => item.pathPrefix.slice(1).toLowerCase() === normalized)?.code;
  return locale && INDEXABLE_LOCALES.has(locale) ? locale : undefined;
}

export function localeFromPathname(pathname: string): SiteLocale {
  const segment = pathname.split('/').filter(Boolean)[0];
  return localeFromPathSegment(segment) ?? DEFAULT_LOCALE;
}

export function englishPathFromLocalizedPath(pathname: string) {
  const parts = normalizedEnglishPath(pathname).split('/').filter(Boolean);
  const locale = localeFromPathSegment(parts[0]);

  if (!locale) {
    return normalizedEnglishPath(pathname);
  }

  const rest = parts.slice(1).join('/');
  return rest ? `/${rest}` : '/';
}

export function contentLanguageForLocale(locale: SiteLocale): ContentLanguage {
  return locale === 'ko' ? 'ko' : 'en';
}

export function htmlLangForLocale(locale: SiteLocale) {
  return localeConfig(locale).htmlLang;
}

export function localeLabel(locale: SiteLocale) {
  return localeConfig(locale).nativeLabel;
}

export function localizedPath(locale: SiteLocale, englishPath: string) {
  const path = normalizedEnglishPath(englishPath);
  const prefix = localeConfig(locale).pathPrefix;

  if (!prefix) {
    return path;
  }

  return path === '/' ? prefix : `${prefix}${path}`;
}

export function absoluteUrl(path: string) {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function hreflangAlternates(englishPath: string) {
  const path = normalizedEnglishPath(englishPath);
  const alternates = SEO_LOCALES.filter((locale) => INDEXABLE_LOCALES.has(locale.code)).map((locale) => ({
    hrefLang: locale.code,
    href: absoluteUrl(localizedPath(locale.code, path)),
  }));

  return [
    ...alternates,
    { hrefLang: 'x-default', href: absoluteUrl(localizedPath(DEFAULT_LOCALE, path)) },
  ];
}

export function ogLocale(locale: SiteLocale) {
  return localeConfig(locale).ogLocale;
}

export function ogAlternateLocales(locale: SiteLocale) {
  const current = ogLocale(locale);
  return SEO_LOCALES
    .filter((item) => INDEXABLE_LOCALES.has(item.code))
    .map((item) => item.ogLocale)
    .filter((candidate) => candidate !== current);
}

export function seoCopy(locale: SiteLocale) {
  return SEO_COPY[locale] ?? SEO_COPY[DEFAULT_LOCALE];
}

export function blogArticleSeo(locale: SiteLocale, title: string, excerpt: string) {
  if (locale === 'en' || locale === 'ko') {
    return {
      title: fillTemplate(seoCopy(locale).blogArticleTitle, { title }),
      description: excerpt,
    };
  }

  const copy = seoCopy(locale);
  return {
    title: fillTemplate(copy.blogArticleTitle, { title }),
    description: copy.blogArticleDescription,
  };
}

export function templateArticleSeo(locale: SiteLocale, profession: string, description: string) {
  if (locale === 'en' || locale === 'ko') {
    return {
      title: fillTemplate(seoCopy(locale).templateArticleTitle, { profession }),
      description,
    };
  }

  const copy = seoCopy(locale);
  return {
    title: fillTemplate(copy.templateArticleTitle, { profession }),
    description: fillTemplate(copy.templateArticleDescription, { profession }),
  };
}

export function comparisonArticleSeo(locale: SiteLocale, competitor: string, description: string) {
  if (locale === 'en' || locale === 'ko') {
    return {
      title: fillTemplate(seoCopy(locale).comparisonArticleTitle, { competitor }),
      description,
    };
  }

  const copy = seoCopy(locale);
  return {
    title: fillTemplate(copy.comparisonArticleTitle, { competitor }),
    description: fillTemplate(copy.comparisonArticleDescription, { competitor }),
  };
}

export function blogCategorySeo(locale: SiteLocale, name: string, description: string) {
  const suffix = locale === 'ko' ? 'Chrobox 블로그' : 'Chrobox Blog';
  return {
    title: `${name} | ${suffix}`,
    description,
  };
}
