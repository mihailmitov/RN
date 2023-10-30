import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import data from "./src/data/data";
import Accordion from "./src/components/Accordion";
import Accordion_New from "./src/components/Accordion_New";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          {data.map((value, index) => {
            return (
              <View key={index} style={styles.innerContainer}>
                <Accordion_New value={value} />
              </View>
            );
          })}
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#950e0e",
    // justifyContent: "space-between",
    justifyContent: "center",
  },
  innerContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 1,
    backgroundColor: "yellow",
  },
  cardContainer: { flexGrow: 1 },
  card: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
