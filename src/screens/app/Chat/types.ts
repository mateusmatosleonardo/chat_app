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
