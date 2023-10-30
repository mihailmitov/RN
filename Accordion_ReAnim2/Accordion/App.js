import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import data from "./data";
import { useRef, useState } from "react";

import Animated, { Transition, Transitioning } from "react-native-reanimated";
import { Card } from "./Card";
import Card_New from "./Card_new";

// const transition = (
//   <Transition.Together>
//     <Transition.In type='fade' durationMs={200} />
//     <Transition.Change />
//     <Transition.Out type='fade' durationMs={200} />
//   </Transition.Together>
// );

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const ref = useRef();

  //THIS DOES NOT WORK BECAUSE >>>> Transition/Transitioning are replaced with other functionality in 'react-native-reanimated'@3
  //THIS DOES NOT WORK BECAUSE >>>> Transition/Transitioning are replaced with other functionality in 'react-native-reanimated'@3
  //THIS DOES NOT WORK BECAUSE >>>> Transition/Transitioning are replaced with other functionality in 'react-native-reanimated'@3
  //THIS DOES NOT WORK BECAUSE >>>> Transition/Transitioning are replaced with other functionality in 'react-native-reanimated'@3
  //THIS DOES NOT WORK BECAUSE >>>> Transition/Transitioning are replaced with other functionality in 'react-native-reanimated'@3
  //THIS DOES NOT WORK BECAUSE >>>> Transition/Transitioning are replaced with other functionality in 'react-native-reanimated'@3

  return (
    <Animated.View
      ref={ref}
      style={styles.container}
      // transition={transition}
    >
      <StatusBar style="auto" />
      {data.map(({ bg, color, category, subCategories }, index) => {
        return (
          <TouchableOpacity
            key={category}
            onPress={() => {
              // ref.current.animateNextTransition();
              setCurrentIndex(index === currentIndex ? null : index);
            }}
            style={styles.cardContainer}
            activeOpacity={0.9}
          >
            <Card
              bg={bg}
              color={color}
              category={category}
              index={index}
              currentIndex={currentIndex}
              subCategories={subCategories}
            />
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  cardContainer: { flexGrow: 1 },
});
