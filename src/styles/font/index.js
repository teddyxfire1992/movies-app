import {StyleSheet} from "react-native";
import colors from "../colors";

const fontStyles = StyleSheet.create({
  font_xs: {
    fontSize: 14
  },
  font_sm: {
    fontSize: 16
  },
  font_md: {
    fontSize: 18
  },
  font_lg: {
    fontSize: 20
  },
  font_xl: {
    fontSize: 24
  },
  font_regular: {
    fontFamily: "Roboto-Regular"
  },
  font_medium: {
    fontFamily: "Roboto-Medium"
  },
  font_bold: {
    fontFamily: "Roboto-Bold"
  },
  font_black: {
    color: colors.black
  },
  font_white: {
    color: colors.white
  },
  font_blue: {
    color: colors.primary
  }
});

export default fontStyles;
