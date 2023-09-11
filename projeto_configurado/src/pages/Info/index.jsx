import { ScrollView, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { getOneUser } from "../../services/users";
import LoadingScreen from "../Loading";
import ProfilePicture from "../../components/ProfilePicture";
import Footer from "../../components/Footer";
import { LinearGradient } from "expo-linear-gradient";
import { Card, ImageAbsolute, Main, TextIfo, TextTitle } from "./style";
import { useNavigation } from "@react-navigation/core";
import ButtonGradient from "../../components/Button";
const Info = () => {
  const [user, setUser] = useState();
  const { navigate } = useNavigation();

  const { id } = useRoute().params;
  const getData = useCallback(async () => {
    try {
      const { data } = await getOneUser(id);
      setUser(data);
    } catch (e) {
      console.log(e);
    }
  }, []);
  useEffect(() => {
    getData();
  }, []);

  const navigateHome = () => {
    navigate("Home");
  };

  if (!user) {
    return <LoadingScreen />;
  }
  return (
    <>
      <LinearGradient
        colors={["#111017", "#090320"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Main>
            <Card>
              <LinearGradient
                colors={["#FFFFFF1A", "#FFFFFF00", "#FFFFFF80"]}
                start={{ x: 1.5, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  borderRadius: 15,
                  padding: 15,
                }}
              >
                <ImageAbsolute>
                  <ProfilePicture
                    image={user.image}
                    size="large"
                    aling="center"
                  />
                </ImageAbsolute>
                <View style={{ height: 50 }} />
                <TextTitle>nome</TextTitle>
                <TextIfo>{user.name}</TextIfo>
                <TextTitle>email</TextTitle>
                <TextIfo>{user.email}</TextIfo>
                <TextTitle>DOB</TextTitle>
                <TextIfo>{user.birth_date}</TextIfo>
                <TextTitle>Location</TextTitle>
                <TextIfo>{user.city}</TextIfo>
                <TextTitle>Salary</TextTitle>
                <TextIfo>{user.salary}</TextIfo>
              </LinearGradient>
            </Card>
            <ButtonGradient title="Return" onPress={() => navigateHome()} />
          </Main>
          <View style={{ height: 150, width: 1 }} />
        </ScrollView>
        <Footer home={false} />
      </LinearGradient>
    </>
  );
};

export default Info;
