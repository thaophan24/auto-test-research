import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: "./src/tests",
  timeout: 30000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  retries: 1,
  workers: 2,
  reporter: [["html", { outputFolder: "test-results/reports" }]],

  use: {
    headless: false,
    viewport: { width: 390, height: 844 },
    baseURL: "https://evocard.tpb.vn/",
    ignoreHTTPSErrors: true,
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    video: "retain-on-failure",
  },

  projects: [
    { name: "chromium", use: { browserName: "chromium" } },
    { name: "firefox", use: { browserName: "firefox" } },
    { name: "webkit", use: { browserName: "webkit" } },
  ],
});
