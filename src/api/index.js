import axios from 'axios';

const Request = axios.create({
  baseURL: 'https://api.github.com',
});

const api = {
  async get(url, params) {
    try {
      const response = await Request.get(`${url + params}`);
      return new Promise((resolve) => {
        if (response.status === 200) {
          resolve(response);
        } else {
          resolve(response);
        }
      });
    } catch (err) {
      /* eslint-disable no-console */
      console.log(err);
      /* eslint-enable no-console */
    }
    return null;
  },
};

export const getUserData = (params) => api.get('/users/', params);
export const aaa = (params) => api.get('/all', params);
