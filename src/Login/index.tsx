import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import produce from 'immer';

import { LoginState } from './types';

const App: React.FC = () => {
  const dispatch = useDispatch()

  const login = useSelector((state: LoginState) => state.login);

  const onChangeUsername = (e: React.FormEvent<HTMLInputElement>) => dispatch({ type: 'change-username', username: e.currentTarget.value })
  const onChangePassword = (e: React.FormEvent<HTMLInputElement>) => dispatch({ type: 'change-password', password: e.currentTarget.value })

  return (
    <div className="container mx-auto h-full pt-20">
      <div className="w-full max-w-xs m-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              {login.username}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={onChangeUsername} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              {login.password}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={onChangePassword}/>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2019 Robati All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
