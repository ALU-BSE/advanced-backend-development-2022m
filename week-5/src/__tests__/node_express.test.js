const request = require('supertest');
const app = require('../node_express');

describe('GET /items', () => {
    it('should return an array of items', async () => {
        const response = await request(app).get('/items');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);

    });
});

// TODO: Write a test for the POST /items endpoint
// TODO: Write a test for the GET /items/:id endpoint
// TODO: Write a test for the PUT /items/:id endpoint
// TODO: Write a test for the DELETE /items/:id endpoint