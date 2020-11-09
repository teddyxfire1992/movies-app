import React, {useState} from "react";
import PropTypes from "prop-types";
import {Image, TouchableOpacity} from "react-native";
import config from "../../config";
import NavigationService from "../../navigation/service";
import layoutStyles from "../../styles/layout";
import fallbackImage from "../../../assets/images/fallback.png";

const ListItem = ({index, data}) => {
  const [imageError, setImageError] = useState(false);

  const calculateRightMargin = () => ({
    marginRight: (index + 1) % 3 === 0 ? 0 : "2%"
  });

  const getPosterUri = () =>
    imageError
      ? fallbackImage
      : {uri: config.api.posterBaseUrl + data.poster_path};

  const openDetails = () => {
    NavigationService.navigate("DetailScreen", {
      id: data.id
    });
  };

  const setError = () => {
    setImageError(true);
  };

  return (
    <TouchableOpacity
      onPress={openDetails}
      style={[layoutStyles.listItem, calculateRightMargin()]}>
      <Image
        style={layoutStyles.image}
        source={getPosterUri()}
        onError={setError}
      />
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  index: PropTypes.number,
  data: PropTypes.object
};

export default ListItem;
