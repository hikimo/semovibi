import React from "react";

import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";

import { useSelector } from "react-redux";
import { selectIsLoading, selectMovies } from "./moviesSlice";

import { CardItem } from "../../components/CardItem";

export function ListMovies({ contentContainerStyle }) {
  const movies = useSelector(selectMovies);
  const isLoading = useSelector(selectIsLoading);

  if (isLoading) {
    return (
      <View style={contentContainerStyle}>
        <Text variant="bodyMedium">Fetching Data..</Text>
      </View>
    );
  }
  if (!movies.length) {
    return (
      <View style={contentContainerStyle}>
        <Text variant="bodyMedium">No movie discovered..</Text>
      </View>
    );
  }
  
  return (
    <ScrollView contentContainerStyle={contentContainerStyle}>
      { movies.map((movie) => (
        <CardItem key={movie.id} movie={movie} />
      )) }
    </ScrollView>
  );
}
