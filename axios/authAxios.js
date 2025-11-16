import axios from 'axios';
import { secureStorage } from '../utils/securesStore';

const axiosInstance = axios.create({
  baseURL: 'http://172.20.10.4:8000/api/v1/', 
  withCredentials: true,
  withXSRFToken: true,
});

// 💡 Ensure this is above interceptor
const handleGetAuthCredentials = async () => {
  const apiKey = await secureStorage.getItem("API-KEY");
  const authToken = await secureStorage.getItem("AUTH-TOKEN");

  return {
    apiKey,
    authToken
  };
};

axiosInstance.interceptors.request.use(
  async (config) => {
    const { apiKey, authToken } = await handleGetAuthCredentials();

    if (!config.headers) {
      config.headers = {};
    }

    if (apiKey) {
      config.headers["API-KEY"] = apiKey;
    }

    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }

    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
