import { SignInForm, SignUpForm, SignUpResponse } from "../utils/globalTypes";
import { api } from "../service/api";

export const useAuth = () => ({
  handleSignIn: async (user: SignInForm): Promise<{ token: string }> => {
    const response = await api.post("/auth/login", user);
    return response.data;
  },
  handleSignUp: async (user: SignUpForm): Promise<SignUpResponse | null> => {
    const response = await api.post("/auth/register", user);
    return response.data;
  },
});
