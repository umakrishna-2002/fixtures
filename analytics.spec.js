const { test } = require('./fixtures');

test('should dispaly analytics', async({ authenticationPage }) => {
  //the page is already logged in, isolated and ready to show the dashboard

  await authenticationPage.locator('#analytics').click();
  });

/*why this useful.
if you 10 different test files that all need to check different parts of the dashboard (analytics.settings, profiles), they can all resue this single fixtures alone.
- they don't need to copy-paste the login or logout setups.
- If your login Phase selectors change in the fixture, you only have to fix the them in one place(fixture file) instead of fixing 10 different test files
*/
  

     
