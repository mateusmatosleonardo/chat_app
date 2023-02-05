import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins_SemiBold};
  font-size: ${RFValue(16)}px;
`;

export const style = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: 52,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#010101",
  },
  buttonWithIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: 52,
    backgroundColor: "#010101",
    borderRadius: 12,
  },
});
