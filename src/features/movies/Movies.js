import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { View, StyleSheet, SafeAreaView } from "react-native";
import { TextInput, Text } from "react-native-paper";

import { getListMovie } from "./moviesService";
import { useInput } from "../../hooks";
import { startLoading, endLoading, setMovies } from "./moviesSlice";
import { ListMovies } from "./ListMovies";

export function Movies() {
  const [searchProps] = useInput("");
  const dispatch = useDispatch();

  useEffect(() => {
    const requestMovies = async () => {
      dispatch(startLoading());
      
      try {
        const resp = await getListMovie();
        const data = await resp.data;

        if (data?.results) {
          dispatch(setMovies(data.results));
        }
        
      } catch (e) {
        console.error(e);
      } finally {
        dispatch(endLoading());
      }
    };

    requestMovies();
  }, [dispatch]);
  
  return (
    <SafeAreaView style={Styles.wrapper}>
      <View style={Styles.container}>
        <Text variant="titleMedium">Semovibi</Text>
      </View>
      
      <View style={[Styles.titleContainer, Styles.container]}>
        <Text variant="titleLarge" style={Styles.title}>Find Movies, TV Shows{'\n'}and more...</Text>
        <TextInput
          mode="outlined"
          label="Search movies..."
          left={<TextInput.Icon icon="movie-search" />}
          { ...searchProps }
        />
      </View>

      <ListMovies contentContainerStyle={[{ minHeight: 100, paddingTop: 20}, Styles.container]} />
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: "#fff"
  },
  container: {
    paddingHorizontal: 20
  },
  titleContainer: {
    paddingTop: 50,
    paddingBottom: 10
  },
  title: {
    marginBottom: 10
  }
});