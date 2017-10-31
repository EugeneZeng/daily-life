import axios from 'axios';

const path = '/api';

export default {
    getUserList(params) {
        return axios({ method: 'get', url: `${path}/user`, params: params });
    },
    updateUser(params) {
        return axios({ method: 'put', url: `${path}/user`, data: params });
    },
    addUser(params) {
        return axios({ method: 'post', url: `${path}/user`, data: params });
    }
};