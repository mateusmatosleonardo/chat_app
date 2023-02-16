import { ReactNode } from "react";

export interface IAuthContext {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export interface AuthContextProps {
  children: ReactNode;
}
