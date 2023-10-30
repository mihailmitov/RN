import { Text, StyleSheet, TextStyle  } from "react-native";
import { pick } from "lodash";

const headings = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
const body = ["p", "small"] as const;

const inheritedPropsAllowed = ["color"];

function getKeyValuesIfKeyContainedInArray(
  arr: Array<string>,
  obj: Object
): { [k: string]: any } {
  const keyValues = Object.fromEntries(
    Object.entries(obj).filter(([key]) => arr.includes(key))
  );
  return keyValues;
}

export type Props = {
  variant?: "unstyled" | ((typeof headings)[number] | (typeof body)[number]);
  boldened?: boolean;
  underlined?: boolean;
  strikethrough?: boolean;
  inherited?: boolean;
  ellipsed?: boolean;
  uppercase?: boolean;
  hidden?: boolean;
  inheritedStyles?: Array<Object> | null;
  children: React.ReactNode;
};
export default function Typography({
  variant = "p",
  boldened = false,
  underlined = false,
  strikethrough = false,
  inherited = false,
  ellipsed = false,
  hidden = false,
  uppercase = false,
  inheritedStyles = null,
  children,
}: Props) {
  const isBody = body.includes(variant as (typeof body)[number]);
  const isHeading = headings.includes(variant as (typeof headings)[number]);

  const composeStyle = isBody ? styles.body : isHeading ? styles.heading : null;

  const appliedInheritedStyles = inheritedStyles?.map((pStyle) => {
    let res = pick(pStyle, ["color"]);
    return res;
  });

  // const das = pick(props, ["background", "color"])
  // const appliedInheritedStyles = inheritedStyles?.map((pStyle) => {
  //   const filteredStyleObject = Object.fromEntries(
  //     Object.entries(pStyle).filter(([key]) => inheritedStyleProps.includes(key))
  //   );
  //   return filteredStyleObject;
  // });

  const style = [
    composeStyle,
    styles[variant],
    boldened && styles.bold,
    underlined && styles.underline,
    strikethrough && styles.strikethrough,
    inherited && styles.inherited,
    ellipsed && styles.ellipsis,
    hidden && styles.hidden,
    uppercase && styles.uppercase,
    appliedInheritedStyles,
  ];

  return <Text style={style}>{children}</Text>;
}

const styles = StyleSheet.create({
  red: {
    color: "red",
  },
  typographyStyles: {
    appearance: "none",
    color: "currentColor",
    margin: 0,
    padding: 0,
  },
  heading: {
    // fontFamily: "bebas-neue-pro-exp-rg",
  },
  h1: {
    fontSize: 80,
    letterSpacing: 1,
  },
  h2: {
    fontSize: 64,
    letterSpacing: 0.5,
  },
  h3: {
    fontSize: 50,
    letterSpacing: 0.33,
  },
  h4: {
    fontSize: 40,
    letterSpacing: 0.16,
  },
  h5: {
    fontSize: 34,
    letterSpacing: 0.24,
  },
  h6: {
    fontSize: 24,
    letterSpacing: 0.24,
  },
  body: {
    // fontFamily: "bebas-neue-pro-exp-md",
  },
  p: {
    // composes: body;
    fontSize: 18,
  },
  small: {
    fontSize: 16,
  },
  bold: {
    // fontFamily: "bebas-neue-pro-exp-rg",
  },
  underline: {
    textDecorationLine: "underline",
  },
  strikethrough: {
    textDecorationLine: "line-through",
  },
  uppercase: {
    textTransform: "uppercase",
  },
  inherited: {
    fontFamily: "inherit",
    fontSize: undefined,
    letterSpacing: undefined,
    lineHeight: undefined,
    textDecoration: undefined,
  },
  ellipsis: {
    overflow: "hidden",
    whiteSpace: "nowrap", // For Android
    textOverflow: "ellipsis", // For iOS
    width: 200, // Set a fixed width or use flexbox for container sizing
  },
  hidden: {
    // clipPath: inset(50%),
    // clip: rect(0 0 0 0),
    // height: 1,
    // overflow: "hidden",
    // position: "absolute",
    // whiteSpace: "nowrap",
    // width: 1,
    opacity: 0, // Set opacity to 0 to hide the text
    height: 0, // Set height and width to 0
    width: 0,
    overflow: "hidden",
  },
  unstyled: {},
});

 const DynamicTypography = (partialsProps: {normalClasses: TextStyle }) => {
  return (props: any) => <Text style={[partialsProps.normalClasses]}>{props.children} 21423</Text>;
};

const UpperCase = DynamicTypography({
  normalClasses: styles.uppercase,
});
const Strikethrough = DynamicTypography({
  normalClasses: styles.strikethrough,
});


Typography.Uppercase = UpperCase;
Typography.Strikethrough = Strikethrough;