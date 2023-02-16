import React, { useEffect, useState } from "react";
import { SOCKET_URL } from "@env";
import { io } from "socket.io-client";
import { SocketContext } from "./SocketContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
;

export const SocketContextProvider = ({ children }: any) => {

  const [socket, setSocket] = useState<any>(null);

  async function getToken() {
    const token = await AsyncStorage.getItem("token");
    console.log(token, 'token socket')
    if (token) {
      return JSON.parse(token).token;
    }
    return "";
  }

  useEffect(() => {
    getToken().then((token: string) => {
      const socketInstance = io(SOCKET_URL, {
        autoConnect: false,
        extraHeaders: { Authorization: `${token}` }
      });
      setSocket(socketInstance);
    });
    console.log('useEffect');
  }, [setSocket]);

  return (
    <SocketContext.Provider
      value={{ socket }}
    >
      {children}
    </SocketContext.Provider>
  );
}