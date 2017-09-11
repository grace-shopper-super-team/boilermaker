import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <p>Hello, joeble</p>
    {/* rest of your app goes here! */}
  </Provider>,
  document.getElementById('app')
);
