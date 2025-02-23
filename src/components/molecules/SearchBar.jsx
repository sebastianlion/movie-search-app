import { useState, useEffect, useCallback } from "react";

import "../../styles/components/SearchBar.css";

import { useMovies } from "../../context/MovieContext";
import SearchInput from "../atoms/SearchInput";
import SearchButton from "../atoms/SearchButton";

const SearchBar = () => {
  const { searchMovies, page, setPage, setMovies, error, setError } =
    useMovies();

  const [query, setQuery] = useState("");

  const handleSearch = useCallback(() => {
    if (query.trim() !== "") {
      if (error) {
        setMovies([]);
        setPage(1);
      }
      searchMovies(query, page);
    } else {
      setMovies([]);
      setError("");
      setPage(1);
    }
  }, [query, page]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <SearchInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SearchButton onClick={() => handleSearch()} />
    </div>
  );
};

export default SearchBar;
