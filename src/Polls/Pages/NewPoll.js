import React, { useState, useReducer } from "react";
import Card from "../../Shared/UIElements/Card";
import Button from "../../Shared/FormElements/Button";
import AnswerList from "../Components/AnswerList";
import Input from "../../Shared/FormElements/Input";
import "./NewPoll.css";

const newPollReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ANSWER":
      return {
        ...state,
        answerList: [
          ...state.answerList,
          { text: "", isRemovable: true, isValid: false }
        ]
      };

    case "QUESTION_CHANGE":
      return {
        ...state,
        question: action.text
      };

    case "ANSWER_CHANGE": {
      let newAnswerList = state.answerList.slice();
      newAnswerList[action.id].text = action.text;
      if (action.text !== "") {
        newAnswerList[action.id].isValid = true;
      } else {
        newAnswerList[action.id].isValid = false;
      }
      return {
        ...state,
        answerList: newAnswerList
      };
    }
    case "ANSWER_DELETE": {
      let newAnswerList = state.answerList.slice();
      newAnswerList.splice(action.id, 1);
      return {
        ...state,
        answerList: newAnswerList
      };
    }
    default:
      return state;
  }
};

const NewPoll = () => {
  console.log("NewPoll rendered");

  const [state, dispatch] = useReducer(newPollReducer, {
    question: "",
    answerList: [
      { text: "", isRemovable: false, isValid: false },
      { text: "", isRemovable: false, isValid: false }
    ]
  });

  const changeQuestionHandler = text => {
    dispatch({ type: "QUESTION_CHANGE", text: text });
  };

  const changeAnswerHandler = (text, id) => {
    dispatch({ type: "ANSWER_CHANGE", text: text, id: id });
  };

  const addAnswer = e => {
    e.preventDefault();
    dispatch({ type: "ADD_ANSWER" });
  };

  const removeAnswer = id => {
    dispatch({ type: "ANSWER_DELETE", id: id });
  };

  const submitPoll = e => {
    e.preventDefault();

    const jsonData = {
      question: state.question,
      answers: state.answerList.map(answer => {
        return answer.text;
      })
    };
    console.log(jsonData);
  };

  return (
    <form className="new-poll">
      <Card>
        <h3 className="new-poll__title">Ask the question</h3>
        <ul className="new-poll__list">
          <li>
            <Input
              element="textarea"
              placeholder="Type your question"
              rows={3}
              type="text"
              inputClasses="new-poll__input new-poll__question"
              val={state.question}
              changeHandler={e => {
                changeQuestionHandler(e.target.value);
              }}
            />
          </li>
          <AnswerList
            answers={state.answerList}
            changeAnswerHandler={changeAnswerHandler}
            removeAnswer={removeAnswer}
          />
          <li>
            <Button onSubmit={addAnswer}>Add answer</Button>
          </li>
          <li>
            <Button
              btnClass="new-poll__submit-poll btn-success"
              onSubmit={submitPoll}
            >
              Submit
            </Button>
          </li>
        </ul>
      </Card>
    </form>
  );
};

export default NewPoll;
