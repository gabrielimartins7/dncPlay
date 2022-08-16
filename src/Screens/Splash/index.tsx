import React, { useEffect } from "react";
import { Container, Logo } from "./styles";

import dnc from "../../assets/dnc.png";

export function Splash({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  useEffect(() => {
    setTimeout(() => {
      handleLogin();
    }, 1000);
  }, []);

  return (
    <Container>
      <Logo source={dnc} />
    </Container>
  );
}
