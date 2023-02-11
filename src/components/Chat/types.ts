import { ImageSourcePropType } from "react-native";

export interface IChat {
  id: string;
  status: "on" | "off";
  participant: string;
  lastMessage: string;
  lastMessageTime: string;
  picture?: ImageSourcePropType;
  colors?: string;
}

export interface IMessage {
  id: string;
  body: string;
  senderId: number;
  receiverId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IGetAllChats {
  id: string;
  messagesCount: number;
  participants: { participant: { id: number; username: string } }[];
  messages: IMessage[];
}
