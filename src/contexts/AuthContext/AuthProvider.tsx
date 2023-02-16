import { useState } from "react";
import { AuthContext } from "./AuthContext"
import { AuthContextProps } from "./types"

export const AuthContextProvider = ({ children }: AuthContextProps) => {

  const [loading, setLoading] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}