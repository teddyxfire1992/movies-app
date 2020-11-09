import React from "react";
import {ScrollView, View} from "react-native";
import layoutStyles from "../../styles/layout";

const Layout = ({children, flatListContainer, scrollViewContainer}) => {
  const renderContainer = () => {
    let Container = null;

    if (flatListContainer) {
      Container = (
        <View style={layoutStyles.flatListContainer}>{children}</View>
      );
    } else if (scrollViewContainer) {
      Container = <ScrollView>{children}</ScrollView>;
    }

    return Container;
  };

  return renderContainer();
};

export default Layout;
