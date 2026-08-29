const { test } = require('./fixtures');
const { expect } = require('@playwright/test');

test('verfying sales dashboars', async ({ authenticatedPage }) => {
  await authenitcationPage.goto('dashboards/sales');
  await expect  (authenticationPage.locator('#sales-chart')).toBeVisible();
});

test('verfying Marketing Dashboard', async({ authenticatedPage }) => {
  await authenticationPage.goto('/dashboards/marketing');
  await expect(authenticationPage.locator('#campaign-stats')).toBeVisible();
});

test('verfying HR dashboars', async ({ authenticatedPage }) => {
  await authenitcationPage.goto('dashboards/hr');
  await expect  (authenticationPage.locator('#employee-count')).toBeVisible();
});

test('verfying ENgineer dashboars', async ({ authenticatedPage }) => {
  await authenitcationPage.goto('dashboards/workers');
  await expect  (authenticationPage.locator('#tickets-solved')).toBeVisible();
});

/* You can create a single file or multiple file targeting different dashboards. If you have "workers:4"
set your <b>playwright.config.js</b>, playwright will spin up 4 workers and crush through these tests concurrently.  
*/

