<b>storageState</b> is used to capture, save, and reuse a browser's authenticated state (including cookies, localStorage, sessionStorage, and passkeys) across multiple tests.

- Its primary purpose is to eliminate the need to log into your application before every single test. Instead, you log in just once, dump the active session data into a JSON file, and load that file into subsequent test contexts so they start already authenticated.
- 
