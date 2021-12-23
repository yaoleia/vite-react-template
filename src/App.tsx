import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '@/hooks';
import { Button } from 'antd';
import SvgComponent from './components/svgIcon';
import styles from './app.module.scss';

const App: FC = observer(() => {
  const { timerStore, userStore } = useStore();

  useEffect(() => {
    userStore.getUserInfo();
  }, []);

  useEffect(() => {
    console.log(timerStore.secondsPassed);
  }, [timerStore.secondsPassed]);

  const { userInfo } = userStore;

  return (
    <div className={styles.App}>
      <h2>Welcome to vite-react-template</h2>
      <SvgComponent iconClass="logon" fontSize="30px" />
      <Button type="primary">Primary Button</Button>
      <div>{userInfo.name}</div>
      <div>{timerStore.secondsPassed}</div>
    </div>
  );
});

export default App;
