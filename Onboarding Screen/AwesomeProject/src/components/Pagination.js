import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

const Pagination = ({ data, x, screenWidth }) => {
  const PaginationComp = ({ i }) => {
    const animatedDotStyle = useAnimatedStyle(() => {
      const widthAnimation = interpolate(
        x.value,
        [(i - 1) * screenWidth, i * screenWidth, (i + 1) * screenWidth],
        //i = 0 => -1 0 1 => -1 * 10, 0 * 10, 1 * 10 => -10  0 10
        //i = 1 =>  0 1 2 =>                         =>   0 10 20
        //i = 2 =>  1 2 3 =>                         =>  10 20 30
        [10, 20, 10],
        Extrapolate.CLAMP
      );
      const opacityAnimation = interpolate(
        x.value,
        [(i - 1) * screenWidth, i * screenWidth, (i + 1) * screenWidth],
        [0.5, 1, 0.5],
        Extrapolate.CLAMP
      );
      return {
        width: widthAnimation,
        opacity: opacityAnimation
      };
    });
    return <Animated.View style={[styles.dots, animatedDotStyle]}></Animated.View>;
  };

  return (
    <View style={styles.paginationContainer}>
      {data.map((_, i) => {
        return <PaginationComp i={i} key={i} />;
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  dots: {
    width: 10,
    height: 10,
    backgroundColor: "orange",
    marginHorizontal: 10,
    borderRadius: 5,
  },
});
