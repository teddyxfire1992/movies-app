import {useState, useEffect} from "react";
import {Alert} from "react-native";
import {fetchData} from "../helpers";

const usePopularMovies = () => {
  const route = "/movie/popular";
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // fetch
    setLoading(true);
    fetchData(route)
      .then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (error) {
      Alert.alert("Error while fetching data");
    }
  }, [error]);

  const fetchMoreMovies = () => {
    const nextPage = currentPage + 1;

    if (nextPage <= totalPages) {
      const query = "&page=" + nextPage;
      setLoading(true);
      fetchData(route, query)
        .then((data) => {
          setMovies((prevMovies) => [...prevMovies, ...data.results]);
          setCurrentPage(nextPage);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }
  };

  return [movies, fetchMoreMovies, loading, error];
};

const useSearchMovies = () => {
  const route = "/search/movie";
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      Alert.alert("Error while fetching data");
    }
  }, [error]);

  const startSearch = (searchTerm) => {
    const query = "&query=" + searchTerm;
    setLoading(true);
    fetchData(route, query)
      .then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setTotalResults(data.total_results);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  const fetchMoreMovies = (searchTerm) => {
    const nextPage = currentPage + 1;

    if (nextPage <= totalPages) {
      const query = "&page=" + nextPage + "&query=" + searchTerm;
      setLoading(true);
      fetchData(route, query)
        .then((data) => {
          setMovies((prevMovies) => [...prevMovies, ...data.results]);
          setCurrentPage(nextPage);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }
  };

  const clearMovies = () => {
    setMovies([]);
    setTotalResults(0);
    setTotalPages(0);
    setCurrentPage(1);
  };

  return [
    movies,
    totalResults,
    startSearch,
    fetchMoreMovies,
    clearMovies,
    loading,
    error
  ];
};

const useMovieDetailsHook = (id) => {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      Alert.alert("Error while fetching data");
    }
  }, [error]);

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchData(`/movie/${id}`), fetchData(`/movie/${id}/credits`)])
      .then((res) => {
        setMovie(res[0]);
        setCredits(res[1]);
      })
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return [movie, credits, loading, error];
};

export {usePopularMovies, useSearchMovies, useMovieDetailsHook};
