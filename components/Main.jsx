import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Home from "./Home";

function Main() {
  return (
    <ScrollView style={styles.main}>
      <Home />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F9F7F7",
    padding: 20,
  },
});

export default Main;
