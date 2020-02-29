import React from "react";
import "./Input.css";

const Input = props => {
  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.changeHandler}
        className={`${!props.isValid &&
          props.isTouched &&
          "form-input__invalid"} ${props.inputClasses}`}
        value={props.val}
        onBlur={props.touchHandler}
      />
    ) : (
      <textarea
        rows={props.rows}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.changeHandler}
        className={`${!props.isValid &&
          props.isTouched &&
          "form-input__invalid"} ${props.inputClasses}`}
        value={props.val}
        onBlur={props.touchHandler}
      />
    );

  return <>{element}</>;
};

export default Input;
