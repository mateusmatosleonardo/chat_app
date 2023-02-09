import React from 'react';
import { TextInput } from 'react-native';
import { ISearch } from './types';
import * as S from './styles';
import SearchIcon from '@expo/vector-icons/AntDesign';

export function Search({ value, onChangeText, ...rest }: ISearch) {
  return (
    <S.Search>
      <SearchIcon name='search1' size={22} color='#b4b4b4' style={{ paddingLeft: 10 }} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={S.style.input}
        {...rest}
      />
    </S.Search>
  );
}