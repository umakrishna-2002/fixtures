# fixtures

Playwright fixtures are isolated, <b>reusable environments or components</b> that are automatically set up before a test and torn down afterward.

Playwright provides several out-of-the-box fixtures that manage the browser context natively:

page: Provides an isolated browser tab or page for the test. 

context: Provides an isolated browser profile (cookies, storage).

browser: Shares a single browser instance across parallel tests to save memory.

request: Provides an isolated API client to run back-end calls.


We can use fixtures to run the tests concurrently using workers. 

- If you run Playwright in parallel (using multiple worker threads), Playwright will handle the isolation automatically. Each worker thread gets its own completely separate browser instance, browser context, cookies, and cache.

- This will kills the hooks approach.

If you tried worker approach instead of fixtures, <b>beforeEch</b> and <b>afterEach</b> hooks using an external shared variable, running tests in parallel inside the same file would quickly corrupt the data, Worker 2 might trigger a logout while Worker 1 is still trying to read ihe data. Fixtures completely remove this risk because the it is tightly bound to that specific test execution context. 
