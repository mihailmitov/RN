import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Card = ({bg, color, category, index, currentIndex, subCategories}) => {
  return (
    <View style={[styles.card, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color }]}>{category}</Text>
      {index === currentIndex && (
        <View style={styles.subCategoriesList}>
          {subCategories.map((sub) => {
            return (
              <Text key={sub} style={[styles.body, { color }]}>
                {sub}
              </Text>
            );
          })}
        </View>
      )}
    </View>
  );
};

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
  subCategoriesList: {
    marginTop: 20,
  },
});