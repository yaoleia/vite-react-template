import { makeAutoObservable } from 'mobx';
import api from '@/api';

export default class UserStore {
  userInfo = {};

  constructor() {
    makeAutoObservable(this);
  }

  async getUserInfo() {
    const resp = await api.getUserInfo();
    this.setUser(resp.data?.id ? resp.data : { name: 'guest', id: '123456' });
  }

  setUser(user: object) {
    this.userInfo = user;
  }
}
