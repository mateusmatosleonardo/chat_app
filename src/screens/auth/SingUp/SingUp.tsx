import React, { useState } from 'react';
import { Input } from '../../../components/Input/Input';
import { style } from '../../../components/Input/styles';
import * as S from './styles';

import Chat from '../../../assets/chat.json';
import LottieView from 'lottie-react-native';

export function SingUp() {

  const [showPassword, setShowPassword] = useState(true);

  return (
    <S.Container>
      <LottieView
        source={Chat}
        style={{ width: 250, height: 250, marginBottom: 70 }}
        autoPlay={false}
        loop={false}
      />
      <S.Form>
        <Input
          hasIcon={true}
          placeholder='Usuário'
          style={style.input}
        />
        <Input
          hasIcon={false}
          placeholder='E-mail'
          style={style.input}
        />
        <Input
          hasIcon={true}
          securityIcon={true}
          placeholder='Senha'
          style={style.input}
          secureTextEntry={showPassword}
          visiblePassword={showPassword}
          onPress={() => setShowPassword(!showPassword)}
        />
      </S.Form>
    </S.Container>
  );
}