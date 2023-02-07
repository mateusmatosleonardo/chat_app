import { ReactNode } from "react";

export interface IUser {
  username: string;
  email: string;
  password: string;
}

export interface IAuthContext {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  handleSignUp: (user: IUser) => Promise<void>;
}

export interface AuthContextProps {
  children: ReactNode;
}
