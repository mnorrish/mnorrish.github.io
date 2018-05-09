const puppeteer = require("puppeteer");

describe("on page load", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:8080/")
  })

  it('has correct h1', async () => {
    const html = await page.$eval("h1", element => element.innerHTML);
    expect(html).toBe("Matthew Norrish");
  });
});
