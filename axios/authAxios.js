import axios from 'axios';
import { secureStorage } from '../utils/securesStore';
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/', 
  withCredentials:true,
  withXSRFToken:true
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authCredentials = handleGetAuthCredentials();

    const apiKey = authCredentials.apiKey;
    const token = authCredentials.token;

    if (!config.headers) {
      config.headers = {};
    }

    if (apiKey) {
      config.headers["API-KEY"] = apiKey;
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

const handleGetAuthCredentials = async () => {
    const apiKey = await secureStorage.getItem("API-KEY");
    const authToken = await secureStorage.getItem("AUTH-TOKEN");
    return {
         apiKey,
         authToken
    }
}