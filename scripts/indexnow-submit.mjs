/**
 * Submits site URLs to IndexNow (Bing, Yandex, Seznam, Naver — feeds Microsoft
 * Copilot citations via the Bing index).
 *
 * Usage:
 *   node scripts/indexnow-submit.mjs                       # every sitemap URL
 *   node scripts/indexnow-submit.mjs /blog/foo /ko/blog/foo # specific paths
 *
 * The key file public/<KEY>.txt must stay deployed — IndexNow verifies it.
 */
import { getPrerenderRoutes, urlForPath, BASE_URL } from './seo-routes.mjs';

const KEY = '06184bede85efad1d92879b4f4fc38ed';
const HOST = new URL(BASE_URL).host;
const BATCH_SIZE = 10000;

const args = process.argv.slice(2);
const urls = args.length
  ? args.map((path) => urlForPath(path.startsWith('/') ? path : `/${path}`))
  : getPrerenderRoutes().map(urlForPath);

for (let i = 0; i < urls.length; i += BATCH_SIZE) {
  const batch = urls.slice(i, i + BATCH_SIZE);
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${BASE_URL}/${KEY}.txt`,
      urlList: batch,
    }),
  });

  // 200 = submitted, 202 = accepted (key not yet verified) — both are success.
  if (response.status !== 200 && response.status !== 202) {
    console.error(`IndexNow submission failed: HTTP ${response.status} ${await response.text()}`);
    process.exit(1);
  }
  console.log(`Submitted ${batch.length} URLs to IndexNow (HTTP ${response.status}).`);
}
