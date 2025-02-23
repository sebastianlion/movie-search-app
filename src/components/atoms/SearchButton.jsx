import PropTypes from "prop-types";
import "../../styles/components/SearchButton.css";

const SearchButton = ({ onClick }) => {
  return (
    <button className="seach-button" onClick={onClick}>
      Search
    </button>
  );
};

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchButton;
