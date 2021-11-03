import axios from 'axios';

const apiIp = axios.create({
    baseURL: 'http://ip-api.com/json/',
});

export { apiIp };
