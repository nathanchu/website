const puppeteer = require('puppeteer')
const { writeFile } = require('fs/promises')
const toIco = require('to-ico')

const randomColor = () =>
  Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')

const randomPercent = () => Math.floor(Math.random() * 101)

module.exports = async () => {
  const browser = await puppeteer.launch()

  const page = await browser.newPage()

  await page.setViewport({
    width: 256,
    height: 256
  })

  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            background-color: #${randomColor()};
            background-image:
              radial-gradient(at ${randomPercent()}% ${randomPercent()}%, #${randomColor()} 0, transparent 50%),
              radial-gradient(at ${randomPercent()}% ${randomPercent()}%, #${randomColor()} 0, transparent 50%),
              radial-gradient(at ${randomPercent()}% ${randomPercent()}%, #${randomColor()} 0, transparent 50%),
              radial-gradient(at ${randomPercent()}% ${randomPercent()}%, #${randomColor()} 0, transparent 50%),
              radial-gradient(at ${randomPercent()}% ${randomPercent()}%, #${randomColor()} 0, transparent 50%),
              radial-gradient(at ${randomPercent()}% ${randomPercent()}%, #${randomColor()} 0, transparent 50%),
              radial-gradient(at ${randomPercent()}% ${randomPercent()}%, #${randomColor()} 0, transparent 50%);
            background-repeat: no-repeat;
            background-attachment: fixed;
          }
        </style>
      </head>
      
      <body>
      </body>
    </html>
  `)

  const screenshot = await page.screenshot()

  await browser.close()

  const ico = await toIco([screenshot], { resize: true })

  await writeFile('./public/favicon.ico', ico)
}
