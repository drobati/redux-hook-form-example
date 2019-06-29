import { ChangeUsername, ChangePassword } from './types';

export const changeUsername = (username: string): ChangeUsername => ({
  type: 'change-username',
  username
});

export const changePassword = (password: string): ChangePassword => ({
  type: 'change-password',
  password
});