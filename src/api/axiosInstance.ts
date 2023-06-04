import { useEffect } from 'react';
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { apiErrorHandler } from '@/utils/helpers/ErrorHandlers';
import { BaseApiUrl } from '@/utils/constants/endpoints.constant';
import { errorResponses } from '@/utils/constants/responseMessages';
import { pushNotification } from '@/utils/helpers/pushNotification';
import store from '@/store/store';

export const isBrowser = () => {
  return typeof window !== 'undefined';
};

export const getAuthToken = () => {
  const savedToken = isBrowser() ? store.getState().auth.token : null;
  return savedToken ? `Bearer ${savedToken}` : '';
};

export const axiosInstance = axios.create({
  baseURL: BaseApiUrl,
  headers: { 'Content-Type': 'application/json' }
  //withCredentials: true
});

const { error404, error500 } = errorResponses;

axiosInstance.interceptors.request.use(
  (request: InternalAxiosRequestConfig): InternalAxiosRequestConfig<any> => {
    request.headers.Authorization = getAuthToken();
    return request;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

interface AxiosElement {
  children: JSX.Element;
  [otherProps: string]: unknown;
}

const AxiosInterceptor = ({ children }: AxiosElement) => {
  useEffect(() => {
    const resInterceptor = (response: AxiosResponse) => {
      return response;
    };

    const errMsg = error500;
    const errInterceptor = (error: AxiosError) => {
      switch (error.response && error.response.status) {
        case 404:
          error.message = error404;
          if (error?.response?.data) {
            error.response.data = { ...error.response.data, message: error404 };
          }
          pushNotification({ type: 'error', message: error404 });
          break;
        case 400:
        case 403:
        case 408:
        case 422:
        case 501:
        case 502:
        case 500:
        case 504:
        case 505:
        case 507:
        case 508:
          pushNotification({ type: 'error', message: apiErrorHandler(error) || errMsg });
          break;
        default:
          pushNotification({ type: 'error', message: apiErrorHandler(error) || errMsg });
          break;
      }
      return Promise.reject(error);
    };

    const interceptor = axiosInstance.interceptors.response.use(resInterceptor, errInterceptor);

    return () => axiosInstance.interceptors.response.eject(interceptor);
  }, []);
  return children;
};

export { AxiosInterceptor };
