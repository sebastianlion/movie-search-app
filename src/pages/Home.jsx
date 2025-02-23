import "../styles/pages/Home.css";

import { useMovies } from "../context/MovieContext";
import SearchBar from "../components/molecules/SearchBar";
import MovieCard from "../components/molecules/MovieCard";

const Home = () => {
  const { movies, loading, error } = useMovies();
  return (
    <div>
      <h1>Movie Search</h1>
      <SearchBar />
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
