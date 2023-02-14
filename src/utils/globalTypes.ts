import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamsList = {
  Home: undefined;
  Chat: { id: string; participant: string };
  SignIn: undefined;
  SignUp: undefined;
};

export type SignInScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  "SignIn"
>;

export type SingUpScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  "SignUp"
>;

export type HomeScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  "Home"
>;

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface SignInForm {
  email: "string";
  password: "string";
}

export interface SignUpForm {
  email: string;
  username: string;
  password: string;
}

export interface SignUpResponse {
  id: number;
  name: string;
  email: string;
  token: string;
}

export interface IMessage {
  id: string;
  body: string;
  senderId: number;
  receiverId: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetChatById {
  id: string;
  messagesCount: number;
  participants: { participant: { id: number; username: string } }[];
  messages: IMessage[];
}
