import {default as axios} from 'axios';
import {API_KEY} from '../secret-variables';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': API_KEY
  }
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`,
        {withCredentials: true})
      .then(response => response.data);
  },
  follow(userId: number) {
    return instance
      .post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
  },
  unfollow(userId: number) {
    return instance
      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
  }
};
