import React from "react";
import { View } from "react-native";

import logo from "../../assets/logo.png";

import {
  Nav,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserName,
  Logo,
} from "./styles";

export function Header() {
  return (
    <View>
      <Nav>
        <UserWrapper>
          <Logo source={logo} />
          <UserInfo>
            <User>
              <UserName>Gabi</UserName>
            </User>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/62737286?v=4",
              }}
            />
          </UserInfo>
        </UserWrapper>
      </Nav>
    </View>
  );
}
