import axios from "axios";

axios.defaults.baseURL = 'https://trihub-api-0d6dd53f4e6b.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();
