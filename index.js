const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // Required for Render
  });

  const page = await browser.newPage();
  await page.goto('https://example.com', { waitUntil: 'networkidle2' });

  const title = await page.title();
  console.log('✅ Page title is:', title);

  await browser.close();
})();
