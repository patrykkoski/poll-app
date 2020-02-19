import React from "react";

const PollItemContent = props => {
  return (
    <div className="poll-item__content">
      <h3 className="poll-item_question">{props.question}</h3>
      {props.isAnswered ? (
        <ul className="poll-item__answer-list">{props.results}</ul>
      ) : (
        <ul className="poll-item__answer-list">{props.answers}</ul>
      )}
    </div>
  );
};

export default PollItemContent;
