import { styled } from "styled-components";

export const Main = styled.View`
  display: flex;
  width: 100%;
  padding: 0 4%;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  flex: 1;
`;

export const Card = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  margin-top: 15%;
  margin-bottom: 15%;
`;

export const ImageAbsolute = styled.View`
  position: absolute;
  top: -70px;
  width: 100%;
  display: flex;
  align-items: center;
  left: 10px;
  right: 10px;
`;

export const TextTitle = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: "Poppins_400Regular";
`;

export const TextIfo = styled(TextTitle)`
  font-family: "Poppins_500Medium";
  margin-bottom: 4%;
`;
