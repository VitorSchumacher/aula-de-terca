import { Text, TouchableOpacity, View } from "react-native";
import { styled } from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/core";

const Main = styled.View`
  position: absolute;
  bottom: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Card = styled.View`
  width: 93%;
  background-color: #201c30;
  border-radius: 60px;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 0 17%;
`;

const Footer = ({ home, info }) => {
  const { navigate } = useNavigation();

  const navigateHome = () => {
    if (!home) {
      navigate("Home");
    }
  };
  return (
    <Main>
      <Card>
        <TouchableOpacity onPress={() => navigateHome()}>
          <Icon name="home" size={32} color={home ? "#fff" : "#898989"} />
        </TouchableOpacity>
        <View />
        <TouchableOpacity>
          <Icon name="user-alt" size={32} color={!home ? "#fff" : "#898989"} />
        </TouchableOpacity>
      </Card>
    </Main>
  );
};

export default Footer;
