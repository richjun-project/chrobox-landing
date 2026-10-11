/**
 * 1차 데이터를 기계가 읽을 수 있는 안정 URL 로 공개한다.
 *
 * 생성엔진·검색엔진은 "이 숫자가 어디서 시작됐나"를 추적한다. 글 안의 표만
 * 있으면 남이 요약한 페이지에 인용을 뺏기지만, 안정 URL 의 JSON 이 있으면
 * 그 주소가 인용 주소가 된다. Dataset JSON-LD 의 distribution 이 이 파일을
 * 가리키므로 **손으로 쓰지 않고 usageStats.ts 에서 생성**한다 — 글·구조화
 * 데이터·배포 파일 셋이 한 소스에서 나와야 드리프트가 생기지 않는다.
 */
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { writeFileSync, mkdirSync } from 'fs';
import { createJiti } from 'jiti';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const jiti = createJiti(import.meta.url, { interopDefault: true });
const { USAGE_STATS, USAGE_STATS_VARIABLES } = await jiti.import(join(ROOT, 'src/data/usageStats.ts'));

const BASE = 'https://chrobox.net';
const c = USAGE_STATS.completion;

const payload = {
  name: 'Chrobox timeboxing completion dataset',
  description:
    'Aggregated, anonymized task-completion figures from the Chrobox timeboxing app. ' +
    'Published as the primary source for the completion rates quoted on chrobox.net.',
  source: `${BASE}/blog/${USAGE_STATS.slug}`,
  license: 'https://creativecommons.org/licenses/by/4.0/',
  attribution: 'Chrobox (chrobox.net)',
  extracted: USAGE_STATS.extracted,
  temporalCoverage: { start: USAGE_STATS.periodStart, end: USAGE_STATS.periodEnd },
  method:
    'Production task records from signed-in accounts, tasks dated before the extraction day. ' +
    'Excludes calendar-imported events, operator/test accounts and deleted accounts. ' +
    'Aggregates only; groups under 30 tasks are not reported.',
  sample: {
    tasks: USAGE_STATS.tasks,
    people: USAGE_STATS.people,
    plannedDays: USAGE_STATS.plannedDays,
  },
  variablesMeasured: USAGE_STATS_VARIABLES,
  findings: {
    completionRatePercent: {
      timeBoxedTasks: c.timeBoxed,
      unscheduledTasks: c.unscheduled,
      priorityTasks: c.priority,
      nonPriorityTasks: c.nonPriority,
      boxesStarting0500to0859: c.morning0500to0859,
      boxesStarting2100to2359: c.evening2100to2359,
    },
    withinPersonComparison: {
      peopleWithBothTaskTypes: c.sameUserPeople,
      peopleWhereTimeBoxedCompletedMore: c.sameUserBoxedHigher,
    },
    medianTimeBoxMinutes: USAGE_STATS.medianBoxMinutes,
    medianTasksPlannedPerDay: USAGE_STATS.medianTasksPerDay,
  },
};

mkdirSync(join(ROOT, 'public', 'data'), { recursive: true });
const out = join(ROOT, 'public', 'data', 'timeboxing-completion.json');
writeFileSync(out, JSON.stringify(payload, null, 2) + '\n', 'utf8');
console.log(`[dataset] wrote ${out} (${JSON.stringify(payload).length} bytes)`);
