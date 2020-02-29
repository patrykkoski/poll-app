import React, { useReducer } from "react";
import Card from "../../Shared/UIElements/Card";
import Button from "../../Shared/FormElements/Button";
import { NavLink } from "react-router-dom";
import "./Auth.css";
import {
  validate,
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH
} from "../../Shared/Utils/validators";
import FormItem from "../Components/FormItem";

const authReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      let newArr = state.inputs.slice();
      let index = newArr.findIndex(x => x.id === action.id);
      newArr[index].text = action.text;
      newArr[index].isValid = validate(action.text, newArr[index].validators);
      return {
        ...state,
        inputs: newArr
      };
    }
    case "TOUCH": {
      let newArr = state.inputs.slice();
      let index = newArr.findIndex(x => x.id === action.id);
      newArr[index].isTouched = true;
      return {
        ...state,
        inputs: newArr
      };
    }
    default:
      return {
        ...state
      };
  }
};

const SignUp = () => {
  const [state, dispatch] = useReducer(authReducer, {
    inputs: [
      {
        id: "email",
        text: "",
        isValid: false,
        isTouched: false,
        validators: [VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]
      },
      {
        id: "password",
        text: "",
        isValid: false,
        isTouched: false,
        validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]
      },
      {
        id: "firstname",
        text: "",
        isValid: false,
        isTouched: false,
        validators: [VALIDATOR_REQUIRE()]
      },
      {
        id: "lastname",
        text: "",
        isValid: false,
        isTouched: false,
        validators: [VALIDATOR_REQUIRE()]
      }
    ]
  });

  const changeHandler = (text, id) => {
    dispatch({ type: "CHANGE", text: text, id: id });
  };

  const touchHandler = id => {
    dispatch({ type: "TOUCH", id: id });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    let jsonData = {};
    let formValid = state.inputs.map(input => {
      jsonData[input.id] = input.text;
      if (!input.isValid) return false;
    });
    if (!formValid.includes(false)) {
      console.log(jsonData);
    }
  };

  return (
    <form className="auth__sign-up">
      <Card>
        <h3 className="auth__title">Sign up</h3>
        <ul className="auth__list">
          {state.inputs.map(input => {
            return (
              <FormItem
                key={input.id}
                id={input.id}
                element="input"
                placeholder={`Type your ${input.id}`}
                inputClasses="auth__input"
                val={input.text}
                changeHandler={changeHandler}
                isValid={input.isValid}
                touchHandler={touchHandler}
                isTouched={input.isTouched}
              />
            );
          })}

          <li style={{ textAlign: "center" }}>
            <Button
              onSubmit={onSubmitHandler}
              btnClass="auth__submit btn-success"
            >
              Sign up
            </Button>
            <NavLink to="/auth/signin" className="auth__switch-type">
              Already have account? Switch to sign in.
            </NavLink>
          </li>
        </ul>
      </Card>
    </form>
  );
};

export default SignUp;
