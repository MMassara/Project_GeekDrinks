import api from './config';

export const getData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const postData = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const putData = async (endpoint, body) => {
  const { data } = await api.get(endpoint, body);
  return data;
};
