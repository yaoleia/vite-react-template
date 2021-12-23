import { observable } from 'mobx';

export const timerStore = observable({
  secondsPassed: 0,
});

setInterval(() => {
  timerStore.secondsPassed++;
}, 1000);
