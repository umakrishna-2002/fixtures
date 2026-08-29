// dashboards.spec.js
const { test } = require('./fixtures');
const { expect } = require('@playwright/test');

test('Admin can see financial metrics', async ({ adminPage }) => {
  await adminPage.goto('/dashboards/finance');
  await expect(adminPage.locator('#revenue-chart')).toBeVisible();
});

test('Staff can see tasks but not financial metrics', async ({ staffPage }) => {
  await staffPage.goto('/dashboards/tasks');
  await expect(staffPage.locator('#my-tasks')).toBeVisible();
  
  // Verify staff gets restricted access on finance page
  await staffPage.goto('/dashboards/finance');
  await expect(staffPage.locator('#access-denied-message')).toBeVisible();
});

test('Unauthenticated user is redirected to login', async ({ page }) => {
  // We use Playwright's default 'page' fixture here, which has no cookies!
  await page.goto('/dashboards/finance');
  await expect(page).toHaveURL('/login');
});
