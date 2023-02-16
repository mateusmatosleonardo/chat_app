import React from 'react';
import * as S from './styles';

import { IChat } from './types';

import Person from '../../assets/person.png';

export function Chat({ participant, lastMessage, lastMessageTime, onPress }: IChat) {
  return (
    <S.Container onPress={onPress}>

      <S.WrapperPicture>
        <S.Picture
          source={Person}
        />
      </S.WrapperPicture>
      <S.WrapperMain>

        <S.Wrapper>
          <S.Username>{participant}</S.Username>
          <S.LastMessageTime>{lastMessageTime}</S.LastMessageTime>
        </S.Wrapper>

        <S.WrapperLastMessage>
          <S.LastMessage>{lastMessage}</S.LastMessage>
        </S.WrapperLastMessage>
      </S.WrapperMain>
    </S.Container>
  );
}