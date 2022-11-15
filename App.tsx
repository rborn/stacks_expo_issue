import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Box } from "@mobily/stacks";

import { dependencies } from "./package.json";

export default function App() {
  return (
    <View style={styles.container}>
      <Box margin={10} padding={10} style={{ backgroundColor: "pink" }}>
        <Text>{`@mobily/stacks: ${dependencies["@mobily/stacks"]}`}</Text>
      </Box>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
