import React from "react";
import { StyleSheet, View } from "react-native";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
