import { test, expect } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";
import { faker } from "@faker-js/faker";
import * as dotenv from "dotenv";

dotenv.config();
test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("navigate to form page", async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().formLayoutsPage();
  await pm.navigateTo().datePickerPage();
  await pm.navigateTo().smartTablePage();
  await pm.navigateTo().toastrPage();
  await pm.navigateTo().tooltipPage();
});

test("parameterized methods", async ({ page }) => {
  const pm = new PageManager(page);
  const randomFullName = faker.person.fullName();
  const randomEmail = `${randomFullName.replace(" ", "")}${faker.number.int(
    1000
  )}@test.com`;

  await pm.navigateTo().formLayoutsPage();
  await pm
    .onFormLayoutsPage()
    .submitUsingTheGridFormWithCredentialsAndSelectOption(
      process.env.USERNAME,
      process.env.PASSWORD1,
      "Option 2"
    );

  await page.screenshot({ path: "screenshots/formsLayoutPage.png" });
  await pm
    .onFormLayoutsPage()
    .submitInLineFormWithNameEmailAndCheckbox(
      randomFullName,
      randomEmail,
      false
    );
  await page
    .locator("nb-card", { hasText: "Inline form" })
    .screenshot({ path: "screenshots/inlineForm.png" });
  // await pm.navigateTo().datePickerPage();
  // await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(5);
  // await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 45);
});

test.only("navigate to form page git", async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().formLayoutsPage();
  await pm.navigateTo().datePickerPage();
});
