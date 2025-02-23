import PropTypes from "prop-types";
import "../../styles/components/SearchInput.css";

const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search for a movie..."
      value={value}
      onChange={onChange}
    />
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
