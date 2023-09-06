import { styled } from "styled-components";

export const Main = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 80%;
  height: 300px;
  margin: 0 0 15%;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-family: 'Poppins_400Regular';
`;

export const Title = styled(TextButton)`
  margin: 0 0 2%;
  font-size: 28px;
  font-family: 'Poppins_500Medium';
`;

export const TextNor = styled(TextButton)`
  font-family: 'Poppins_300Light';
  font-size: 14px;
`;