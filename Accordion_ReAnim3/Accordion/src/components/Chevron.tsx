import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  progress: Readonly<SharedValue<0 | 1>>;
};

const Chevron = ({ progress }: Props) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * 180}deg` }],
  }));
  return (
    <Animated.View style={[ iconStyle, styles.icon]}>
      <Image style={styles.chevron} source={require("../assets/Chevron.png")} />
    </Animated.View>
  );
};

export default Chevron;

const styles = StyleSheet.create({
  icon: {
    // backgroundColor: "#ff0000",
    // paddingHorizontal: 20
  },
  chevron: {
    backgroundColor: "#fff",
    height: 24,
    width: 24,
  },
});
