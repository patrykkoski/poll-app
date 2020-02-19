import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <button
      className={`button ${props.btnClass}`}
      disabled={props.disabled}
      onClick={props.onSubmit}
    >
      {props.children}
    </button>
  );
};

export default Button;
