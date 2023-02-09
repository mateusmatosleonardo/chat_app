import { useState } from "react";
import { api } from "../../service/api";
import { AuthContext } from "./AuthContext"
import { AuthContextProps, IUser, SignInForm } from "./types"

export const AuthContextProvider = ({ children }: AuthContextProps) => {

  const [loading, setLoading] = useState(false);

  async function handleSignIn(user: SignInForm): Promise<any> {
    setLoading(true);
    try {
      await api.post('/auth/login', user);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  async function handleSignUp(user: IUser): Promise<any> {
    setLoading(true);
    try {
      await api.post('/auth/register', user);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        handleSignIn,
        handleSignUp
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}