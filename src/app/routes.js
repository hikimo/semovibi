import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Loader } from "../components";
import { Home } from "../features/home/Home";

const Stack = createNativeStackNavigator();

export const screenOptions = {
  headerShown: false
};

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routeNames.Loader} screenOptions={screenOptions}>
        <Stack.Screen name={routeNames.Loader} component={Loader} />
        <Stack.Screen name={routeNames.Home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Set of route names to reduce typos
export const routeNames = {
  Loader: "Loader",
  Home: "Home",
  Movies: "Movies",
  MovieDetails: "MovieDetails",
  Favorites: "Favorites",
  About: "About"
};