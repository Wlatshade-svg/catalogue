// Usage: node check-page.js <url> <screenshot-dir>
// Opens the page at phone and desktop size and reports anything broken.
const { chromium } = require('playwright');
const fs = require('fs');
const [url, out = '.'] = process.argv.slice(2);
if (!url) { console.error('usage: node check-page.js <url> <screenshot-dir>'); process.exit(2); }
fs.mkdirSync(out, { recursive: true });
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
  let bad = 0;
  for (const vp of [{ width: 390, height: 844, n: 'phone' }, { width: 1366, height: 850, n: 'desktop' }]) {
    const p = await b.newPage({ viewport: vp });
    const errs = [];
    const fonts = (u) => /fonts\.(googleapis|gstatic)\.com/.test(u);
    p.on('pageerror', (e) => errs.push('page error: ' + e.message));
    p.on('console', (m) => { if (m.type() === 'error' && !/fonts\.g|ERR_CERT/.test(m.text())) errs.push('console: ' + m.text()); });
    p.on('requestfailed', (r) => { if (!fonts(r.url())) errs.push('failed: ' + r.url()); });
    p.on('response', (r) => { if (r.status() >= 400 && !fonts(r.url())) errs.push(r.status() + ': ' + r.url()); });
    await p.goto(url, { waitUntil: 'load' });
    await p.waitForTimeout(6000);
    const shot = `${out}/${vp.n}.png`;
    await p.screenshot({ path: shot });
    const info = await p.evaluate(() => ({
      title: document.title,
      canvases: document.querySelectorAll('canvas').length,
      overflowX: document.documentElement.scrollWidth - innerWidth,
    }));
    bad += errs.length + (info.overflowX > 0 ? 1 : 0);
    console.log(`${vp.n}: ${JSON.stringify(info)} screenshot=${shot}`);
    errs.forEach((e) => console.log('  ' + e));
  }
  await b.close();
  console.log(bad ? `PROBLEMS: ${bad}` : 'OK: no errors at either size');
  process.exit(bad ? 1 : 0);
})();
