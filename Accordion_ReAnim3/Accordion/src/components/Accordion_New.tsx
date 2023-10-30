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

const Accordion_New = ({ value }: Props) => {
  const listRef = useAnimatedRef<Animated.View>();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value
      ? withTiming(1, { duration: 2000 })
      : withTiming(0, { duration: 2000 })
  );

  const heightAnimationStyle = useAnimatedStyle(() => {
    const width = interpolate(
      progress.value,
      [0, 1],
      [0, heightValue.value],
      Extrapolate.CLAMP
    );

    return {
      width,
    };
  });
  const transformAnimationStyle = useAnimatedStyle(() => {
    const sc = interpolate(progress.value, [0, 1], [1, 0.8], Extrapolate.CLAMP);
    return {
      transform: [{ scale: sc }],
    };
  });
  const textContainerAnimationStyle = useAnimatedStyle(() => {
    const sc = interpolate(progress.value, [0, 1], [0.1, 1], Extrapolate.CLAMP);
    return {
      transform: [{ scaleY: sc }],
    };
  });

  return (
    <Pressable
      onPress={() => {
        if (heightValue.value === 0) {
          runOnUI(() => {
            "worklet";
            heightValue.value = measure(listRef).width;
          })();
        }
        open.value = !open.value;
      }}
    >
      <View style={styles.container}>
        {/* <Text style={styles.textTitle}>a</Text> */}
        <Animated.View style={transformAnimationStyle}>
          <Chevron progress={progress} />
        </Animated.View>
        <Animated.View style={[heightAnimationStyle, {}]}>
          <Animated.View
            ref={listRef}
            style={[styles.contentContainer, textContainerAnimationStyle]}
          >
            <Text numberOfLines={1}>MOreeeeex</Text>
          </Animated.View>
        </Animated.View>
      </View>
    </Pressable>
  );
};

export default Accordion_New;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e3edfb",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#0f56b3",
    overflow: "hidden",
    flexDirection: "row",
    alignSelf: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "orange",
    alignSelf: "flex-start",
  },
  textTitle: {
    fontSize: 16,
    color: "black",
  },
  contentContainer: {
    position: "absolute",
    top: 0,
    height: "100%",
    alignSelf: "flex-start",
    backgroundColor: "#ffd500",
    justifyContent: "center",
  },
  textContent: {
    fontSize: 14,
    color: "black",
  },
});
