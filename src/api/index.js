import axios from 'axios';

const Request = axios.create({
  baseURL: 'https://api.github.com',
});

const api = {
  async get(url, data = {}) {
    try {
      const response = await Request.get(url, {
        params: data,
      });
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

export const getUserData = (userName) => api.get(`/users/${userName}`);
export const getUserRepoList = (userName, params) => {
  return api.get(`/users/${userName}/repos`, params);
};
