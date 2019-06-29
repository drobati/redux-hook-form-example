import produce from 'immer'

import { LoginState, LoginAction } from './types';

export const loginState: LoginState = {
    loading: {
      login: false,
    },
    login: {
      username: '',
      password: ''
    },
  }

// This is stupid - TypeScript is forcing me to write this like this because
// .password is not matching against Type LoginAction = | ChangePassword.
// Need to learn more about TS. Maybe I'm missing something.
const login = (state = loginState, action: LoginAction) => {
  switch (action.type) {
    case "change-username":
      return produce(state, (draft: any) => {
        draft.login.username = action.username
      });
    case "change-password":
      return produce(state, (draft: any) => {
        draft.login.password = action.password;
      });
    default:
      return produce(state, (draft: any) =>
        draft
      )
  }
};

export default login;