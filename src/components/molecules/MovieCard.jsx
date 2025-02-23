import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/components/MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="movie-card__poster"
      />
      <h3 className="movie-card__title">{movie.Title}</h3>
      <p className="movie-card__year">{movie.Year}</p>
      <Link
        to={`/movie/${movie.imdbID}`}
        className="movie-card__details-button"
      >
        View Details
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
