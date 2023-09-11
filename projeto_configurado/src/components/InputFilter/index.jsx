import { Text, TouchableHighlight, TouchableOpacity } from "react-native";
import { styled } from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";

export const ViewInput = styled.View`
  background-color: #f1f3f9;
  width: 100%;
  margin: 15% 0 7%;
  display: flex;
  flex-direction: row;
  padding: 3% 2%;
  border-radius: 8px;
  align-items: center;
`;
export const Input = styled.TextInput`
  flex: 1;
  background-color: #fefdfe;
  border: #c5c5c7 solid 1px;
  padding: 2%;
  border-radius: 8px;
`;

const InputFilter = ({ handleFilterChange }) => {
  return (
    <ViewInput>
      <Input
        placeholder="Search here..."
        onChangeText={(text) => handleFilterChange(text)}
      />
      <TouchableOpacity style={{ marginHorizontal: "2%" }}>
        <Icon
          name="search"
          size={24}
          color="#000"
          
        />
      </TouchableOpacity>
    </ViewInput>
  );
};

export default InputFilter;
