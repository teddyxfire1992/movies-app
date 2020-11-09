import React from "react";
import {ActivityIndicator, View} from "react-native";
import colors from "../../styles/colors";
import layoutStyles from "../../styles/layout";

const Loader = () => (
  <View style={layoutStyles.loader}>
    <ActivityIndicator size="large" color={colors.white} />
  </View>
);

export default Loader;
