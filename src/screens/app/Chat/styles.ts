import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface StyleProps {
  color?: string;
  backgroundPicture?: string;
  colorStatus?: string;
  backgroundMessage?: string;
  participant?: string;
}

interface ContainerProp extends StyleProps {
  alignItems: string;
  justifyContent: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const WrapperLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
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
  justify-content: center;
  align-items: flex-start;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.WHITE_SECONDARY};
  background-color: ${({ theme }) => theme.colors.GRAY};
`;

export const Input = styled.TextInput`
  width: 100%;
  padding-left: 10px;
  font-family: ${({ theme }) => theme.fonts.Poppins_Medium};
  font-size: ${RFValue(14)}px;
`;

export const Touch = styled.Pressable`
  padding: 4px;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const WrapperPicture = styled.View<StyleProps>`
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 62px;
  border-radius: 62 / 2;
  background-color: #dedede;
`;

export const Picture = styled.Image`
  width: 58px;
  height: 58px;
`;

export const Wrapper = styled.View`
  justify-content: space-between;
  padding: 4px 0px;
  margin-left: 14px;
`;

export const Username = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins_SemiBold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.BLACK};
`;

export const ContainerGeneral = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 9px 12px 9px 12px;
`;

export const WrapperMessage = styled.View<ContainerProp>`
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  background-color: ${(props) => props.backgroundMessage};
  padding: 8px 10px;
  border-radius: 8px;
`;

export const WrapperInvisible = styled.View``;

export const Message = styled.Text<ContainerProp>`
  font-family: ${({ theme }) => theme.fonts.Poppins_Regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.BLACK};
  text-align: ${(props) => props.alignItems};
`;

export const LoadingContainer = styled.View`
  padding: 2px;
`;
