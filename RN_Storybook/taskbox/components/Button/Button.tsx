import { ComponentType, ReactNode, useCallback } from "react";
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  Linking,
  Alert,
  ViewStyle,
} from "react-native";
import Typography from "../Typography/Typography";
import { omit } from "lodash";

const buttonStyles:ViewStyle  = {
  backgroundColor: "transparent",
  borderWidth: 0,
  margin: 0,
  padding: 0,
  alignSelf: "flex-start",
};

const boxStyles = {
  ...buttonStyles,
  borderRadius: 10,
  paddingVertical: 16,
  paddingHorizontal: 28,
  textTransform: "uppercase",
};

const styles = StyleSheet.create({
  primary: {
    ...boxStyles,
    backgroundColor: "#c71b19",
    borderColor: "#c71b19",
    borderWidth: 2,
  },
  secondary: {
    ...boxStyles,
    backgroundColor: "transparent",
    borderColor: "currentColor", // Use 'currentColor' as borderColor
    borderWidth: 2,
    color: "currentColor", // Use 'currentColor' as text color
  },
  link: {
    ...boxStyles,
    borderColor: "transparent",
    borderWidth: 2,
    color: "currentColor",
  },
  ["inline-link"]: {
    ...buttonStyles,
    borderBottomWidth: 1,
    borderColor: "currentColor",
    color: "currentColor",

    // justifyContent: "center", // Center the content horizontally
    // alignItems: "center",
    alignSelf: "flex-start",
  },
  icon: {
    alignItems: "center",
    backgroundColor: "#03f617",
    borderRadius: 100,
    display: "flex",
    height: 40,
    justifyContent: "center",
    lineHeight: 0,
    padding: 0,
    width: 40,
  },
  submit: {
    alignSelf: "flex-start",
    backgroundColor: "#c71b19",
    paddingHorizontal: 10
  },

  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressItem: {
    opacity: 0.5,
  },
});

type TPartial = {
  normalClasses: Object;
  pressedClasses: Object;
};

type TButton = {
  label: string;
  props?: any;
};

type TNormalButton = TButton & {
  variant: "regular";
};

type TIconButton = TButton & {
  variant: "icon";
  icon: JSX.Element;
};

type TLinkButton = TButton & {
  variant: "link";
  url: string;
};

type TButtonOptions = TNormalButton | TIconButton | TLinkButton;
type TPartiallyApply = TButtonOptions & TPartial;

export const partiallyApply = (
  Component: ComponentType<any>,
  partialsProps: TPartial
) => {
  const PartiallyAppliedComponent = (props: TButtonOptions) => (
    <View>
      <Component {...partialsProps} {...props} />
    </View>
  );

  return PartiallyAppliedComponent;
};

const RegularButton = ({
  normalClasses,
  pressedClasses,
  ...props
}: TPartial & TNormalButton): ReactNode => {
  return (
    <Pressable style={[normalClasses, pressedClasses]} {...props}>
      <Text>{props.label}</Text>
    </Pressable>
  );
};

const CapitalButton = ({
  normalClasses,
  pressedClasses,
  ...props
}: TPartiallyApply): ReactNode => {
  return (
    <Pressable style={[normalClasses, pressedClasses]} {...props}>
      <Typography boldened uppercase>
        {props.label}
      </Typography>
    </Pressable>
  );
};

const IconButton = ({
  normalClasses,
  pressedClasses,
  label,
  icon,
  ...props
}: TPartial & TIconButton): ReactNode => {
  return (
    <Pressable
      style={({ pressed }) => [normalClasses, pressed && pressedClasses]}
      {...omit(props, ["icon"])}
    >
      <Typography hidden>{label}</Typography>
      {icon}
    </Pressable>
  );
};

const OpenURLButton = ({
  normalClasses,
  pressedClasses,
  url,
  ...props
}: TPartial & TLinkButton) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Pressable
      style={({ pressed }) => [normalClasses, pressed && pressedClasses]}
      onPress={handlePress}
    >
      <Typography>{props.label}</Typography>
    </Pressable>
  );
};

export const Normal = partiallyApply(RegularButton, {
  normalClasses: styles.submit,
  pressedClasses: styles.pressItem,
});
export const Scream = partiallyApply(CapitalButton, {
  normalClasses: styles["inline-link"],
  pressedClasses: {},
});
export const Icon = partiallyApply(IconButton, {
  normalClasses: styles.icon,
  pressedClasses: styles.pressItem,
});
export const Link = partiallyApply(OpenURLButton, {
  normalClasses: styles["inline-link"],
  pressedClasses: styles.pressItem,
});

