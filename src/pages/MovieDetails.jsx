import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "../styles/pages/MovieDetails.css";

import { useMovies } from "../context/MovieContext";
import Loading from "../components/atoms/Loading";
import Error from "../components/atoms/Error";

const MovieDetails = () => {
  const { id } = useParams();
  const { searchMovieById, movie, loading, error, validImage } = useMovies();

  useEffect(() => {
    searchMovieById(id);
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error>{error}</Error>;
  if (movie)
    return (
      <div className="movie-details">
        <div className="movie-details__card">
          <Link to="/" className="movie-details__back-button">
            Back to Search
          </Link>
          <h2 className="movie-details__title">{movie.Title}</h2>
          <img
            src={validImage(movie.Poster)}
            alt={movie.Title}
            className="movie-details__poster"
          />
          <div className="movie-details__card-description">
            <p className="movie-details__information">
              <span className="movie-details__information-span">Plot:</span>
              {movie.Plot}
            </p>
            <p className="movie-details__information">
              <span className="movie-details__information-span">Genre:</span>
              {movie.Genre}
            </p>
            <p className="movie-details__information">
              <span className="movie-details__information-span">Year:</span>
              {movie.Year}
            </p>
            <p className="movie-details__information">
              <span className="movie-details__information-span">Runtime:</span>
              {movie.Runtime}
            </p>
            <p className="movie-details__information">
              <span className="movie-details__information-span">
                Imdb rating:
              </span>
              {movie.imdbRating}
            </p>
          </div>
        </div>
      </div>
    );
};

export default MovieDetails;
