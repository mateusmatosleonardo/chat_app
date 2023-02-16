import React, { useState } from 'react';

import { FlatList, ListRenderItemInfo } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import { Search } from '../../../components/Search/Search';
import { Chat } from '../../../components/Chat/Chat';
import { Loading } from '../../../components/Loading/Loading';

import { IGetAllChats } from '../../../components/Chat/types';
import { HomeScreenProp } from '../../../utils/globalTypes';
import { IUser } from '../../../utils/globalTypes';

import Edit from '@expo/vector-icons/Feather';
import Icon from '@expo/vector-icons/Ionicons';

import { useFetch } from '../../../hooks/useFetch';

let colors: string[] = ['#fcc09c', '#c0e4fe', '#ffecac', '#9c69bf'];

let randomColors = colors[Math.floor(Math.random() * colors.length)];

export function Home() {

  const [search, setSearch] = useState('');

  const navigation = useNavigation<HomeScreenProp>();

  const { data: user } = useFetch<IUser>("/users/me");
  const { data: chats, isFetching } = useFetch<IGetAllChats[]>("/chats");

  // ! integrar essa feature de pesquisa
  // const filteredChat = search.length > 0
  // ? chats?.filter(chat => chat.participants.map(({ participant }) => participant.username.includes(search)))
  //   : [];

  function renderItem({ item }: ListRenderItemInfo<IGetAllChats>) {
    return <Chat
      id={item.id}
      participant={item.participants.find(({ participant }) => participant.id !== user!.id)?.participant.username || ''}
      lastMessage={item.messages[0].body}
      lastMessageTime={item.messages[0].createdAt.substring(11, 16)}
      colors={randomColors}
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