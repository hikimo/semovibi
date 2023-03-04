import React from "react";
import { View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, selectFavorites, setFavorites } from "../features/favorites/favoritesSlice";

// Check if the item has added to favorite
// set as favorite if it's
// create add to favorite function
// toggle the favorite depend on condition

export function CardItem({ movie }) {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const alreadyFavorited = favorites.find(i => i.id === movie.id);
  
  onPressFavorite = () => {
    if (!alreadyFavorited) {
      dispatch(addFavorites(movie));
    } else {
      const unFavorite = favorites.filter(i => i.id !== movie.id);
      dispatch(setFavorites(unFavorite));
    }
  }
  
  return (
    <Card style={{ marginBottom: 25 }}>
      <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} />
      <Card.Content style={{paddingTop: 10}}>
        <Text variant="titleLarge">{movie.title}</Text>
        <View>
          <Text variant="bodyMedium">{movie.release_date}</Text>
        </View>
      </Card.Content>
      <Card.Actions style={{paddingBottom: 10}}>
        <Button
          colo
          icon={alreadyFavorited ? "cards-heart" : "cards-heart-outline"}
          onPress={onPressFavorite}
        >
          { alreadyFavorited ? "Remove from favorite" : "Add to favorite"}
        </Button>
      </Card.Actions>
    </Card>
  );
}