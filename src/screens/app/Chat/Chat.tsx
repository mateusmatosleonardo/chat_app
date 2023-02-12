import React, { useState } from 'react';
import * as S from './styles';

import Icon from '@expo/vector-icons/MaterialIcons';
import { Platform } from 'react-native';

export function Chat() {

  const [inputHeight, setInputHeight] = useState(20);
  const [message, setMessage] = useState('');

  return (
    <S.Container>

      <S.Messages>

      </S.Messages>

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
        <S.Touch>
          <Icon name='send' color={message.length > 0 ? '#f7ad54' : '#d6d6d6'} size={24} />
        </S.Touch>
      </S.KeyboardAvoidingView>

    </S.Container>
  );
}