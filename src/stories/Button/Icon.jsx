import PropTypes from "prop-types";
import "./Icon.css";

function Icon({ children, additionalClassName }) {
  const className = `material-icons-round ${additionalClassName}`;
  return <span className={className}>{children}</span>;
}

Icon.propTypes = {
  children: PropTypes.string.isRequired,
  additionalClassName: PropTypes.string,
};

export default Icon;