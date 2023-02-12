import { ReactNode } from "react";

export interface IUser {
  email: string;
  id: number;
  name: string;
}

export interface SignInForm {
  username: string;
  password: string;
}

export interface IAuthContext {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  // handleSignIn: (user: SignInForm) => Promise<{ token: string }>;
  handleSignUp: (user: IUser) => Promise<any>;
}

export interface AuthContextProps {
  children: ReactNode;
}
