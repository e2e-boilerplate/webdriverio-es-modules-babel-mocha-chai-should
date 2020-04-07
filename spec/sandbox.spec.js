import { expect } from "chai";

describe("Sandbox", () => {
  before(() => {
    browser.url("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    const title = browser.getTitle();
    const header = $("h1").getText();

    expect(title).to.eq("Sandbox");
    expect(header).to.eq("Sandbox");
  });
});
