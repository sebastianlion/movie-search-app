import PropTypes from "prop-types";

import "../../styles/components/Error.css";

const Error = ({ children }) => {
  return <span className="error">{children}</span>;
};

Error.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Error;
