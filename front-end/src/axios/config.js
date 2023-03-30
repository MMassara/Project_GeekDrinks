const { default: axios } = require('axios');

const api = axios.create({ baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}` });

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export default api;
