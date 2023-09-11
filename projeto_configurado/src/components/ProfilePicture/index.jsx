import { Image, Text, View } from "react-native";
import { styled } from "styled-components";

const UserImage = styled.Image`
  width: ${(props) => (props.size ? props.size : "60")}px;
  height: ${(props) => (props.size ? props.size : "60")}px;
  border-radius: 90px;
`;

const ProfilePicture = ({ image, size, aling }) => {
  let userSize = 60;
  switch (size) {
    case "medium": {
      userSize = 90;
      break
    }
    case "large": {
      userSize = 130;
      break
    }
  }
  return (
    <View>
      <UserImage source={{ uri: image }} size={userSize} />
    </View>
  );
};

export default ProfilePicture;
