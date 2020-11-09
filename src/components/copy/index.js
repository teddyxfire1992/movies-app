import React from "react";
import PropTypes from "prop-types";
import {Text} from "react-native";
import fontStyles from "../../styles/font";

const Copy = ({children, size, color, weight}) => (
  <Text
    style={[
      fontStyles[`font_${size || "sm"}`],
      fontStyles[`font_${color || "black"}`],
      fontStyles[`font_${weight || "regular"}`]
    ]}>
    {children}
  </Text>
);

Copy.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string
};

export default Copy;
