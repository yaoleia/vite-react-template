import { makeAutoObservable, action } from 'mobx';
import api from '@/api';

export default class UserStore {
  userInfo = {};

  constructor() {
    makeAutoObservable(this);
  }

  async getUserInfo() {
    const resp = await api.getUserInfo();
    this.userInfo = resp.data?.id ? resp.data : { name: 'guest', id: '123456' };
  }
}
