import axios from 'axios';
const BASE_URL = 'https://todo-backend-production-ae12.up.railway.app';

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  // withCredentials: true,
});
