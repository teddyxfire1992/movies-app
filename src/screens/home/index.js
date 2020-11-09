import React from "react";
import Loader from "../../components/loader";
import Layout from "../../components/layout";
import List from "../../components/list";
import {usePopularMovies} from "../../hooks";
import NavigationService from "../../navigation/service";

const Home = () => {
  const [movies, fetchMoreMovies, loading] = usePopularMovies();

  const handleSearchInputFocus = () => {
    NavigationService.navigate("SearchScreen");
  };

  const handleEndReached = () => {
    fetchMoreMovies();
  };

  return (
    <Layout flatListContainer>
      {loading && <Loader />}
      <List
        data={movies}
        title="What's popular"
        onEndReached={handleEndReached}
        onSearchInputFocus={handleSearchInputFocus}
      />
    </Layout>
  );
};

export default Home;
