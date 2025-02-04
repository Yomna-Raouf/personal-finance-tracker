import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'

const { VITE_API_URL } = import.meta.env

const axiosParams = {
  baseURL: VITE_API_URL,
}

const axiosInstance = axios.create(axiosParams)

axiosInstance.defaults.headers.Accept = 'application/json'

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) => axios.get<T>(url, config),
    delete: <T>(url: string, config: AxiosRequestConfig = {}) => axios.delete<T>(url, config),
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.patch<T>(url, body, config),
    put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.put<T>(url, body, config),
  }
}

export default api(axiosInstance)
