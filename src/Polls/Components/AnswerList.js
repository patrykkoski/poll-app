import React from "react";
import AnswerItem from "./AnswerItem";

const AnswerList = props => {
  const answers = props.answers.map((answer, id) => {
    return (
      <AnswerItem
        id={id}
        key={id}
        text={answer.text}
        isRemovable={answer.isRemovable}
        changeAnswerHandler={props.changeAnswerHandler}
        removeAnswer={props.removeAnswer}
        isValid={answer.isValid}
        isTouched={answer.isTouched}
        answerTouchHandler={props.answerTouchHandler}
      />
    );
  });
  return answers;
};

export default AnswerList;
