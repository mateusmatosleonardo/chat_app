import React from 'react';
import { Pressable } from 'react-native';
import { IButton } from './types';
import * as S from './styles';

import EnterIcon from '@expo/vector-icons/Ionicons';

export function Button({
  onPress,
  style,
  title,
  colorTitle,
  hasIcon,
  disabled,
  loading }: IButton) {
  return (
    <Pressable
      onPress={onPress}
      style={style}
      disabled={disabled}
    >
      {loading ? <S.ActivityIndicator color="#010101" size="small" /> : <S.Title style={{ color: colorTitle }}>{title}</S.Title>}

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