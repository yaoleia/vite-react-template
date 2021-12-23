import UserStore from './user';
import { timerStore } from './timer';

export const store = {
  userStore: new UserStore(),
  timerStore,
};
