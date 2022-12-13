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
      .post(`follow/${userId}`);
  },
  unfollow(userId: number) {
    return instance
      .delete(`follow/${userId}`);
  },
  getProfile(userId: string) {
    console.warn('Obsolete method. Please use profileAPI object');
    return profileAPI.getProfile(userId);
  }
};

export const authAPI = {
  me() {
    return instance
      .get(`auth/me`);
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return instance
      .post(`auth/login`, {email, password, rememberMe});
  },
  logout() {
    return instance
      .delete(`auth/login`);
  }
};

export const profileAPI = {
  getProfile(userId: string) {
    return instance
      .get(`profile/${userId}`);
  },
  getStatus(userId: string) {
    return instance
      .get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance
      .put(`profile/status`, {status});
  }
};