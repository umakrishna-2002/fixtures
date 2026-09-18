<h2>API Chaining:</h2>

API chaining in Playwright is the practice of extracting a value from one API response (such as an ID, authentication token, or resource status) and passing it dynamically into subsequent API requests.
- This pattern is essential for handling workflows like end-to-end integration testing or logging in via an API before running UI automation


When writing API tests, you leverage Playwright's built-in request context. Because JavaScript uses <b>Promises</b>, you capture variables from a completed request using <b>await response.json()</b> and reference those variables in the configuration block of the next request.

