import PropTypes from "prop-types";
import "../../styles/components/SearchInput.css";

const SearchInput = ({ value, onChange, onKeyDown }) => {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search for a movie..."
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default SearchInput;
