import React, { FC, useEffect } from 'react';
import SvgComponent from './components/svgIcon';
import styles from './app.module.scss';
import { environmentVariable } from './utils';

const App: FC = () => {
  useEffect(() => {
    console.log(`environmentVariable()`, environmentVariable());
  }, []);

  return (
    <div className={styles.App}>
      <h2>Welcome to vite-react-template</h2>
      <SvgComponent iconClass="logon" fontSize="30px" />
    </div>
  );
};

export default App;
