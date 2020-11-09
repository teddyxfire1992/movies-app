import React from "react";
import PropTypes from "prop-types";
import {View, ImageBackground} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Loader from "../../components/loader";
import Layout from "../../components/layout";
import Copy from "../../components/copy";
import config from "../../config";
import CreditItem from "../../components/credit-item";
import {useMovieDetailsHook} from "../../hooks";
import layoutStyles from "../../styles/layout";

const Details = ({route}) => {
  const {id} = route.params;
  const [movie, credits, loading] = useMovieDetailsHook(id);

  const renderCredits = () => {
    const fullCredits = credits.cast.concat(credits.crew);

    return fullCredits.map((credit, i) => (
      <CreditItem key={`credit-${i}`} data={credit} index={i} />
    ));
  };

  const parseYear = (text) => text.substring(0, 4);

  const getArrayValues = (arr, key) =>
    arr.map((item, i) => (i + 1 === arr.length ? item[key] : item[key] + ", "));

  const parseRuntime = (time) => `${Math.floor(time / 60)}h ${time % 60}m`;

  return loading ? (
    <Loader />
  ) : (
    <Layout scrollViewContainer>
      {movie && (
        <View>
          <View style={layoutStyles.detailsImageContainer}>
            <ImageBackground
              style={layoutStyles.image}
              source={{uri: config.api.backdropBaseUrl + movie.backdrop_path}}>
              <LinearGradient
                colors={["transparent", "black"]}
                style={layoutStyles.detailsImageGradient}
              />
              <View style={layoutStyles.detailsImageInfo}>
                <View style={layoutStyles.detailsTitle}>
                  <Copy size="xl" weight="medium" color="white">
                    {`${movie.title} `}({parseYear(movie.release_date)})
                  </Copy>
                </View>
                <Copy size="xs" color="white">
                  {movie.release_date} (
                  {getArrayValues(movie.production_countries, "iso_3166_1")})
                </Copy>
                <View style={layoutStyles.flexRow}>
                  <Copy size="xs" color="white">
                    {getArrayValues(movie.genres, "name")}
                  </Copy>
                  <Copy size="xs" weight="bold" color="white">
                    {`  ${parseRuntime(movie.runtime)}`}
                  </Copy>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={layoutStyles.detailsInfoContainer}>
            <View style={layoutStyles.detailsOverview}>
              <View style={layoutStyles.detailsOverviewTitle}>
                <Copy size="lg" weight="medium" color="blue">
                  Overview
                </Copy>
              </View>
              <Copy size="xs">{movie.overview}</Copy>
            </View>
            {credits && (
              <View style={[layoutStyles.flexRow, layoutStyles.flexWrap]}>
                {renderCredits()}
              </View>
            )}
          </View>
        </View>
      )}
    </Layout>
  );
};

Details.propTypes = {
  route: PropTypes.object
};

export default Details;
