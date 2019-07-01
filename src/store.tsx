import { createStore, combineReducers } from 'redux';
import login from './Pages/Login/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({ login });

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducer, composeEnhancers()
);

export default store;