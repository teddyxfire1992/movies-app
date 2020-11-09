import React from "react";
import {StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import AppNavigation from "./navigation";
import NavigationService from "./navigation/service";
import colors from "./styles/colors";

const App = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
