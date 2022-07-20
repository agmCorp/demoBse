import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>BSE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
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

export default Footer;
