import axios, { AxiosInstance } from 'axios';
import qs from 'qs'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  paramsSerializer: (params) => {
    // Sử dụng `qs.stringify` với `encode: false` để giữ nguyên chuỗi mà không bị decode
    return qs.stringify(params, { encode: false });
  },
})

const key = process.env.NEXT_PUBLIC_OPEN_API_KEY


instance.interceptors.request.use(
  (config) => {
    
    config.headers.Authorization = `Bearer ` + key;
    
    return config;
  },
  (error) => Promise.reject(error)
);// import axios from 'axios';


export default instance