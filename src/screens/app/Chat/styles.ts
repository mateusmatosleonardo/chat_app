import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.WHITE_SECONDARY};
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const WrapperInput = styled.View`
  flex: 0.95;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.WHITE_SECONDARY};
  background-color: ${({ theme }) => theme.colors.GRAY};
`;

export const Input = styled.TextInput`
  padding: 7px;
  font-family: ${({ theme }) => theme.fonts.Poppins_Medium};
  font-size: ${RFValue(14)}px;
`;

export const Messages = styled.ScrollView`
  flex: 1;
`;

export const Touch = styled.Pressable`
  padding: 4px;
`;
