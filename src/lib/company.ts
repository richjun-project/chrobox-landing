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
