const chromium = require('chrome-aws-lambda');

(async () => {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
  });

  const page = await browser.newPage();
  await page.goto('https://example.com', { waitUntil: 'networkidle2' });

  const title = await page.title();
  console.log('✅ Page Title:', title);

  await browser.close();
})();
