import axios, { AxiosRequestConfig, Method, ResponseType } from 'axios';
import { toast } from '../utils/function';

axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      config.headers['accesstoken'] = localStorage.getItem('token');
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    let token = response.headers.accesstoken;

    if (token) {
      axios.defaults.headers.common['accesstoken'] = token;
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axios;
