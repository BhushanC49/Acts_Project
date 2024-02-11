import axios from 'axios'
import { StorageService } from './storage.service'

const httpClient = (token = null) => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_API_SERVER_BASE_URL,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  // Create instance
  const axiosInstance = axios.create(defaultOptions)
  // Set the AUTH token for any request
  axiosInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
  })

  return {
    get: (url, options = {}) =>
      axiosInstance.get(url, {
        ...defaultOptions,
        ...options,
      }),
    post: (url, data, options = {}) =>
      axiosInstance.post(url, data, {
        ...defaultOptions,
        ...options,
      }),
    put: (url, data, options = {}) =>
      axiosInstance.put(url, data, {
        ...defaultOptions,
        ...options,
      }),
    delete: (url, options = {}) =>
      axiosInstance.delete(url, {
        ...defaultOptions,
        ...options,
      }),
  }
}

const HttpClientService = httpClient(StorageService.get('token'))
export default HttpClientService
