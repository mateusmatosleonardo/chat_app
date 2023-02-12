import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface StyleProps {
  color?: string;
  backgroundPicture?: string;
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 0px 22px;
  margin-bottom: 18px;
`;

export const WrapperPicture = styled.View<StyleProps>`
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 62px;
  border-radius: 62 / 2;
  background-color: ${(props) => props.backgroundPicture};
`;

export const Picture = styled.ImageBackground`
  width: 62px;
  height: 62px;
`;

export const Status = styled.View<StyleProps>`
  width: 20px;
  height: 20px;
  border-radius: 20 / 2;
  border: 3px solid #ffffff;
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-color: ${(props) => props.color};
`;

export const WrapperMain = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 16px;
`;

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Username = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins_SemiBold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.BLACK};
`;

export const LastMessageTime = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins_Regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.BLACK};
`;

export const WrapperLastMessage = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LastMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins_Regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.BLACK};
`;
