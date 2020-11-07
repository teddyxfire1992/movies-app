import React from "react";
import {StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import AppNavigation from "./navigation";
import colors from "./styles/colors";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
