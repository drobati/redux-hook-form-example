import { createStore, combineReducers, compose } from 'redux';
import login from './Login/reducers';
import { LoginState } from './Login/types';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({ login });

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducer, composeEnhancers()
);

export default store;