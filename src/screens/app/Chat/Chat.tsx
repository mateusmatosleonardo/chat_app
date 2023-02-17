import React, { useContext, useEffect, useRef, useState } from 'react';
import { FlatList, ListRenderItemInfo, Platform } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Loading } from '../../../components/Loading/Loading';
import { IGetAllChats } from '../../../components/Chat/types';
import { IUser, IMessage, RootStackParamsList } from '../../../utils/globalTypes';
import { SocketContext } from '../../../contexts/SocketContext/SocketContext';
import Icon from '@expo/vector-icons/FontAwesome';
import Person from '../../../assets/person.png';
import { useFetch } from '../../../hooks/useFetch';
import * as S from './styles';

export function Chat() {

  const [refresh, setRefresh] = useState<any>(null);
  const [sending, setSending] = useState(false);
  const [inputHeight, setInputHeight] = useState(20);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<any>(null);

  const flatlistRef = useRef<FlatList<IMessage>>(null);

  const route: RouteProp<RootStackParamsList, 'Chat'> = useRoute();
  const params = route.params;

  const { data: user } = useFetch<IUser>("/users/me");
  const { data: chatData } = useFetch<IGetAllChats>(`/chats/${params.id}`);

  const { socket } = useContext(SocketContext);

  function senderIsMe(user: IUser | null, message: IMessage) {
    return message.senderId === user?.id;
  }

  function renderItem({ item }: ListRenderItemInfo<IMessage>) {
    return (
      <>
        {senderIsMe(user, item) ?
          <S.ContainerGeneral>
            <S.WrapperInvisible />
            <S.WrapperMessage
              justifyContent={senderIsMe(user, item) ? 'flex-end' : 'flex-start'}
              alignItems=''
              backgroundMessage={senderIsMe(user, item) ? '#ffc72d' : '#dcdcdc'}
            >
              <S.Message
                participant={senderIsMe(user, item) ? 'right' : 'left'}
                justifyContent=''
                alignItems={senderIsMe(user, item) ? 'left' : 'right'}
              >
                {item.body}
              </S.Message>
            </S.WrapperMessage>
          </S.ContainerGeneral> :
          <S.ContainerGeneral>
            <S.WrapperMessage
              justifyContent={senderIsMe(user, item) ? 'flex-end' : 'flex-start'}
              alignItems=''
              backgroundMessage={senderIsMe(user, item) ? '#ffc72d' : '#dcdcdc'}
            >
              <S.Message
                participant={senderIsMe(user, item) ? 'left' : 'left'}
                justifyContent=''
                alignItems={senderIsMe(user, item) ? 'left' : 'left'}
              >
                {item.body}
              </S.Message>
            </S.WrapperMessage>
            <S.WrapperInvisible />
          </S.ContainerGeneral>}
      </>
    )
  }

  async function handleSendMessage(message: string) {
    try {
      if (message.length <= 0) {
        setSending(false);
        return
      }
      setMessage('');
      socket?.emit('createMessage', { chatId: chat?.id, message: message });
      setChat((current: any) => ({
        ...current, messages: [...current.messages, {
          body: message,
          createdAt: new Date(),
          senderId: user?.id,
          receivedId: chat.participants.find(({ participant }: any) => participant.id !== user!.id)?.participant.id
        }]
      }));
      setSending(true);
      setTimeout(() => {
        flatlistRef.current?.scrollToEnd();
        setSending(false);
      }, 350);
    } catch (e) {
      setSending(false);
      console.log(e);
    }
  }

  useEffect(() => {
    if (!socket) return
    socket.connect();
    socket.on('connect', () => {
      socket.emit('joinChat', { chatId: params!.id });
    })
    socket.removeAllListeners("messageCreated");
    socket.on('messageCreated', (createdMessage: any) => {
      console.log(createdMessage);
      if (createdMessage.senderId === user?.id) {
        return
      }
      setChat((current: any) => (
        { ...current, messages: [...current.messages, createdMessage] }
      ));
      setTimeout(() => {
        setRefresh((current: any) => !current);
        flatlistRef.current?.scrollToEnd();
      }, 300);
    });
    return () => {
      socket.off("messageCreated");
    };
  }, [chat, socket]);

  useEffect(() => {
    if (chatData) {
      setChat(chatData);
    }
  }, [chatData, setChat]);

  return (
    <React.Fragment>
      {user && chat ?
        <S.Container>
          <S.Header>
            <S.WrapperPicture>
              <S.Picture
                source={Person}
                style={{
                  resizeMode: 'center'
                }}
              />
            </S.WrapperPicture>
            <S.Wrapper>
              <S.Username>{params!.participant}</S.Username>
            </S.Wrapper>
          </S.Header>
          <FlatList
            ref={flatlistRef}
            style={{ flex: 1, backgroundColor: '#e8e8e8' }}
            data={chat!.messages}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            initialNumToRender={50}
            onEndReached={() => console.log('Chegou ao final da lista')}
            onEndReachedThreshold={0.2}
          />
          <S.KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
          >
            <S.WrapperInput
              style={{ borderWidth: 1, borderColor: '#dedede' }}
            >
              <S.Input
                value={message}
                onChangeText={setMessage}
                multiline={true}
                onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height + 12)}
                style={{ height: inputHeight }}
              />
            </S.WrapperInput>
            {sending ?
              (<S.LoadingContainer style={{ padding: 0 }}>
                <Loading />
              </S.LoadingContainer>) :
              <S.Touch onPress={() => handleSendMessage(message)}>
                <Icon name='send' color='#ffc72d' size={24} />
              </S.Touch>}

          </S.KeyboardAvoidingView>
        </S.Container>
        :
        <S.WrapperLoading>
          <Loading />
        </S.WrapperLoading>}
    </React.Fragment>
  );
}