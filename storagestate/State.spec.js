await page.getByLabel('Username').fill('user@example.com');
await page.getByLabel('Password').fill('securePassword');
await page.getByRole('button', { name: 'Log in' }).click();

// CRITICAL: Ensure the page loads completely so cookies/storage are set
await page.waitForURL('**/dashboard'); 

// Save the state to disk
await page.context().storageState({ path: 'playwright/.auth/user.json' });

/*
Race Conditions: If you capture the storage state too quickly before the server responds and sets the cookies,
your file will be empty or invalid. Always use explicit waits (like page.waitForURL() or waiting for a 
specific dashboard element to appear) before saving.
*/
