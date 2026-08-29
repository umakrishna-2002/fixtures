# fixtures

Playwright fixtures are isolated, <b>reusable environments or components</b> that are automatically set up before a test and torn down afterward.

Playwright provides several out-of-the-box fixtures that manage the browser context natively:

page: Provides an isolated browser tab or page for the test. 

context: Provides an isolated browser profile (cookies, storage).

browser: Shares a single browser instance across parallel tests to save memory.

request: Provides an isolated API client to run back-end calls.


