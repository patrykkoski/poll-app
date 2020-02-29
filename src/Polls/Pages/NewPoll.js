import React, { useReducer } from "react";
import Card from "../../Shared/UIElements/Card";
import Button from "../../Shared/FormElements/Button";
import AnswerList from "../Components/AnswerList";
import Input from "../../Shared/FormElements/Input";
import "./NewPoll.css";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  validate
} from "../../Shared/Utils/validators";

const newPollReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ANSWER":
      return {
        ...state,
        answerList: [
          ...state.answerList,
          { text: "", isRemovable: true, isValid: false, isTouched: false }
        ]
      };

    case "QUESTION_CHANGE":
      return {
        ...state,
        question: {
          ...state.question,
          text: action.text,
          isValid: validate(action.text, [
            VALIDATOR_REQUIRE(),
            VALIDATOR_MINLENGTH(5)
          ])
        }
      };

    case "QUESTION_TOUCHED":
      return {
        ...state,
        question: {
          ...state.question,
          isTouched: true
        }
      };

    case "ANSWER_CHANGE": {
      let newAnswerList = state.answerList.slice();
      newAnswerList[action.id].text = action.text;
      newAnswerList[action.id].isValid = validate(action.text, [
        VALIDATOR_REQUIRE()
      ]);
      return {
        ...state,
        answerList: newAnswerList
      };
    }

    case "ANSWER_TOUCHED": {
      let newAnswerList = state.answerList.slice();
      newAnswerList[action.id].isTouched = true;
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
    question: {
      text: "",
      isValid: false,
      isTouched: false
    },
    answerList: [
      { text: "", isRemovable: false, isValid: false, isTouched: false },
      { text: "", isRemovable: false, isValid: false, isTouched: false }
    ]
  });

  const changeQuestionHandler = text => {
    dispatch({ type: "QUESTION_CHANGE", text: text });
  };

  const questionTouchHandler = () => {
    dispatch({ type: "QUESTION_TOUCHED" });
  };

  const changeAnswerHandler = (text, id) => {
    dispatch({ type: "ANSWER_CHANGE", text: text, id: id });
  };

  const answerTouchHandler = id => {
    dispatch({ type: "ANSWER_TOUCHED", id: id });
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
    const areAnswersValid = state.answerList.map(answer => {
      if (!answer.isValid) return false;
      return true;
    });

    if (state.question.isValid && !areAnswersValid.includes(false)) {
      const jsonData = {
        question: state.question,
        answers: state.answerList.map(answer => {
          return answer.text;
        })
      };
      console.log(jsonData);
    } else {
      console.log("Complete all inputs to add question.");
    }
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
              val={state.question.text}
              changeHandler={e => {
                changeQuestionHandler(e.target.value);
              }}
              isValid={state.question.isValid}
              isTouched={state.question.isTouched}
              touchHandler={questionTouchHandler}
            />
          </li>
          <AnswerList
            answers={state.answerList}
            changeAnswerHandler={changeAnswerHandler}
            removeAnswer={removeAnswer}
            answerTouchHandler={answerTouchHandler}
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
