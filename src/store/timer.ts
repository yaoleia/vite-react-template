import { makeAutoObservable } from 'mobx';

class TimerStore {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed++;
  }
}

export const timerStore = new TimerStore();

setInterval(() => {
  timerStore.increaseTimer();
}, 1000);
