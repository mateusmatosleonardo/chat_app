import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../theme/theme";

export const Search = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  margin-top: 12px;
  margin-bottom: 28px;
  background-color: ${({ theme }) => theme.colors.WHITE_SECONDARY};
`;

export const style = StyleSheet.create({
  input: {
    flex: 1,
    height: 45,
    marginHorizontal: 8,
    fontFamily: theme.fonts.Poppins_Regular,
    fontSize: RFValue(15),
    letterSpacing: RFValue(0.2),
    color: "#010101",
  },
});
