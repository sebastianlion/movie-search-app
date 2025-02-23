import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <MovieContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        movies,
        setMovies,
        loading,
        setLoading,
        error,
        setError,
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
