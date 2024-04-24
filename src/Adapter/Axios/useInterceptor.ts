import {axiosInstance} from './axiosInstance';
import {tmdbAccessToken} from '../../Utils/constants';

export const useInterceptor = (): void => {
  /*Request interceptor */

  axiosInstance.interceptors.request.use(
    config => {
      if (tmdbAccessToken) {
        config.headers.Authorization = `Bearer ${tmdbAccessToken}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  /*Response Interceptor */

  axiosInstance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      // const originalConfig = error.config;

      // if (
      //   error.response &&
      //   error.response.status === 401 &&
      //   !originalConfig._retry
      // ) {
      //   console.log('401')
      //   originalConfig._retry = true;

      //   return axiosInstance(originalConfig);
      // }

      console.log(error.response, ':::::::');

      return Promise.reject(error);
    },
  );
};
