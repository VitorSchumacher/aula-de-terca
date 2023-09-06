import { useCallback, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";
import {
  ListItensMain,
  ListItensScroll,
  Main,
  TextList,
} from "./styled";
import { getUsers } from "../../services/users";
import CardHome from "../../components/CardHome";
import { ScrollView } from "react-native";
import LoadingScreen from "../Loading";
import { useNavigation } from "@react-navigation/core";
import InputFilter from "../../components/InputFilter";

const Home = () => {
  const { navigate } = useNavigation();
  const [user, setUser] = useState();
  const [filter, setFiltered] = useState();
  const getData = useCallback(async () => {
    try {
      const { data } = await getUsers();
      setUser(data);
      setFiltered(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const navigateUser = (id) => {
    navigate("Info", { id: id });
  };

  const handleFilterChange = filterText => {
    const filtered = user.filter(game =>
      game.name.toLowerCase().includes(filterText.toLowerCase()),
    );
    setFiltered(filtered);
  };

  if (!user) {
    return <LoadingScreen />;
  }
  return (
    <LinearGradient
      colors={["#111017", "#090320"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <Main>
        <ListItensScroll>
          <ListItensMain>
          <InputFilter handleFilterChange={handleFilterChange} />
            <TextList>Your Employees</TextList>
            {filter?.map((user) => (
              <CardHome key={user.id} user={user} onPress={navigateUser} />
            ))}
          </ListItensMain>
        </ListItensScroll>
      </Main>
    </LinearGradient>
  );
};

export default Home;
