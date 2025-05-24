import {API_INFO} from '@config';
import axios from 'axios';

axios.defaults.baseURL = API_INFO.API_URL;

export const http = {
  get: async <Response = unknown>(url: string) => {
    return axios.get<Response>(url).then(res => res.data);
  },
  post: async <Request = any, Response = unknown>(
    url: string,
    data?: Request,
  ) => {
    return axios.post<Response>(url, data).then(res => res.data);
  },
};
