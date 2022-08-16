import React from "react";
import {
  Container,
  Logo,
  Input,
  ButtonLogin,
  ButtonLoginText,
  ContentForm,
} from "./styles";

import dnc from "../../assets/dnc.png";

export function Login({ navigation }) {
  const handleLogin = () => {
    navigation.replace("Dashboard");
  };

  return (
    <Container>
      <Logo source={dnc} />

      <ContentForm>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <ButtonLogin onPress={handleLogin}>
          <ButtonLoginText>Login</ButtonLoginText>
        </ButtonLogin>
      </ContentForm>
    </Container>
  );
}
