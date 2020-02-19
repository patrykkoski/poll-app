import React from "react";
import Button from "../../Shared/FormElements/Button";

const PollItemFooter = props => {
  return (
    <div className="poll-item__footer">
      <Button
        disabled={props.isAnswered || !props.isAnswerSelected}
        onSubmit={props.vote}
      >
        {props.isAnswered ? "Already voted" : "Vote"}
      </Button>
      <p className="poll-item__votes-count">{props.votesCount}</p>
      <p className="poll-item__time-left">{props.timeLeft}</p>
    </div>
  );
};

export default PollItemFooter;
