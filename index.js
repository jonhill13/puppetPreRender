const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context, callback) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://usaspending.gov', { waitUntil: "networkidle2" });
  const html = await page.content();
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };
  console.log(' HTML : ', html);
  await browser.close();
  return callback(null, response);
};
