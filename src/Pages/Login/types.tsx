import { Action } from 'redux';

interface Login {
  username: string;
  password: string;
}

export interface LoginLoading {
  login: boolean;
}

export interface LoginState {
  loading: LoginLoading;
  login: Login;
}

export interface ChangeUsername extends Action {
  type: 'change-username',
  username: string
}

export interface ChangePassword extends Action {
  type: 'change-password',
  password: string
}

export type LoginAction =
  | ChangeUsername
  | ChangePassword;