import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartPage from "../pages/StartPage";
import Home from "../pages/Home";
import Info from "../pages/Info";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartPage"
        screenOptions={{
          contentStyle: {
            backgroundColor: "#F4F2E7",
          },
          headerStyle: {
            backgroundColor: "#F4F2E7",
          },
        }}
      >
        <Stack.Screen
          name="StartPage"
          component={StartPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Info"
          component={Info}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
