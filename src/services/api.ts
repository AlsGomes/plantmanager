import axios from 'axios';

const api = axios.create({
    baseURL: 'http://170.81.160.108:3333'
});

export default api;