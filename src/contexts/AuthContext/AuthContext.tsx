import { createContext } from "react";

import { IAuthContext } from "./types";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);