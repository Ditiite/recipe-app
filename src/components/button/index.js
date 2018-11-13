// @flow
import React from "react";

type Props = {
  label: string,
  type: string,
  onClick: () => mixed,
  style?: {},
  className: string
};

const Button = ({ label, type, onClick, className }: Props) => (
  <button
    label={label}
    type={type}
    onClick={onClick}
    className={`Button ${className}`}>
    {label}
  </button>
);

export default Button;
