import { createContext, useState, useContext, useCallback } from "react";
import PropTypes from "prop-types";

import { fetchMovies, fetchMoviesById } from "../services/movieService";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [lastPage, setLastPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const searchMovies = useCallback(async (query, page = 1) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchMovies(query, page);
      const movies = data.Search;
      setLastPage(Math.ceil(data.totalResults / 10));
      if (movies.length > 0) {
        setMovies((prevMovies) =>
          page === 1 ? movies : [...prevMovies, ...movies]
        );
      }
    } catch (error) {
      setError(
        <span>
          Error not found movies with <strong>{query}</strong> title
        </span>
      );
      console.error("Error fetching movies: ", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const searchMovieById = useCallback(async (id) => {
    setLoading(true);
    setError("");
    try {
      const movie = await fetchMoviesById(id);
      setMovie(movie);
    } catch (error) {
      setError(`Error not found movie with ${id} id`);
      console.error("Error fetching movie by id: ", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const replacementImage =
    "https://m.media-amazon.com/images/M/MV5BMWQ3NjA3NTYtNDJiYi00ZTE0LWFmNzMtZjc0NTUxNjk2YTFkXkEyXkFqcGc@._V1_SX300.jpg";

  const validImage = (imageSource) => {
    return imageSource === "N/A" ? replacementImage : imageSource;
  };

  return (
    <MovieContext.Provider
      value={{
        movie,
        movies,
        setMovies,
        page,
        setPage,
        lastPage,
        loading,
        setLoading,
        error,
        setError,
        searchMovies,
        searchMovieById,
        validImage,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

MovieProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useMovies = () => useContext(MovieContext);
