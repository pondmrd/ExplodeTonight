import axios from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3030/'
});

export default { 
    API: axiosInstance 
};