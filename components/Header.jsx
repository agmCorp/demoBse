import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>BUSCADOR DE PELÍCULAS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#3F72AF",
    padding: 20,
  },

  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontFamily: "Arial",
    textAlign: "center",
  },
});

export default Header;
