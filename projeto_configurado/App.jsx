import { View, Text } from "react-native";
import styles from "./AppStyles";
import Routes from "./src/routes";
import { FontsProvider } from "./src/providers/FontsProvider";

export default function App() {
  return (
    <FontsProvider>
      <Routes />
    </FontsProvider>
  );
}
