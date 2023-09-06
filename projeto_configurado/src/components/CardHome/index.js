import { View, Text, Image } from "react-native";
import { styled } from "styled-components";

const Main = styled.View`
  background-color: #fff;
  margin: 2% 0;
  border-radius: 8px;
`;

const CardHome = ({ user }) => {
  return (
    <Main key={user.id}>
    <Image source={{uri: user.image}} style={{width: 30, height: 30}}/>
      <Text>{user.name}</Text>
    </Main>
  );
};
export default CardHome;
