import React, { useContext, useState } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// components 📦
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';

// form 
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';

// styles 🎨
import * as S from './styles';
import { style } from '../../../components/Input/styles';
import { style as styleBtn } from '../../../components/Button/styles';

// logo
import LottieView from 'lottie-react-native';
import Chat from '../../../assets/chat.json';

// context
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';

// types
import { singInScreenProp } from './types';

export function SingIn() {

  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation<singInScreenProp>();

  const { loading, handleSignIn } = useContext(AuthContext);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <S.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <LottieView
        source={Chat}
        style={{ width: 250, height: 250 }}
        autoPlay={false}
        loop={false}
      />
      <S.Form>
        <Controller
          control={control}
          name="username"
          render={({ field: { value, onChange } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              hasIcon={false}
              placeholder='Usuário'
              style={style.input}
            />
          )}
        />
        {errors.username && <S.TextError>{errors.username?.message as string}</S.TextError>}
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
            onPress={() => navigation.navigate('SingUp')}
          />
          <Button
            title='Entrar'
            colorTitle='#ffffff'
            hasIcon={true}
            style={[styleBtn.buttonWithIcon,
            {
              opacity: errors.username
                || errors.email
                || errors.password
                || loading === true ? 0.2 : 1
            }]}
            disabled={loading}
            loading={loading}
            onPress={handleSubmit(handleSignIn as any)}
          />
        </S.WrapperButtons>
      </S.Form>
    </S.Container>
  );
}