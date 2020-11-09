import {Dimensions} from "react-native";
import axios from "axios";
import config from "../config";

const fetchData = (route, queries = "") => {
  const finalUrl =
    config.api.baseUrl + route + `?api_key=${config.api.key}` + queries;

  return new Promise((resolve, reject) => {
    axios
      .get(finalUrl)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getDeviceDimensions = () => {
  const {width: windowWidth, height: windowHeight} = Dimensions.get("window");
  const {width: screenWidth, height: screenHeight} = Dimensions.get("screen");

  return {
    windowWidth,
    windowHeight,
    screenWidth,
    screenHeight
  };
};

export {fetchData, getDeviceDimensions};
