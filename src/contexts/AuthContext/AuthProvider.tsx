import { useState } from "react";
import { api } from "../../service/api";
import { AuthContext } from "./AuthContext"
import { AuthContextProps, IUser } from "./types"

export const AuthContextProvider = ({ children }: AuthContextProps) => {

  const [loading, setLoading] = useState(false);

  async function handleSignUp(user: IUser) {
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
        handleSignUp
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}