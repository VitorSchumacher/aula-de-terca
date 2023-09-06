import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
const Info = () => {
  const { params } = useRoute().params;
  return (
    <View>
      <Text>info</Text>
    </View>
  );
};

export default Info;
