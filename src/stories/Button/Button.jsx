import React from "react";
import PropTypes from 'prop-types';
import Icon from "./Icon";
import "./button.css"

// const getStyles = (...args) => ["button", "btn-${size}", ...args].filter(Boolean).join(" ")
// <button className={getStyles(color)}>

function Button({ label, size, color, iconStart, iconEnd, variant, disableShadow, disabled, ...props }) {
  const [btnClassName, iconClassName] = getClassNames({
    color,
    size,
    variant,
    disableShadow,
    disabled,
  });

  return (
    <button className={btnClassName} {...props}>
      {iconStart && <Icon additionalClassName={iconClassName}>{iconStart}</Icon>}
      {label}
      {iconEnd && <Icon additionalClassName={iconClassName}>{iconEnd}</Icon>}
    </button>
  );
}

function getClassNames({ color, size, variant, disableShadow, disabled }) {
  const btnClassNames = ["btn"];
  const iconClassNames = [];

  btnClassNames.push(`btn--variant-${variant}`);

  if (disableShadow) btnClassNames.push("btn--no-shadow");

  btnClassNames.push(`btn--size-${size}`);

  btnClassNames.push(`btn--color-${color}`);
  iconClassNames.push(`icon--color-${color}`);

  switch (variant) {
    case "default":
      disabled ? btnClassNames.push("btn--disabled") : null;
      disabled ? iconClassNames.push("material-icons-round--disabled") : null;
      break;
    case "outline":
      disabled
        ? btnClassNames.push("btn--variant-outline-disabled")
        : null;
      disabled ? iconClassNames.push("material-icons-round--disabled") : null;
      iconClassNames.push("material-icons-round--variant");
      break;
    case "text":
      disabled ? btnClassNames.push("btn--variant-text-disabled") : null;
      disabled ? iconClassNames.push("material-icons-round--disabled") : null;
      iconClassNames.push("material-icons-round--variant");
      break;
  }

  const btnClassName = btnClassNames.join(" ");
  const iconClassName = iconClassNames.join(" ");

  return [btnClassName, iconClassName];
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["default", "primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  iconStart: PropTypes.string,
  iconEnd: PropTypes.string,
  variant: PropTypes.oneOf(["default", "outline", "text"]).isRequired,
  disableShadow: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  label: "Default",
  color: "default",
  size: "md",
  variant: "default",
};

export default Button;