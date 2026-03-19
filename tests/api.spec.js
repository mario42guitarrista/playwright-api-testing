const { test, expect } = require('@playwright/test');

test.describe('API Tests', () => {

  test('GET user should return status 200', async ({ request }) => {
    const response = await request.get('/users/1');

    expect(response.status()).toBe(200);
  });

  test('POST should create a new post', async ({ request }) => {
    const response = await request.post('/posts', {
      data: {
        title: 'QA Automation',
        body: 'Testing API',
        userId: 1
      }
    });

    expect(response.status()).toBe(201);
  });

  // 🔴 AQUI entra o teste negativo
  test('GET invalid endpoint should return 404', async ({ request }) => {
    const response = await request.get('/invalid-endpoint');

    expect(response.status()).toBe(404);
  });

});