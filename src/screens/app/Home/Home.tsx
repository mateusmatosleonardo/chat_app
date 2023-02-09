import React, { useState } from 'react';
import * as S from './styles';

import Edit from '@expo/vector-icons/Feather';
import { Search } from '../../../components/Search/Search';
import { Chat } from '../../../components/Chat/Chat';
import { IChat } from '../../../components/Chat/types';

import { FlatList, ListRenderItemInfo } from 'react-native';

export function Home() {

  const [search, setSearch] = useState('');

  const [chats, setChats] = useState<IChat[]>([
    {
      id: '19de3ed4-12d1-4600-be92-418994e70118',
      username: 'Caio',
      lastMessage: 'Hi, my name is Caio',
      lastMessageTime: '12:35',
      picture: require('../../../assets/person.png'),
      status: 'on'
    },
    {
      id: '19de3ed4-12d1-4600-be92-418994e70119',
      username: 'Lucas',
      lastMessage: 'Hi, my name is Caio',
      lastMessageTime: '12:35',
      picture: require('../../../assets/person.png'),
      status: 'off'
    },
    {
      id: '19de3ed4-12d1-4600-be92-418994e70116',
      username: 'Roberta',
      lastMessage: 'Hi, my name is Caio',
      lastMessageTime: '12:35',
      picture: require('../../../assets/person.png'),
      status: 'on'
    },
    {
      id: '19de3ed4-12d1-4600-be92-418994e70114',
      username: 'Thaís',
      lastMessage: 'Hi, my name is Caio',
      lastMessageTime: '12:35',
      picture: require('../../../assets/person.png'),
      status: 'on'
    },
  ]);

  const filteredChat = search.length > 0
    ? chats.filter(chat => chat.username.includes(search))
    : [];

  function renderItem({ item }: ListRenderItemInfo<IChat>) {
    return <Chat {...item} />
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Chats</S.Title>
        <S.Pressable>
          <Edit name='edit' size={22} color="#010101" />
        </S.Pressable>
      </S.Header>

      <S.WrapperSearch>
        <Search
          value={search}
          onChangeText={setSearch}
          placeholder='Pesquisar conversar'
        />
      </S.WrapperSearch>

      {search.length > 0 ? <FlatList
        data={filteredChat}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      /> : <FlatList
        data={chats}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />}

    </S.Container>
  );
}