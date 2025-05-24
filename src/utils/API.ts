import {http} from './http';

export const testAPI = (id: number) => {
  return http.get<{id: number; name: string}>(`/test/${id}`);
};
