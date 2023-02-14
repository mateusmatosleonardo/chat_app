import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.GRAY};
`;

export const Form = styled.Pressable`
  width: 100%;
  padding: 36px 30px 50px 30px;
`;

export const WrapperButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
`;

export const TextError = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins_Medium};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.RED};
  padding-top: 5px;
`;

export const WrapperLogo = styled.View`
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;
