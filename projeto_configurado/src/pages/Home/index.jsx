import { memo, useCallback, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { Main } from "./styled";
import { getUsers } from "../../services/users";
import CardHome from "../../components/CardHome";
import { ScrollView } from "react-native";

const Home = () => {
  const [user, setUser] = useState();
  const getData = useCallback(async () => {
    try {
      const { data } = await getUsers();
      setUser(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);
  if (!user) {
    return null;
  }
  return (
    <LinearGradient
      colors={["#111017", "#090320"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Main>
          <View>
            <Text>input bar</Text>
          </View>
          <View>
            {user.map((user) => (
              <CardHome user={user} />
            ))}
            <Text>componente</Text>
          </View>
          <Text>Tela home</Text>
        </Main>
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;
