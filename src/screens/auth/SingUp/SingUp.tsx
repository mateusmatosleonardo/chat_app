import React, { useState } from 'react';
import { Keyboard, Platform } from 'react-native';

// components 📦
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';

// styles 🎨
import * as S from './styles';
import { style } from '../../../components/Input/styles';
import { style as styleBtn } from '../../../components/Button/styles';

// icons
import Chat from '../../../assets/chat.json';
import LottieView from 'lottie-react-native';

// form 
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';

export function SingUp() {

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const [showPassword, setShowPassword] = useState(false);

  function handleSignIn(data: any) {
    console.log(data);
  }

  return (
    <S.Container
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    // keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 20}
    >
      <LottieView
        source={Chat}
        style={{ width: 250, height: 250 }}
        autoPlay={false}
        loop={false}
      />
      <S.Form onPress={Keyboard.dismiss}>
        <Controller
          control={control}
          name="username"
          render={({ field: { value, onChange } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              hasIcon={true}
              placeholder='Usuário'
              style={style.input}
              onPress={() => console.log('Testando')}
            />
          )}
        />
        {errors.username && <S.TextError>{errors.username?.message as string}</S.TextError>}
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              hasIcon={false}
              placeholder='E-mail'
              style={style.input}
            />
          )}
        />
        {errors.email && <S.TextError>{errors.email?.message as string}</S.TextError>}
        <Controller
          control={control}
          name='password'
          render={({ field: { value, onChange } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              hasIcon={true}
              placeholder='Senha'
              style={style.input}
              securityIcon={true}
              secureTextEntry={!showPassword}
              visiblePassword={!showPassword}
              onPress={() => setShowPassword(!showPassword)}
            />
          )}
        />
        {errors.password && <S.TextError>{errors.password?.message as string}</S.TextError>}
        <S.WrapperButtons>
          <Button
            title='Cadastrar'
            colorTitle='#010101'
            style={styleBtn.button}
            onPress={handleSubmit(handleSignIn)}
          />
          <Button
            title='Entrar'
            colorTitle='#ffffff'
            hasIcon={true}
            style={styleBtn.buttonWithIcon}
            onPress={() => console.log('Cadastrando...')}
          />
        </S.WrapperButtons>
      </S.Form>
    </S.Container>
  );
}