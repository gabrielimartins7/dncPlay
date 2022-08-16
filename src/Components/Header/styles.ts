import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Nav = styled.View`
  width: 100%;
  height: ${RFPercentage(17)}px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: 70px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(45)}px;
  height: ${RFValue(45)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-right: 10px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: 7%;
  height: 50%;
`;
