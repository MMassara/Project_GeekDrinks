import axios from 'axios';

// const api = axios.create({ baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}` });

// export const setToken = (token) => {
//   api.defaults.headers.common.Authorization = token;
// };

// export default api;

const api = axios.post('http://localhost:3001/register', {
  "name": "Honda Cb 600f",
  "email": "test@test99.com",
  "password": "Yellow"
}).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.error(error);
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export default api;
