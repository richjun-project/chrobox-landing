import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');

const ROUTES = [
  '/',
  '/blog',
  '/blog/what-is-time-boxing',
  '/blog/5-time-boxing-strategies',
  '/blog/time-boxing-vs-pomodoro',
  '/templates',
  '/templates/software-developer',
  '/templates/product-manager',
  '/templates/graphic-designer',
  '/templates/marketing-manager',
  '/templates/data-scientist',
  '/templates/freelance-writer',
  '/templates/teacher',
  '/templates/nurse',
  '/templates/startup-founder',
  '/templates/college-student',
  '/templates/remote-worker',
  '/templates/project-manager',
  '/templates/ux-designer',
  '/templates/sales-representative',
  '/templates/accountant',
  '/templates/content-creator',
  '/templates/lawyer',
  '/templates/real-estate-agent',
  '/templates/executive',
  '/templates/parent-working-from-home',
  '/ko',
  '/ko/blog',
  '/ko/blog/what-is-time-boxing',
  '/ko/blog/5-time-boxing-strategies',
  '/ko/blog/time-boxing-vs-pomodoro',
  // Korean templates
  '/ko/templates',
  '/ko/templates/software-developer',
  '/ko/templates/product-manager',
  '/ko/templates/graphic-designer',
  '/ko/templates/marketing-manager',
  '/ko/templates/data-scientist',
  '/ko/templates/freelance-writer',
  '/ko/templates/teacher',
  '/ko/templates/nurse',
  '/ko/templates/startup-founder',
  '/ko/templates/college-student',
  '/ko/templates/remote-worker',
  '/ko/templates/project-manager',
  '/ko/templates/ux-designer',
  '/ko/templates/sales-representative',
  '/ko/templates/accountant',
  '/ko/templates/content-creator',
  '/ko/templates/lawyer',
  '/ko/templates/real-estate-agent',
  '/ko/templates/executive',
  '/ko/templates/parent-working-from-home',
  // New blog posts (EN)
  '/blog/time-boxing-for-adhd',
  '/blog/time-boxing-for-students',
  '/blog/morning-routine-scheduling',
  '/blog/deep-work-scheduling',
  '/blog/best-time-boxing-apps',
  '/blog/weekly-planning-guide',
  '/blog/time-blocking-vs-time-boxing',
  '/blog/remote-work-scheduling',
  '/blog/meeting-management-time-boxing',
  '/blog/work-life-balance-scheduling',
  '/blog/productivity-for-beginners',
  '/blog/time-boxing-for-teams',
  '/blog/energy-management-scheduling',
  '/blog/task-batching-productivity',
  '/blog/focus-time-optimization',
  '/blog/digital-minimalism-scheduling',
  '/blog/time-boxing-with-calendar-apps',
  '/blog/beat-procrastination-time-boxing',
  '/blog/daily-review-ritual',
  '/blog/time-boxing-for-creative-professionals',
  // New blog posts (KO)
  '/ko/blog/time-boxing-for-adhd',
  '/ko/blog/time-boxing-for-students',
  '/ko/blog/morning-routine-scheduling',
  '/ko/blog/deep-work-scheduling',
  '/ko/blog/best-time-boxing-apps',
  '/ko/blog/weekly-planning-guide',
  '/ko/blog/time-blocking-vs-time-boxing',
  '/ko/blog/remote-work-scheduling',
  '/ko/blog/meeting-management-time-boxing',
  '/ko/blog/work-life-balance-scheduling',
  '/ko/blog/productivity-for-beginners',
  '/ko/blog/time-boxing-for-teams',
  '/ko/blog/energy-management-scheduling',
  '/ko/blog/task-batching-productivity',
  '/ko/blog/focus-time-optimization',
  '/ko/blog/digital-minimalism-scheduling',
  '/ko/blog/time-boxing-with-calendar-apps',
  '/ko/blog/beat-procrastination-time-boxing',
  '/ko/blog/daily-review-ritual',
  '/ko/blog/time-boxing-for-creative-professionals',
  '/blog/time-audit-guide',
  '/ko/blog/time-audit-guide',
  // Comparisons (EN)
  '/compare',
  '/compare/chrobox-vs-todoist',
  '/compare/chrobox-vs-google-calendar',
  '/compare/chrobox-vs-notion',
  '/compare/chrobox-vs-trello',
  '/compare/chrobox-vs-asana',
  '/compare/chrobox-vs-clickup',
  '/compare/chrobox-vs-apple-reminders',
  '/compare/chrobox-vs-microsoft-to-do',
  '/compare/chrobox-vs-any-do',
  '/compare/chrobox-vs-ticktick',
  // Comparisons (KO)
  '/ko/compare',
  '/ko/compare/chrobox-vs-todoist',
  '/ko/compare/chrobox-vs-google-calendar',
  '/ko/compare/chrobox-vs-notion',
  '/ko/compare/chrobox-vs-trello',
  '/ko/compare/chrobox-vs-asana',
  '/ko/compare/chrobox-vs-clickup',
  '/ko/compare/chrobox-vs-apple-reminders',
  '/ko/compare/chrobox-vs-microsoft-to-do',
  '/ko/compare/chrobox-vs-any-do',
  '/ko/compare/chrobox-vs-ticktick',
];

