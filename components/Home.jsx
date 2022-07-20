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
import Movies from "./Movies";

function Home() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");

  const handleOnPress = async () => {
    const { data } = await axios.get(
      `https://private.omdbapi.com/?apikey=bef9c583&s=${movieName}`
    );
    console.log("data: ", data.Search);
    setMovies(data.Search);
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
          <Text style={styles.textButton}>Search</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={movies}
          renderItem={(movieItem) => <Movies movieData={movieItem} />}
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
    borderColor: "112D4E",
    borderStyle: "solid",
    borderRadius: 50,
    borderWidth: 1,
    flex: 1,
    marginRight: 30,
    textAlign: "center",
    color: "#112D4E",
    fontWeight: "bold",
    fontFamily: "Arial",
  },

  button: {
    height: 40,
    backgroundColor: "#112D4E",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 50,
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
  textButton: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontFamily: "Arial",
  },
});

export default Home;
