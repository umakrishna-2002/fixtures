const { test, expect } = require('@playwright/test');

test('End-to-End API Chaining Scenario (JavaScript)', async ({ request }) => {
  let authToken;
  let bookingId;

  // STEP 1: Generate Authentication Token via POST
  const authResponse = await request.post('https://herokuapp.com', {
    headers: { 'Content-Type': 'application/json' },
    data: {
      username: 'admin',
      password: 'password123'
    }
  });
  
  expect(authResponse.ok()).toBeTruthy();
  const authBody = await authResponse.json();
  authToken = authBody.token; // Extract token 
  expect(authToken).toBeDefined();

  // STEP 2: Create a New Booking via POST
  const createResponse = await request.post('https://herokuapp.com', {
    headers: { 'Content-Type': 'application/json' },
    data: {
      firstname: 'Alex',
      lastname: 'Jones',
      totalprice: 150,
      depositpaid: true,
      bookingdates: { checkin: '2026-10-01', checkout: '2026-10-05' },
      additionalneeds: 'Breakfast'
    }
  });

  expect(createResponse.status()).toBe(200);
  const createBody = await createResponse.json();
  bookingId = createBody.bookingid; // Extract dynamic ID
  expect(bookingId).toBeGreaterThan(0);

  // STEP 3: Update the Created Booking via PUT (Chaining both extracted values)
  const updateResponse = await request.put(`https://herokuapp.com/${bookingId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // Pass the dynamic token in the header format required by the server
      'Cookie': `token=${authToken}` 
    },
    data: {
      firstname: 'Alex',
      lastname: 'Jones',
      totalprice: 180, // Updated value
      depositpaid: true,
      bookingdates: { checkin: '2026-10-01', checkout: '2026-10-05' },
      additionalneeds: 'Late Check-out' // Updated value
    }
  });

  // Verification
  expect(updateResponse.ok()).toBeTruthy();
  const updateBody = await updateResponse.json();
  expect(updateBody.totalprice).toBe(180);
  expect(updateBody.additionalneeds).toBe('Late Check-out');
});
