import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './redux';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;
