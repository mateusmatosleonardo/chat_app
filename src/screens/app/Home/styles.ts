import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 22px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins_SemiBold};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.BLACK};
  padding: 6px 0px;
`;

export const Pressable = styled.Pressable``;

export const WrapperSearch = styled.View`
  width: 100%;
  padding: 0px 22px;
`;

export const EmptyList = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const EmptyListMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins_Medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.BLACK};
`;
