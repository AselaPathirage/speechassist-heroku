import axios from 'axios';
// const BASE_URL = 'http://localhost:8080';
const BASE_URL = `${process.env.REACT_APP_BASEURL}`

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});