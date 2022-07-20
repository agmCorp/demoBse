import React, { useState } from "react";
import axios from "axios";
import { Dimensions } from "react-native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import Movies2 from "./Movies2";

function Home2() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [showingId, setShowingId] = useState("");

  const handleOnPress = async () => {
    const { data } = await axios.get(
      `https://private.omdbapi.com/?apikey=bef9c583&s=${movieName}`
    );
    console.log("data: ", data.Search);
    setMovies(data.Search);
  };

  const handleMoviePress = (clickMovieId) => {
    if (clickMovieId === setShowingId) {
      setShowingId("");
    } else {
      setShowingId(clickMovieId);
    }
  };

  console.log(movies);
  console.log(movieName);

  return (
    <View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.input}
          value={movieName}
          onChangeText={(value) => setMovieName(value)}
        />
        <TouchableOpacity style={styles.button} onPress={handleOnPress}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={movies}
          renderItem={(movieItem) => (
            <Movies2
              onPress={handleMoviePress}
              showingId={showingId}
              movieData={movieItem}
            />
          )}
          keyExtractor={(item, index) => item.imdbID}
        />
      </View>
    </View>
  );
}
const win = Dimensions.get("window");
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "blue",
    borderStyle: "solid",
    borderWidth: 1,
    flex: 1,
    marginRight: 30,
  },

  button: {
    height: 40,
    backgroundColor: "#009688",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  content: {
    backgroundColor: "brown",
    padding: 30,
    color: "white",
    marginTop: 30,
    alignItems: "center",
    textAlign: "center",
  },

  poster: {
    width: win.width,
    height: win.height,
    resizeMode: "stretch",
  },
});

export default Home2;
