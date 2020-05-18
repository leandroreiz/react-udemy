import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://react-my-burger-cc126.firebaseio.com/'
});

export default axiosInstance;
