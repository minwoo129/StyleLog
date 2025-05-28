import {API_INFO} from '@config';
import axios, {AxiosRequestConfig} from 'axios';

axios.defaults.baseURL = API_INFO.API_URL;

export const http = {
  get: async <Response = unknown>(url: string, config?: AxiosRequestConfig) => {
    return axios.get<Response>(url, config).then(res => res.data);
  },
  post: async <Request = any, Response = unknown>({
    url,
    data,
    config,
  }: {
    url: string;
    data?: Request;
    config?: Omit<AxiosRequestConfig, 'data'>;
  }) => {
    return axios.post<Response>(url, data, config).then(res => res.data);
  },
};
