import React from "react";

const Button = ({ className, buttonText, onclick }) => {
  return <button className={className}>{buttonText}</button>;
};

export default Button;
