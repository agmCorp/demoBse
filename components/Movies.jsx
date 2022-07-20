import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const styles = StyleSheet.create({
  movieTitle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: "#DBE2EF",
    marginTop: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#3F72AF",
  },
  image: {
    width: 200,
    height: 200,
  },

  text: {
    color: "#3F72AF",
    fontWeight: "580",
    fontFamily: "Arial",
  },
});

function Movies({ movieData }) {
  const [isShowingImage, setIsShowingImage] = useState(false);

  const handleOnPress = () => {
    setIsShowingImage((oldIsShowingImage) => {
      console.log(oldIsShowingImage);
      return !oldIsShowingImage;
    });
  };

  return (
    <View>
      <TouchableOpacity style={styles.movieTitle} onPress={handleOnPress}>
        <Text style={styles.text}>{movieData.item.Title}</Text>
        {isShowingImage && (
          <Image style={styles.image} source={{ uri: movieData.item.Poster }} />
        )}
      </TouchableOpacity>
    </View>
  );
}
export default Movies;
