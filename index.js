const puppeteer = require('puppeteer');

(async () => {
  // 🧠 Launch Chrome browser
  const browser = await puppeteer.launch({
    headless: true, // visible browser
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 🌐 Go to example.com
  await page.goto('https://example.com', {
    waitUntil: 'networkidle2'
  });

  // 📄 Print page title
  const title = await page.title();
  console.log('✅ Page Title:', title);

  // ❌ Optional: close browser
  // await browser.close();
})();
