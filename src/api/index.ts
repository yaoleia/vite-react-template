import request from '@/http';

export default {
  ceranaLogin(params = {}) {
    return request.post('/cerana-api/api/v1/accounts/signin', params);
  },
  getUserInfo() {
    return request.get('/cerana-api/api/v1/accounts/profile');
  },
  ceranaSignUp(identifier: string, password: string, email: string) {
    return request.post('/cerana-api/api/v1/accounts/signup', { identifier, password, email });
  },
};
