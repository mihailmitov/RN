import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Card_New = ({
  bg,
  color,
  category,
  index,
  currentIndex,
  subCategories,
}) => {
  const listRef = useAnimatedRef();
  const open = useSharedValue(false);
  const heightValue = useSharedValue(0);
  const foo = useSharedValue(0);
  const progress = useDerivedValue(() => {
    // return props.activeIndex.value === props.index ? withTiming(1) : withTiming(0);
    return currentIndex === index ? withTiming(1) : withTiming(0);
  });
  const heightAnimationStyle = useAnimatedStyle(() => {
    const height = interpolate(
      progress.value,
      [0, 1],
      // [0, 100],
      [0, foo.value],
      Extrapolate.CLAMP
    );

    return {
      height,
    };
  });

  const layoutHandle = (event) => {
    var { x, y, width, height } = event.nativeEvent.layout;
    foo.value = height;
  };

  useEffect(() => {
    if (currentIndex === index) {
      if (heightValue.value === 0) {
        runOnUI(() => {
          "worklet";
          let v = measure(listRef).height;
          console.log("🚀 ~ file: Card_new.js:40111 ~v:", v);
          heightValue.value = v;
        })();
      }
    }
  }, [currentIndex, index]);

  return (
    <View style={[styles.card, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color }]}>{category}</Text>
      <Animated.View style={{heightAnimationStyle}}>
        <Animated.View
          onLayout={layoutHandle}
          style={[]}
          ref={listRef}
        >
          {subCategories.map((sub) => {
            return (
              <Text key={sub} style={[styles.body, { color }]}>
                {sub}
              </Text>
            );
          })}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Card_New;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  cardContainer: { flexGrow: 1 },
  card: { flexGrow: 1, alignItems: "center", justifyContent: "center" },
  heading: {
    fontSize: 38,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: -2,
  },
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    textAlign: "center",
  },
  // subCategoriesList: {
  //   marginTop: 20,
  // },
});
