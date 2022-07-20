import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const styles = StyleSheet.create({
  movieTitle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: "#C1DBD0",
    marginTop: 12,
  },
  image: {
    width: 200,
    height: 200,
  },
});

function Movies2({ movieData, onPress, showingId }) {
  const handleOnPress = () => {
    onPress(movieData.item.imdbTD);
  };

  return (
    <View>
      <TouchableOpacity style={styles.movieTitle} onPress={handleOnPress}>
        <Text>{movieData.item.Title}</Text>
        {showingId === movieData.item.imdbTD && (
          <Image style={styles.image} source={{ uri: movieData.item.Poster }} />
        )}
      </TouchableOpacity>
    </View>
  );
}
export default Movies2;
