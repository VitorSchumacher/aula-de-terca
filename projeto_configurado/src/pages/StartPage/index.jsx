import { Image, Main, TextNor, Title } from "./styled";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/core";
import ButtonGradient from "../../components/Button";
const StartPage = () => {
  const { navigate } = useNavigation();
  return (
    <LinearGradient
      colors={["#111017", "#090320"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <Main>
        <Image source={require("../../assets/images/startimage.png")} />
        <Title>
          Manage Your{"\n"}Employees.{"\n"}All in One Place
        </Title>
        <TextNor>
          Eliminate physical cards, get virtual{"\n"}data in your hand.
        </TextNor>
        <ButtonGradient title="Get Start" onPress={() => navigate("Home")} absolute={true}/>
      </Main>
    </LinearGradient>
  );
};

export default StartPage;
