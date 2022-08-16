import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: 65%;
  height: 7%;
`;

export const ContentForm = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 120px;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 45px;
  padding-horizontal: 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: #333333;
`;

export const ButtonLogin = styled.TouchableOpacity`
  width: 80%;
  height: 45px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.button};

  justify-content: center;
  align-items: center;

  margin-top: 30px;
`;

export const ButtonLoginText = styled.Text`
  color: white;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
