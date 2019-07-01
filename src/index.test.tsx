import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Login from './Pages/Login';

const middlewares = [];
const mockStore = configureStore(middlewares);

it('renders without crashing', () => {
  const initialState = {};
  const store = mockStore(initialState);
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><Login /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
