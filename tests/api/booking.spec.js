const { test, expect } = require('@playwright/test');
const ApiClient = require('../../utils/api-client');
const { generateToken } = require('../../utils/auth-helper');
const { generateBookingData } = require('../test-data/ai-data-generator');
const Ajv = require('ajv');
const bookingSchema = require('./schema/booking.schema');
const BASE_URL = 'https://restful-booker.herokuapp.com';

test.describe('Restful Booker API Lifecycle', () => {

  test('Full booking lifecycle', async () => {

    const api = new ApiClient(BASE_URL);

    // Auth
    const token = await generateToken();
    expect(token).toBeTruthy();

    const context = await api.createContext(token);

    // Create
    const bookingData = generateBookingData();
    const createResponse = await api.post(context, '/booking', bookingData);
    expect(createResponse.status()).toBe(200);

    const createdBody = await createResponse.json();
    const bookingId = createdBody.bookingid;

    expect(bookingId).toBeTruthy();

    // Get
    const getResponse = await api.get(context, `/booking/${bookingId}`);
    expect(getResponse.status()).toBe(200);

    const getBody = await getResponse.json();
    expect(getBody.firstname).toBe(bookingData.firstname);
    const ajv = new Ajv();
    const validate = ajv.compile(bookingSchema);
    const valid = validate(getBody);
    expect(valid).toBe(true);

    // Update
    bookingData.firstname = 'UpdatedName';

    const updateResponse = await api.put(context, `/booking/${bookingId}`, bookingData);
    expect(updateResponse.status()).toBe(200);

    const updatedBody = await updateResponse.json();
    expect(updatedBody.firstname).toBe('UpdatedName');

    // Delete
    const deleteResponse = await api.delete(context, `/booking/${bookingId}`);
    expect(deleteResponse.status()).toBe(201);

  });

});