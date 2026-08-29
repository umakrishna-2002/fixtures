const { test: base } = require('@playwright/test');

const test = base.extend({
  // Fixture 1: Automatically sets up an Admin context
  adminPage: async ({ browser }, use) => {
    // Create an isolated context, but explicitly inject the Admin session file
    const context = await browser.newContext({ storageState: 'playwright/.auth/admin.json' });
    const page = await context.newPage();
    
    await use(page); // Hand the admin page to the test
    
    await context.close(); // Clean up context when done
  },

  // Fixture 2: Automatically sets up a Staff context
  staffPage: async ({ browser }, use) => {
    // Create an isolated context injecting the Staff session file
    const context = await browser.newContext({ storageState: 'playwright/.auth/staff.json' });
    const page = await context.newPage();
    
    await use(page); // Hand the staff page to the test
    
    await context.close(); // Clean up context when done
  }
});

module.exports = { test };
