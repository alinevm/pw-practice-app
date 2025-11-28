import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("suite 1", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
  });

  test("the first test", async ({ page }) => {
    await page.getByText("Form Layouts").click();
  });

  test("navigate to datepicker page", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});

test.describe("suite 2", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Tables & Data").click();
  });

  test("the first test", async ({ page }) => {
    await page.getByText("Smart Table").click();
  });

  test("navigate to datepicker page", async ({ page }) => {
    await page.getByText("Tree Grid").click();
  });
});

// test.beforeAll(() => {    *it runs before all the tests once, just once
// })
// test.afterEach()  -executed after each test
// test.afterAll()   -executed after all tests

// to group test in test suite:
// test.describe('test suite 1', () => {    // () => a shorter, modern way to write functions introduced in ES6
//     test('the first test', () => {

//     })
//       test('the first test', () => {

//     })
// })
