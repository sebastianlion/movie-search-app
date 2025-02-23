import { useEffect } from "react";

import "../../styles/components/SearchBar.css";

import { useMovies } from "../../context/MovieContext";
import SearchInput from "../atoms/SearchInput";
import SearchButton from "../atoms/SearchButton";
import { fetchMovies } from "../../services/movieService";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, setLoading, setMovies, setError } =
    useMovies();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim() !== "") {
        const searchMovies = async () => {
          setLoading(true);
          setError("");
          try {
            const movies = await fetchMovies(searchTerm);
            setMovies(movies);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };

        searchMovies();
      }
    }, 500);
  }, [searchTerm, setLoading, setMovies, setError]);

  // const handleSearch = async () => {
  //   setLoading(true);
  //   setError("");
  //   try {
  //     const movies = await fetchMovies(searchTerm);
  //     setMovies(movies);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }

  // };

  return (
    <div className="search-bar">
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchButton onClick={() => console.log("Button clicked")} />
      {/* <SearchButton onClick={handleSearch} /> */}
    </div>
  );
};

export default SearchBar;
