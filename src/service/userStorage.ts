import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getToken() {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    return JSON.parse(token).token;
  }
  return "";
}
