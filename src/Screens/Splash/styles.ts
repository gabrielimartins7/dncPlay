import styled from "styled-components/native";

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
