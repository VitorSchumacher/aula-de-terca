import { LinearGradient } from "expo-linear-gradient";
import { styled } from "styled-components";

export const Button = styled.TouchableOpacity`
  width: ${(props) => (props.size ? props.size : "70")}%;
  height: 5vh;
  position: ${(props) => (props.absolute ? "absolute" : null)};
  bottom: ${(props) => (props.absolute ? " 5%" : null)};
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-family: "Poppins_400Regular";
`;

const ButtonGradient = ({ title, onPress, size, absolute }) => {
  let ButtonSize = 60;
  switch (size) {
    case "small": {
      ButtonSize = 40;
    }
  }
  return (
    <Button onPress={() => onPress()} absolute={absolute} size={ButtonSize}>
      <LinearGradient
        colors={["#4A4A4A", "#179AC3"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: "100%",
          height: ButtonSize,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: ButtonSize/4,
        }}
      >
        <TextButton>{title}</TextButton>
      </LinearGradient>
    </Button>
  );
};

export default ButtonGradient;
