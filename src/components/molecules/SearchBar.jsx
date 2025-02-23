import { useState, useEffect } from "react";

import "../../styles/components/SearchBar.css";

import { useMovies } from "../../context/MovieContext";
import SearchInput from "../atoms/SearchInput";
import SearchButton from "../atoms/SearchButton";

const SearchBar = () => {
  const { searchMovies } = useMovies();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() !== "") {
        searchMovies(query);
      }
    }, 500);
  }, [query]);

  return (
    <div className="search-bar">
      <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />
      {/* <SearchButton onClick={() => console.log("Button clicked")} /> */}
    </div>
  );
};

export default SearchBar;
