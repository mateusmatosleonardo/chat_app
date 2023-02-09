import React from 'react';
import * as S from './styles';
import { TextInput } from 'react-native';
import { IInput } from './types';

import Clean from '@expo/vector-icons/Feather';
import Eye from '@expo/vector-icons/Feather';

export function Input({
  value,
  onChangeText,
  onPress,
  placeholder,
  hasIcon,
  securityIcon,
  visiblePassword,
  ...rest }: IInput) {
  return (
    <S.WrapperInput>
      <S.Placeholder>{placeholder}</S.Placeholder>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
      {hasIcon ? <S.WrapperClean onPress={onPress}>
        <S.Diviser />
        {securityIcon ?
          <Eye
            name={visiblePassword ? 'eye' : 'eye-off'}
            color='#010101'
            size={16}
            style={{ marginRight: 14, marginLeft: 10 }}
          /> :
          <Clean
            name='x'
            color='#010101'
            size={16}
            style={{ marginRight: 14, marginLeft: 10 }} />
        }
      </S.WrapperClean> : null}
    </S.WrapperInput>
  );
}