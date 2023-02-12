import React from 'react';
import * as S from './styles';

import { IChat } from './types';

import Person1 from '../../assets/person.png';

const statusColor = {
  active: '#1eaf0a',
  inactive: '#c4c4c4'
}

export function Chat({ participant, lastMessage, lastMessageTime, status, colors }: IChat) {
  return (
    <S.Container>
      <S.WrapperPicture
        backgroundPicture={colors}
      >
        <S.Picture
          source={Person1}
          imageStyle={{
            borderRadius: 62 / 2,
            resizeMode: 'center'
          }}
        >
          <S.Status
            color={status === 'on' ? statusColor.active : statusColor.inactive}
            style={{
              shadowColor: '#313030',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 2,
            }} />
        </S.Picture>
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