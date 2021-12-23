import 'virtual:svg-icons-register';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'mobx-react';
import { store } from '@/store';
import App from './App';
import 'antd/dist/antd.less';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider {...store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
