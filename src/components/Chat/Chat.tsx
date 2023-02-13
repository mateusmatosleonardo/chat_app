import React from 'react';
import * as S from './styles';

import { IChat } from './types';

import Person from '../../assets/person.png';

const statusColor = {
  active: '#1eaf0a',
  inactive: '#c4c4c4'
}

export function Chat({ status, participant, lastMessage, lastMessageTime, colors, onPress }: IChat) {
  return (
    <S.Container onPress={onPress}>

      <S.WrapperPicture
        backgroundPicture={colors}
      >
        <S.Picture
          source={Person}
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
            }}
          />
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