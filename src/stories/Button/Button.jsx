import React from "react";
import PropTypes from 'prop-types';
import "./button.css"

// const getStyles = (...args) => ["button", "btn-${size}", ...args].filter(Boolean).join(" ")
// <button className={getStyles(color)}>

function Button({ label, size, color, iconStart, iconEnd, variant, ...props }) {

  return (
    <button className={['button', `btn-${size}`, `btn-${color}`, `btn-${variant}`].join(' ')} {...props}>
      {iconStart && <span className="material-icons-round">{iconStart}</span>}
      {label}
      {iconEnd && <span className="material-icons-round">{iconEnd}</span>}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["default", "primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  iconStart: PropTypes.string,
  iconEnd: PropTypes.string,
  variant: PropTypes.oneOf(["default", "outline", "text"]).isRequired,
};

Button.defaultProps = {
  label: "Default",
  color: "default",
  size: "md",
  variant: "default",
};

export default Button;