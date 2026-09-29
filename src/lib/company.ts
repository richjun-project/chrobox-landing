// Single source for the operator details shown in the footer and asserted in
// Organization structured data — the two must never drift apart.
export const COMPANY_INFO = {
  name: 'silverithm',
  ceo: '김준형',
  businessNumber: '107-21-26475',
  address: '서울특별시 신림동 1547-10',
  email: 'ggprgrkjh@naver.com',
  phone: '010-4549-2094',
};

// LLMO: the same URL is declared in Organization.sameAs and linked visibly in the
// footer. A crawlable visible link reinforces the entity link the structured data
// only asserts. Verified 2026-08-28: canonical host is threads.com.
export const THREADS_URL = 'https://www.threads.com/@chrobox';

// Product facts shown in the hero stats row and asserted in structured data /
// llms.txt. One source so the visible numbers and the machine-readable ones
// cannot disagree.
//
// Store rating, re-checked 2026-09-30: App Store KR 4.0★ × 9 (iTunes lookup API),
// Google Play 4.67★ × 6 (Play page JSON-LD). Weighted: (4.0×9 + 4.67×6) / 15 = 4.27 → 4.3.
// Re-check both stores before changing, and update the date above.
export const STORE_RATING = { value: '4.3', count: 15 };
export const APP_LANGUAGE_COUNT = 54;
export const PRO_TRIAL_DAYS = 3;
