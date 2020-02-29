import React from "react";
import Input from "../../Shared/FormElements/Input";

const FormItem = props => {
  return (
    <li>
      <Input
        element={props.element}
        placeholder={props.placeholder}
        type="text"
        inputClasses={props.inputClasses}
        val={props.val}
        isValid={props.isValid}
        touchHandler={() => {
          props.touchHandler(props.id);
        }}
        isTouched={props.isTouched}
        changeHandler={e => {
          props.changeHandler(e.target.value, props.id);
        }}
      />
    </li>
  );
};

export default FormItem;
