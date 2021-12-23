import axios, { AxiosRequestConfig, Method, ResponseType } from 'axios';
import { requestCode } from '../utils/varbile';
import { toast } from '../utils/function';
import tools from '@/utils';

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

export const resquest = (
  method: Method = 'get',
  url: string,
  data: any = {},
  baseURL: string = '/api',
  responseType: ResponseType = 'json',
): Promise<any> => {
  return new Promise((resolve, reject) => {
    let option: AxiosRequestConfig = {
      method,
      url,
      params: method === 'get' ? tools.delEmptyString(data) : {},
      data: method === 'post' ? tools.delEmptyString(data) : {},
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      transformRequest: [
        function (data: any) {
          let ret = '';
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
          }
          ret = ret.substring(0, ret.lastIndexOf('&'));
          return ret;
        },
      ],
      baseURL,
      responseType,
    };
    axios
      .request(option)
      .then(
        (res) => {
          if (res.data.code === requestCode.successCode) {
            resolve(res.data);
          } else if (res.data.code === requestCode.noLoginTokenCode) {
            // push('/login');
          } else {
            toast(requestCode.failedCode, res.data.mes);
            resolve(res.data);
          }
        },
        (error) => {
          error.response && error.response.data
            ? toast(requestCode.failedCode, error.response.data.mes)
            : toast(requestCode.failedCode, '请求出错，请重试');
        },
      )
      .catch((err) => {
        toast(requestCode.serverErrorCode, '服务异常');
      });
  });
};
