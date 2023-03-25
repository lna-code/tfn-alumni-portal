export interface AuthStateObject {
  isLoggedIn: boolean;
  user: {
    name: string;
    role: string;
    email: string;
  };
  token: string;
}

export interface loginUserPayload {
  email: string;
  password: string;
}
