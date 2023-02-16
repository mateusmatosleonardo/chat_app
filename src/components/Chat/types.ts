export interface IChat {
  id: string;
  participant: string;
  lastMessage: string;
  lastMessageTime: string;
  colors?: string;
  onPress: () => void;
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
