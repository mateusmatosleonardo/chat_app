import React from 'react';
import { Pressable } from 'react-native';
import { IButton } from './types';
import * as S from './styles';

import EnterIcon from '@expo/vector-icons/Ionicons';

export function Button({ style, title, colorTitle, hasIcon }: IButton) {
  return (
    <Pressable style={style}>
      <S.Title style={{ color: colorTitle }}>{title}</S.Title>
      {hasIcon ?
        <EnterIcon
          name='enter-outline'
          color='#fafafa'
          size={20}
          style={{ marginLeft: 12 }}
        />
        : null}
    </Pressable>
  );
}