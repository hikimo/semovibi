import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { selectFavorites } from "./favoritesSlice";
import { CardItem } from "../../components";

export function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  
  const onUnfavorite = () => {

  };
  
  return (
    <SafeAreaView style={Styles.wrapper}>
      <View style={Styles.container}>
        <Text variant="titleLarge">List of my favorites</Text>
      </View>

      {
        !favorites.length
        ? (
          <View style={Styles.container}>
            <Text variant="bodyLarge">Nothing to see here, get some favorites</Text>
          </View>
        ) : (
        <ScrollView contentContainerStyle={[{ paddingTop: 20 }, Styles.container]}>
          { favorites.map((movie) => (
            <CardItem key={movie.id} movie={movie} />
          )) }
        </ScrollView>
        )
      }

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
  title: {
    marginBottom: 10
  }
});