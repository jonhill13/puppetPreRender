const puppeteer = require('puppeteer');
const fs = require('fs'); 
// exports.handler
const jon = async (event, context, callback) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://usaspending.gov', { waitUntil: "networkidle2" });
  const html = await page.content();
  console.log(' HTML : ', html);
  await browser.close();
  return callback(null, html);
};
jon();
