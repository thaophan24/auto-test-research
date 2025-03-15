import { Given, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import { expect } from "@playwright/test";

let browser: Browser;
let page: Page;

Given("I open the EvoCard TPBank website", async function () {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://evocard.tpb.vn/");
});

Then("the page title should contain {string}", async function (expectedTitle: string) {
    expect(await page.title()).toContain(expectedTitle);
    await browser.close();
});
