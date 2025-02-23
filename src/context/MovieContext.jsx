import { createContext, useState, useContext, useCallback } from "react";
import PropTypes from "prop-types";

import { fetchMovies, fetchMoviesById } from "../services/movieService";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovies = useCallback(async (query) => {
    setLoading(true);
    setError("");
    try {
      const movies = await fetchMovies(query);
      setMovies(movies);
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

  return (
    <MovieContext.Provider
      value={{
        movie,
        movies,
        setMovies,
        loading,
        setLoading,
        error,
        setError,
        searchMovies,
        searchMovieById,
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
