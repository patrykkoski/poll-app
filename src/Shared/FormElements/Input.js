import React from "react";
import "./Input.css";

const Input = props => {
  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.changeHandler}
        className={props.inputClasses}
        value={props.val}
      />
    ) : (
      <textarea
        rows={props.rows}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.changeHandler}
        className={props.inputClasses}
        value={props.val}
      />
    );

  return element;
};

export default Input;
