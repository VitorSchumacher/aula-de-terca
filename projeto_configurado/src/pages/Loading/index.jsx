import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.Text`
  font-size: 18px;
  margin-top: 10px;
  color: #FFF;
  font-family: 'Poppins_400Regular';
`;

const LoadingScreen = () => {
  return (
    <LinearGradient
      colors={["#111017", "#090320"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <Container>
        <ActivityIndicator size="large" color="#179AC3" />
        <LoadingText>Carregando...</LoadingText>
      </Container>
    </LinearGradient>
  );
};

export default LoadingScreen;
