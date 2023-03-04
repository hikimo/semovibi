import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-paper";

export function About() {
  return (
    <SafeAreaView style={Styles.wrapper}>
      <Text variant="titleLarge" style={[Styles.title, Styles.textCenter]}>Semovibi v.1</Text>
      <Text variant="bodyLarge" style={Styles.textCenter}>
        Semovibi is an app for showing a movie collections get from the trusted source.
      </Text>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 25,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  textCenter: {
    textAlign: "center"
  },
  title: {
    marginBottom: 10
  }
});