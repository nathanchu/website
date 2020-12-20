const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs');

function newWriteFile(screenshot) {
  return function writeFile(file) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path.join(__dirname, file), screenshot, (err) => {
        if (err) return reject(err)
        resolve()
      })
    })
  }
}

;(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 900 })
  async function screenshot(site, file) {
    await page.goto(site);
    const writeFile = newWriteFile(await page.screenshot())
    if (Array.isArray(file)) await Promise.all(file.map(writeFile));
    if (typeof file === 'string') await writeFile(file)
    return file
  }
  await screenshot('https://nathanchu.com/', ['static/banner.png', 'src/images/projects/website.png'])
  await screenshot('https://weather.rayyansaidi.com/', 'src/images/projects/weather.png')
  await browser.close();
})()
