import axios from "axios";
import { getToken } from "../Service";
import { AppConfig } from "../../apiConfig/apiConfig";
const axiosClient = axios.create();


const AUTH_HEADERS = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json",
      token: `Bearer ${getToken()}`,
    }
  }
}

axiosClient.interceptors.response.use(
  (response) => response ,
  (error) =>  error
);

export function getRequest(URL:string) {
  console.log('getRequest',URL);
  
  return axiosClient.get(`${AppConfig?.baseURL}${URL}`, AUTH_HEADERS()).then((response) => response);
}

export function postRequest(URL:string, payload:{}) {
  return axiosClient
    .post(`${AppConfig?.baseURL}${URL}`, payload, AUTH_HEADERS())
    .then((response) => response);
}

export function putRequest(URL:string, payload:{})  {
  return axiosClient
    .put(`${AppConfig?.baseURL}${URL}`, payload, AUTH_HEADERS())
    .then((response) => response);
}

export function deleteRequest(URL:string, payload:{})  {
  return axiosClient.delete(`${AppConfig?.baseURL}${URL}`, AUTH_HEADERS()).then((response) => response);
}

export default axiosClient;
