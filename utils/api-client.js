const { request } = require('@playwright/test');

class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async createContext(token = null) {
    return await request.newContext({
      baseURL: this.baseURL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
        ...(token && { Cookie: `token=${token}` })
      }
    });
  }

  async post(context, url, data) {
    return await context.post(url, { data });
  }

  async get(context, url) {
    return await context.get(url);
  }

  async put(context, url, data) {
    return await context.put(url, { data });
  }

  async delete(context, url) {
    return await context.delete(url);
  }
}

module.exports = ApiClient;
