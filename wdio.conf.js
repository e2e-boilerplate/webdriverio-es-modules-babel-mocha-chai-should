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
  },
  jasmineNodeOpts: {},
  cucumberOpts: {},
  before: (capabilities, specs) => {
    // eslint-disable-next-line import/no-extraneous-dependencies
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
  },
  jasmineNodeOpts: {},
  cucumberOpts: {},
  before: (capabilities, specs) => {
    // eslint-disable-next-line import/no-extraneous-dependencies
    require("@babel/register");
  },
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;

exports.config = config;
