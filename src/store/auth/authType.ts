import { ApiFailurePayload, ApiSuccessPayload } from '../generalType';

export enum ChangePasswordPageEnum {
  forget = 'forget',
  verify = 'verify',
  reset = 'reset',
  login = 'login'
}

export interface AuthStateObject {
  isLoggedIn: boolean;
  token: string;
  isLoading: boolean;
  message: string;
  error: string;
  user: {
    id: string;
    username: string;
    email: string;
    role: string;
  };
  changePasswordPage: ChangePasswordPageEnum;
}

export interface loginUserPayload {
  email: string;
  password: string;
}

export interface changePasswordRequestPayload {
  payload: {
    email?: string;
    password_reset_token?: string;
    password?: string;
    confirm_password?: string;
    id?: string;
  };
  type: ChangePasswordPageEnum;
}

export interface ChangePasswordSuccessPayload extends ApiSuccessPayload {
  type: ChangePasswordPageEnum;
}
export interface ChangePasswordFailurePayload extends ApiFailurePayload {
  type: ChangePasswordPageEnum;
}
