import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

import { routeNames, screenOptions } from "../../app/routes";

import { Movies } from "../movies/Movies";
import { Favorites } from "../favorites/Favorites";
import { About } from "../about/About";

const Tab = createBottomTabNavigator();

export function Home() {
  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName={routeNames.Home}>
      <Tab.Screen 
        options={{
          tabBarLabel: "Home",
          tabBarIcon: (props) => TabBarIcon({...props, iconName: "home"})
        }}
        name={routeNames.Movies}
        component={Movies}
      />
      <Tab.Screen 
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: (props) => TabBarIcon({...props, iconName: "favorite"})
        }}
        name={routeNames.Favorites}
        component={Favorites}
      />
      <Tab.Screen 
        options={{
          tabBarLabel: "About",
          tabBarIcon: (props) => TabBarIcon({...props, iconName: "info"})
        }}
        name={routeNames.About}
        component={About}
      />
    </Tab.Navigator>
  );
}

function TabBarIcon({ focused, color, size, iconName }) {
  return <Icon name={iconName} size={size} color={color} />;
}