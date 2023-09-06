import { LinearGradient } from "expo-linear-gradient";
import { styled } from "styled-components";

export const Button = styled.TouchableOpacity`
  width: 70%;
  height: 5vh;
  position: absolute;
  bottom: 5%;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-family: "Poppins_400Regular";
`;

const ButtonGradient = ({ title, onPress }) => {
  return (
    <Button onPress={() => onPress()}>
      <LinearGradient
        colors={["#4A4A4A", "#179AC3"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: "100%",
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
        }}
      >
        <TextButton>{title}</TextButton>
      </LinearGradient>
    </Button>
  );
};

export default ButtonGradient;
