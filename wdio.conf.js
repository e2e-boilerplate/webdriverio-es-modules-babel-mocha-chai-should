const headed = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.js"],
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "mocha",
  reporters: ["dot"],
  mochaOpts: {
    timeout: 60000,
    require: ["@babel/register"],
  },
  jasmineNodeOpts: {},
  cucumberOpts: {},
  // eslint-disable-next-line no-unused-vars
  before: (capabilities, specs) => {
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    require("@babel/register");
  },
};

const headless = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.js"],
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu"]
      },
    },
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "mocha",
  reporters: ["dot"],
  mochaOpts: {
    timeout: 60000,
    require: ["@babel/register"],
  },
  jasmineNodeOpts: {},
  cucumberOpts: {},
  // eslint-disable-next-line no-unused-vars
  before: (capabilities, specs) => {
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    require("@babel/register");
  },
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;

exports.config = config;
