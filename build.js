const { chromium } = require('playwright')
const path = require('path')
const fs = require('fs')

const WriteFile = screenshot => file =>
  new Promise((resolve, reject) => {
    fs.writeFile(path.join(__dirname, file), screenshot, err => {
      if (err) return reject(err)
      resolve()
    })
  })

const main = async obj => {
  try {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const screenshot = async (site, file) => {
      try {
        const page = await context.newPage()
        await page.setViewportSize({ width: 1200, height: 900 })
        await page.goto(site)
        const writeFile = WriteFile(await page.screenshot())
        if (Array.isArray(file)) await Promise.all(file.map(writeFile))
        if (typeof file === 'string') await writeFile(file)
        return file
      } catch (e) {
        console.error(e)
        return
      }
    }
    await Promise.all(Object.entries(obj).map(e => screenshot(...e)))
    await browser.close()
    return
  } catch (e) {
    console.error(e)
    return
  }
}

main({
  'https://nathanchu.com/': [
    'static/banner.png',
    'src/images/projects/website.png'
  ],
  'https://weather.rayyansaidi.com/': 'src/images/projects/weather.png'
}).catch(e => console.error(e))
