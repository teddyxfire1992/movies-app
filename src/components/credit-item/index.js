import React from "react";
import PropTypes from "prop-types";
import {View} from "react-native";
import Copy from "../copy";
import layoutStyles from "../../styles/layout";

const CreditItem = ({data, index}) => {
  const calculateRightMargin = () => ({
    marginRight: (index + 1) % 3 === 0 ? 0 : "5%"
  });

  return (
    <View style={[layoutStyles.creditItem, calculateRightMargin()]}>
      <Copy size="xs" weight="bold">
        {data.name}
      </Copy>
      <Copy size="xs">{data.cast_id ? "Character" : data.job}</Copy>
    </View>
  );
};

CreditItem.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number
};

export default CreditItem;
