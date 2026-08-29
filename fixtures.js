const { test: base } = require('@playwright/tests');

const test = base.extend({
  //Defining a custom fixture named 'authenticationPage"
      authenticationPage: async ({ page }, use) => {
        // Setting Phase: Runs before your tests
       await page.goto('/login');
       await page.fill('#usernamer', 'admin');
       await page.click('#submit");

       await use(page);  //passing this resource to test; everything above the use() line will be executed.
       // the moment playwright hits await use(page), it passes that specific, logged-in browser page back to the test file, the test will take over and executes its own code.

       await page.click('#logout);   
                        //teardownPahse: Runs after test finishes.
       //once the test block finishes, whether it passes or fails). playwright will jump back to the fixture file and exectues everything below use() line:
                        

        },
});

module.exports = { test };                 
        
                         
