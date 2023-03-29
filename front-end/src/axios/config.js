const { default: axios } = require('axios');

const api = axios.create({ baseURL: 'http://localhost:3001' });

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export default api;
