import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './app';
import Store from '@/mobxStore/store.js';

const store = new Store();

ReactDOM.render(
    <Provider globalState={store}>
        <App name="componentA" />
    </Provider>, // 上文的 element，即虚拟 dom
    // <App name="componentA" />, // 上文的 element，即虚拟 dom
    document.getElementById('root')
);
