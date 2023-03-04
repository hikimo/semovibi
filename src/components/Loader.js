import React, { useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../app/theme";
import { routeNames } from "../app/routes";


export function Loader() {
  const navigation = useNavigation();
  
  useEffect(() => {
    const setLoad = setTimeout(() => {
      navigation.navigate(routeNames.Home);
    }, 2000);

    return () => {
      setLoad();
    }
  }, []);
  
  return (
    <View style={Styles.wrapper}>
      <Text style={Styles.title}>Semovibi</Text>
      <ActivityIndicator size={32} />
    </View>
  );
}

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  title: {
    marginBottom: 10,
    fontSize: 32,
    textAlign: 'center'
  }
})