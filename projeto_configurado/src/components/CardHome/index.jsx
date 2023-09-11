import { View, Text, Image } from "react-native";
import { styled } from "styled-components";

import ButtonGradient from '../Button'
import ProfilePicture from "../ProfilePicture";

const Main = styled.View`
  background-color: #fff;
  margin: 3% 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 210px;
  width: 100%;
  padding: 3% 0 1%;
`;

const TextName = styled.Text`
  color: #272727;
  font-size: 28px;
  font-family: 'Poppins_500Medium';
`

const CardHome = ({ user, onPress }) => {
  return (
    <Main key={user.id}>
    <ProfilePicture image={user.image} size="medium" aling="center"/>
      <TextName>{user.name}</TextName>
      <ButtonGradient title="Details" onPress={onPress} size="small"/>
    </Main>
  );
};
export default CardHome;
