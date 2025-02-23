import { useRef, useCallback } from "react";

import "../styles/pages/Home.css";

import { useMovies } from "../context/MovieContext";
import SearchBar from "../components/molecules/SearchBar";
import MovieCard from "../components/molecules/MovieCard";
import Loading from "../components/atoms/Loading";
import Error from "../components/atoms/Error";

const Home = () => {
  const { movies, loading, error, page, setPage, lastPage } = useMovies();

  const observer = useRef();

  const lastMovieElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && page < lastPage) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, setPage, page]
  );

  return (
    <div className="home">
      <h1 className="home__title">Movie Search</h1>
      <SearchBar />
      {loading && <Loading />}
      {error && <Error>{error}</Error>}
      <div className="home__movie-list">
        {error === "" &&
          movies.map((movie, index) => {
            if (movies.length > 9 && movies.length === index + 1) {
              return (
                <div ref={lastMovieElementRef} key={movie.imdbID}>
                  <MovieCard key={movie.imdbID} movie={movie} />
                </div>
              );
            } else {
              return <MovieCard key={movie.imdbID} movie={movie} />;
            }
          })}
      </div>
    </div>
  );
};

export default Home;
