import React from "react";
import PropTypes from "prop-types";
import {View, Text, Button} from "react-native";

const Home = ({navigation}) => {
  return (
    <View>
      <Text>HOME SCREEN</Text>
      <Button
        title="GO TO DETAILS"
        onPress={() => navigation.navigate("SearchScreen")}
      />
      <Button
        title="GO TO SEARCH"
        onPress={() => navigation.navigate("DetailScreen")}
      />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object
};

export default Home;
