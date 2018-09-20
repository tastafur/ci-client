const puppeteer = require('puppeteer');
const { expect } = require('chai');

const globalVariables = {
  browser: global['browser'],
  expect: global['expect']
};

// puppeteer options
let opts;
if(!process.env.CI) {
  opts = {
    headless: false,
    slowMo: 100,
    timeout: 12000
  };
} else {
  opts = {
    args: ['--no-sandbox'],
    slowMo: 100,
    timeout: 12000
  };
}


// expose variables
before (async () => {
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
});

// close browser and reset global variables
after (() => {
  browser.close();

  global.browser = globalVariables.browser;
  global.expect = globalVariables.expect;
});
