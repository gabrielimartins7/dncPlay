import styled from "styled-components/native";

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const ContainerScrol = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Carousel = styled.View`
  height: 50%;
`;

export const Item = styled.TouchableOpacity`
  height: 100%;
  width: ${`${width}px`};
`;

export const Highlight = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: 100%;
  height: 100%;
`;

export const TextFlat = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  margin-left: 10px;
`;

export const ContainerFlat = styled.View`
  margin-top: 10px;
`;

export const ContentFlat = styled.Text`
  height: 110px;
  width: 90px;
  margin: 5px;
  border-radius: 8px;
`;
export const Photo = styled.Image`
  height: 110px;
  width: 90px;
  border-radius: 8px;
`;
