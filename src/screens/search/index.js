import React, {useState} from "react";
import {debounce} from "lodash";
import NavigationService from "../../navigation/service";
import Layout from "../../components/layout";
import List from "../../components/list";
import {useSearchMovies} from "../../hooks";
import Loader from '../../components/loader';

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [
    movies,
    totalResults,
    startSearch,
    fetchMoreMovies,
    clearMovies,
    loading
  ] = useSearchMovies();

  const handleCancel = () => {
    NavigationService.goBack();
  };

  const startSearchDebounced = debounce(startSearch, 500);

  const handleTextChange = (text) => {
    setSearchText(text);
    if (text.length >= 3) {
      startSearchDebounced(text);
    }
  };

  const handleEndReached = () => {
    fetchMoreMovies(searchText);
  };

  const clearData = () => {
    setSearchText("");
    clearMovies();
  };

  return (
    <Layout flatListContainer>
      {loading && <Loader />}
      <List
        data={movies}
        title={`Showing ${totalResults} results`}
        searchMode
        value={searchText}
        onCancel={handleCancel}
        onTextChange={handleTextChange}
        onClear={clearData}
        onEndReached={handleEndReached}
      />
    </Layout>
  );
};

export default Search;
