import React from "react";
import PropTypes from 'prop-types';
import "./button.css"

const getStyles = (...args) => ["button", ...args].filter(Boolean).join(" ")

const Button = ({ children, type }) => {
  return (
    <button className={getStyles(type)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
};

Button.defaultProps = {
  children: "Hello",
  type: "primary",
};

export default Button;