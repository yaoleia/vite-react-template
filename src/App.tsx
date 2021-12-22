import React, { FC, useEffect } from 'react';
import SvgComponent from './components/svgIcon';
import styles from './app.module.scss';
import { environmentVariable } from './utils';
import { Button } from 'antd';

const App: FC = () => {
  useEffect(() => {
    console.log(`environmentVariable()`, environmentVariable());
  }, []);

  return (
    <div className={styles.App}>
      <h2>Welcome to vite-react-template</h2>
      <SvgComponent iconClass="logon" fontSize="30px" />
      <Button type="primary">Primary Button</Button>
    </div>
  );
};

export default App;
