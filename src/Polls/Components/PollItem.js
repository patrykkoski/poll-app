import React, { useState } from "react";
import PollItemHeader from "./PollItemHeader";
import PollItemContent from "./PollItemContent";
import PollItemFooter from "./PollItemFooter";
import "./PollItem.css";
import Card from "../../Shared/UIElements/Card";

const PollItem = props => {
  console.log("Poll item rendered.");

  const [selectedAnswer, setSelectedAnswer] = useState();

  const vote = e => {
    e.preventDefault();
    //TODO
    // puknięcie resta (post) z id ankiety, id odpowiedzi, id usera, który odpowiada
    // w odpowiedzi rest (get) z nowymi danymi konretnej ankiety. Należy ją zrerenderować
    // obecnie bez userId
    const o = {
      pollId: props.id,
      answerId: selectedAnswer
    };
    console.log(o);
  };

  const answers = props.answers.map(answer => {
    return (
      <li key={answer.id} className="poll-item__answer-wrapper">
        <input
          id={answer.id}
          type="radio"
          name={answer.name}
          checked={selectedAnswer === answer.id}
          onChange={() => setSelectedAnswer(answer.id)}
        />
        <label className="poll-item__answer" htmlFor={answer.id}>
          {answer.name}
        </label>
      </li>
    );
  });

  const results = props.results.map((result, id) => {
    return (
      <div
        key={id}
        className="poll-item__progress-bar"
        style={{ width: `${result}%` }}
      >
        {`${result}% ${props.answers[id].name}`}
      </div>
    );
  });

  return (
    <form className="poll-item">
      <Card>
        <PollItemHeader
          imageUrl={props.imageUrl}
          author={props.author}
          addedDate={props.addedDate}
        />
        <PollItemContent
          question={props.question}
          isAnswered={props.isAnswered}
          results={results}
          answers={answers}
        />
        <PollItemFooter
          isAnswered={props.isAnswered}
          votesCount={props.votesCount}
          timeLeft={props.timeLeft}
          vote={vote}
          isAnswerSelected={selectedAnswer}
        />
      </Card>
    </form>
  );
};

export default PollItem;