// Simple static file server for the dist directory
function startServer(port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);

      // SPA fallback - if file doesn't exist, serve index.html
      if (!existsSync(filePath) || filePath.endsWith('/')) {
        filePath = join(DIST_DIR, 'index.html');
      }

      try {
        const content = readFileSync(filePath);
        const ext = filePath.split('.').pop();
        const mimeTypes = {
          html: 'text/html',
          js: 'application/javascript',
          css: 'text/css',
          png: 'image/png',
          webp: 'image/webp',
          json: 'application/json',
          svg: 'image/svg+xml',
          woff2: 'font/woff2',
        };
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(port, () => {
      console.log(`Preview server running on http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function prerender() {
  const PORT = 4173;
  const server = await startServer(PORT);

  const browser = await puppeteer.launch({ headless: true });

  for (const route of ROUTES) {
    console.log(`Prerendering ${route}...`);

    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for React to render
    await page.waitForSelector('#root > *', { timeout: 10000 });
    // Extra wait for animations/data to settle
    await new Promise((r) => setTimeout(r, 2000));

    let html = await page.content();

    // Determine the best title for this page:
    // For blog posts, use og:title + suffix since Helmet's <title> has a known rendering issue
    const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]*)">/g);
    const blogPostTitle = ogTitleMatch && ogTitleMatch.length > 1
      ? ogTitleMatch[ogTitleMatch.length - 1].match(/content="([^"]*)"/)?.[1]
      : null;

    let bestTitle = '';
    if (blogPostTitle && route.startsWith('/blog/')) {
      bestTitle = `${blogPostTitle} | Chrobox Blog`;
    } else {
      // For other pages, get the rendered document.title or first non-empty <title>
      const titleMatch = [...html.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/g)]
        .map(m => m[1].trim())
        .filter(Boolean);
      bestTitle = titleMatch[0] || 'Chrobox - Master Your Time with Intelligent Time-Boxing | Productivity App';
    }

    // Replace all title tags with the single best one
    html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/g, '');
    html = html.replace('</head>', `<title>${bestTitle}</title></head>`);

    // Clean up duplicate meta description tags - keep the last (Helmet's)
    const descMatches = [...html.matchAll(/<meta name="description"[^>]*>/g)];
    if (descMatches.length > 1) {
      const lastDesc = descMatches[descMatches.length - 1][0];
      html = html.replace(/<meta name="description"[^>]*>/g, '');
      html = html.replace('</head>', `${lastDesc}</head>`);
    }

    // Clean up duplicate canonical tags - keep the last (Helmet's)
    const canonicalMatches = [...html.matchAll(/<link rel="canonical"[^>]*>/g)];
    if (canonicalMatches.length > 1) {
      const lastCanonical = canonicalMatches[canonicalMatches.length - 1][0];
      html = html.replace(/<link rel="canonical"[^>]*>/g, '');
      html = html.replace('</head>', `${lastCanonical}</head>`);
    }

    // Remove prerendering artifacts (inline gtag tracking pixels with localhost URLs)
    html = html.replace(/<script type="text\/javascript" async="" src="https:\/\/googleads\.g\.doubleclick\.net\/pagead\/viewthroughconversion[^"]*localhost[^"]*"[^>]*><\/script>/g, '');

    // Determine output path
    const outputPath = route === '/'
      ? join(DIST_DIR, 'index.html')
      : join(DIST_DIR, route, 'index.html');

    const outputDir = dirname(outputPath);
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    writeFileSync(outputPath, html);
    console.log(`  -> ${outputPath}`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log('\nPrerendering complete!');
}

prerender().catch((err) => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});
