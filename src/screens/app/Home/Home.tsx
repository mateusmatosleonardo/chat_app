import React, { useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Search } from '../../../components/Search/Search';
import { Chat } from '../../../components/Chat/Chat';
import { Loading } from '../../../components/Loading/Loading';
import { IGetAllChats } from '../../../components/Chat/types';
import { HomeScreenProp, IUser } from '../../../utils/globalTypes';
import { useFetch } from '../../../hooks/useFetch';
import Edit from '@expo/vector-icons/Feather';
import Icon from '@expo/vector-icons/Ionicons';
import * as S from './styles';

export function Home() {

  const [search, setSearch] = useState('');

  const navigation = useNavigation<HomeScreenProp>();

  const { data: user } = useFetch<IUser>("/users/me");
  const { data: chats, isFetching } = useFetch<IGetAllChats[]>("/chats");

  function renderItem({ item }: ListRenderItemInfo<IGetAllChats>) {
    return <Chat
      id={item.id}
      participant={item.participants.find(({ participant }) => participant.id !== user!.id)?.participant.username || ''}
      lastMessage={item.messages[0].body}
      lastMessageTime={item.messages[0].createdAt.substring(11, 16)}
      onPress={() => navigation.navigate('Chat',
        { id: item.id, participant: item.participants.find(({ participant }) => participant.id !== user!.id)?.participant.username || '' })}
    />
  }

  function ListEmptyComponent() {
    return (
      <S.EmptyList>
        <S.EmptyListMessage>Inicie uma conversa</S.EmptyListMessage>
        <Icon
          name='chatbubble-ellipses-outline'
          color='#010101'
          size={16}
          style={{ marginLeft: 10 }}
        />
      </S.EmptyList>
    )
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Conversas</S.Title>
        <S.Pressable>
          <Edit name='edit' size={22} color="#010101" />
        </S.Pressable>
      </S.Header>
      <S.WrapperSearch>
        <Search
          value={search}
          onChangeText={setSearch}
          placeholder='Pesquisar conversas'
        />
      </S.WrapperSearch>
      {user && !isFetching ? <FlatList
        data={chats}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
      /> : <Loading />}
    </S.Container>
  );
}