import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import data from "./src/data/data";
import Accordion from "./src/components/Accordion";
import Accordion_New from "./src/components/Accordion_New";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
        {data.map((value, index) => {
          return (
            <View key={index} style={styles.innerContainer}>
              <Accordion_New value={value} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#950e0e",
    justifyContent: "space-between",
    justifyContent: "space-between",
  },
  innerContainer: {
    flex: 1,
    // width: 100,
    marginHorizontal: 5,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
});
