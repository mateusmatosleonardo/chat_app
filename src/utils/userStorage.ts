import AsyncStorage from "@react-native-async-storage/async-storage";

export interface UserSessionProps {
  accessToken: string;
}

export const retrieveUserSession = async (): Promise<UserSessionProps> => {
  try {
    const session = await AsyncStorage.getItem("token");

    if (!session) {
      throw new Error("Session is undefined on storage");
    }

    const parsedSession = JSON.parse(session);

    if (!parsedSession) {
      throw new Error("Parse error on session");
    }

    return parsedSession;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
