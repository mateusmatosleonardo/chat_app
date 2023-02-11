import React, { useState, useContext } from 'react';
import { Keyboard, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

// contexts
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';

// types
import { singUpScreenProp } from './types';

export function SignUp() {

  const [showPassword, setShowPassword] = useState(false);

  const { loading, handleSignUp } = useContext(AuthContext);

  const navigation = useNavigation<singUpScreenProp>();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });


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
            colorTitle='#ffffff'
            style={[styleBtn.buttonWithIcon,
            {
              width: '100%',
              opacity: errors.username
                || errors.email
                || errors.password
                || loading === true ? 0.2 : 1
            }]}
            disabled={loading}
            loading={loading}
            onPress={handleSubmit(handleSignUp as any)}
          />
        </S.WrapperButtons>
        <S.ActionButton onPress={() => navigation.navigate('SignIn')}>
          <S.EnterButton>Já possui cadastro? Entrar</S.EnterButton>
        </S.ActionButton>
      </S.Form>
    </S.Container>
  );
}