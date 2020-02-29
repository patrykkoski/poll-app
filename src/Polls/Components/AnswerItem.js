import React from "react";
import Input from "../../Shared/FormElements/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const AnswerItem = props => {
  return !props.isRemovable ? (
    <li>
      <Input
        element="input"
        type="text"
        inputClasses="new-poll__input new-poll__answer"
        placeholder="Answer"
        changeHandler={e => {
          props.changeAnswerHandler(e.target.value, props.id);
        }}
        val={props.text}
        isValid={props.isValid}
        touchHandler={() => props.answerTouchHandler(props.id)}
        isTouched={props.isTouched}
      />
    </li>
  ) : (
    <li className="new-poll__list-item-flexible">
      <Input
        element="input"
        type="text"
        inputClasses="new-poll__input new-poll__answer new-poll__answer-removable"
        placeholder="Answer"
        changeHandler={e => {
          props.changeAnswerHandler(e.target.value, props.id);
        }}
        val={props.text}
        isValid={props.isValid}
        touchHandler={() => props.answerTouchHandler(props.id)}
        isTouched={props.isTouched}
      />
      <FontAwesomeIcon
        className="new-poll__remove-question"
        icon={faTimesCircle}
        onClick={() => {
          props.removeAnswer(props.id);
        }}
      />
    </li>
  );
};

export default AnswerItem;
