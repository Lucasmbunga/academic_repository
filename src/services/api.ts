import axios, { AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from "axios";
import type { ResponseProps } from "../types/types";

const baseUrl='http://localhost:8080/api/v1';
 const api:AxiosInstance=axios.create({
    baseURL:baseUrl
})

api.interceptors.request.use((config:InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }

  return config;
})

api.interceptors.response.use(response=>response,(error:AxiosError<ResponseProps<null>>)=>{

  if(error.response && error.response?.data){
    return Promise.reject(error.response.data);
  }
  return Promise.reject({
    sucess: false,
    data: null,
    errors: [],
    errorCode: 500,
    message:'Servidor indisponível ou falha na conexão.',
    timestamp:new Date(Date.now()),
    path: ""
  } as ResponseProps<null>)
})
export default api;