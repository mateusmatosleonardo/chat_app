import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { AuthContext } from "./AuthContext"
import { AuthContextProps, IUser } from "./types"

export const AuthContextProvider = ({ children }: AuthContextProps) => {

  const [loading, setLoading] = useState(false);

  const auth = useAuth();

  async function handleSignUp(user: IUser): Promise<any> {
    setLoading(true);
    try {
      const data = await auth.handleSignUp(user);
      setLoading(false);
      return data;
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