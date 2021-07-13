import axios from 'axios'
import baseConfig from '@/config/baseConfig.js'
import store from 'store'

const {BASE_URL,TIME_OUT,TOKEN_NAME} = baseConfig


const service = axios.create({
    baseURL:BASE_URL,
    timeout: TIME_OUT,
  });

  //request
  service.interceptors.request.use(function (config) {
    let token = store.get(TOKEN_NAME)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
  }, function (error) {

    return Promise.reject(error);
  });

// response
service.interceptors.response.use(function (response) {
  let result = response?.data
    return result;
  }, function (error) {

    return Promise.reject(error);
  });

  export default service