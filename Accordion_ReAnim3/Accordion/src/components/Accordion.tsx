import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Category } from "../data/data";
import Chevron from "./Chevron";

import Animated, {
  useSharedValue,
  withTiming,
  useDerivedValue,
  useAnimatedRef,
  runOnUI,
  measure,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

type Props = {
  value: Category;
};

const Accordion = ({ value }: Props) => {
  const listRef = useAnimatedRef<Animated.View>();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0)
  );

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: interpolate(
      progress.value,
      [0, 1],
      [0, heightValue.value],
      Extrapolate.CLAMP
    ),
  }));

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.titleContainer}
        onPress={() => {
          if (heightValue.value === 0) {
            runOnUI(() => {
              "worklet";
              heightValue.value = measure(listRef).height;
            })();
          }
          open.value = !open.value;
        }}
      >
        <Text style={styles.textTitle}>{value.title}</Text>
        <Chevron progress={progress} />
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View ref={listRef} style={styles.contentContainer}>
          {value.content.map((v, i) => {
            return (
              <View style={styles.content} key={i}>
                <Text style={styles.textContent}>{v}</Text>
              </View>
            );
          })}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e3edfb",
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#0f56b3",
    overflow: "hidden",
  },
  titleContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 16,
    color: "black",
  },
  contentContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  content: {
    padding: 20,
    backgroundColor: "#D6e1f0",
  },
  textContent: {
    fontSize: 14,
    color: "black",
  },
});
