import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Home from "../screens/home";
import Search from "../screens/search";
import Details from "../screens/details";
import Logo from "../components/logo";
import BackButton from "../components/back-button";

import colors from "../styles/colors";

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: colors.primary
  },
  headerTintColor: colors.white,
  headerTitleAlign: "center",
  headerTitle: () => <Logo />,
  headerBackImage: () => <BackButton />
};

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="SearchScreen" component={Search} />
      <Stack.Screen name="DetailScreen" component={Details} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
