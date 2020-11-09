import {StyleSheet} from "react-native";
import {getDeviceDimensions} from "../../helpers";
import colors from "../colors";

const layoutStyles = StyleSheet.create({
  flatListContainer: {
    height: getDeviceDimensions().windowHeight - 20
  },
  flatList: {
    paddingHorizontal: 16,
    marginVertical: 18
  },
  listItem: {
    width: "32%",
    height: 154,
    marginBottom: 35,
    borderRadius: 15,
    overflow: "hidden"
  },
  listHeaderContainer: {
    backgroundColor: colors.white
  },
  listHeaderTextContainer: {
    marginVertical: 20
  },
  image: {
    width: "100%",
    height: "100%"
  },
  flexRow: {
    flexDirection: "row"
  },
  flexWrap: {
    flexWrap: "wrap"
  },
  cancelButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  searchInput: {
    flex: 1
  },
  searchContainer: {
    backgroundColor: colors.shade,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    height: 43
  },
  searchIconContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  loader: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: "absolute",
    width: "100%",
    height: getDeviceDimensions().windowHeight,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1
  },
  creditItem: {
    width: "30%",
    marginBottom: 25
  },
  detailsImageContainer: {
    height: 300,
    backgroundColor: colors.shade
  },
  detailsImageGradient: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  detailsImageInfo: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    paddingHorizontal: 16
  },
  detailsInfoContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20
  },
  detailsOverviewTitle: {
    marginBottom: 10
  },
  detailsOverview: {
    marginBottom: 22
  },
  detailsTitle: {
    marginBottom: 5
  }
});

export default layoutStyles;
