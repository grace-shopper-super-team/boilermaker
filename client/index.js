import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <p>안녕하세요 에릭짱</p>
    {/* rest of your app goes here! */}
  </Provider>,
  document.getElementById('app')
);
