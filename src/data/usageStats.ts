// First-party Chrobox usage figures published in the 'does-timeboxing-work' post.
// The post's markdown (blogBatch9.ts, en + ko, and the 18 translated packs) quotes
// these numbers, and datasetSchema() below turns the same object into Dataset
// JSON-LD — so the machine-readable claim cannot drift from the visible one.
// When the data is re-extracted, update this file and the markdown together.
//
// Extraction (2026-09-30): production tasks table, signed-in accounts, tasks dated
// before the extraction day, excluding calendar-imported events, operator/test
// accounts and deleted accounts. Aggregates only; groups under 30 tasks are not
// reported.
export const USAGE_STATS = {
  slug: 'does-timeboxing-work',
  extracted: '2026-09-30',
  periodStart: '2025-12-03',
  periodEnd: '2026-09-29',
  tasks: 5077,
  people: 250,
  plannedDays: 799,
  completion: {
    timeBoxed: 48.1,
    unscheduled: 17.6,
    sameUserPeople: 41,
    sameUserBoxedHigher: 35,
    morning0500to0859: 62.3,
    evening2100to2359: 33.2,
    priority: 44.5,
    nonPriority: 28.9,
  },
  medianBoxMinutes: 60,
  medianTasksPerDay: 5,
} as const;

export const USAGE_STATS_VARIABLES = [
  'Task completion rate, time-boxed vs unscheduled tasks',
  'Time box length distribution and completion by length',
  'Completion rate by time box start time',
  'Tasks planned per day and share of days fully completed',
  'Completion rate of priority-marked tasks',
  'Completion rate by day of week',
];
