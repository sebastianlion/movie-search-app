import "../styles/pages/Home.css";

import { useMovies } from "../context/MovieContext";
import SearchBar from "../components/molecules/SearchBar";
import MovieCard from "../components/molecules/MovieCard";
import Loading from "../components/atoms/Loading";
import Error from "../components/atoms/Error";

const Home = () => {
  const { movies, loading, error } = useMovies();
  console.log("This is movies: ", movies);
  return (
    <div className="home">
      <h1 className="home__title">Movie Search</h1>
      <SearchBar />
      {loading && <Loading />}
      {error && <Error>{error}</Error>}
      <div className="home__movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
