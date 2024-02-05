// lib/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers:{
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  }
});


export default api;
