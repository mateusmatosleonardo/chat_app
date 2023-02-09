import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const WrapperInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 52px;
  border-radius: 12px;
  margin-top: 14px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const Placeholder = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins_SemiBold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.GRAY_SECONDARY};
  padding-left: 8px;
`;

export const Diviser = styled.View`
  width: 2px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.GRAY_SECONDARY};
`;

export const WrapperClean = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const style = StyleSheet.create({
  input: {
    flex: 1,
    height: "100%",
    marginLeft: 8,
    fontFamily: theme.fonts.Poppins_SemiBold,
    fontSize: RFValue(14),
    letterSpacing: RFValue(0.2),
    color: "#010101",
  },
});
