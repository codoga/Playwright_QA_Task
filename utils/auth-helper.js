const ApiClient = require('./api-client');
const BASE_URL = 'https://restful-booker.herokuapp.com';

async function generateToken() {
  const api = new ApiClient(BASE_URL);
  const context = await api.createContext();

  const response = await api.post(context, '/auth', {
    username: 'admin',
    password: 'password123'
  });

  const body = await response.json();
  return body.token;
}

module.exports = { generateToken };
