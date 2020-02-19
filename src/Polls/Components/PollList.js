import React from "react";
import PollItem from "./PollItem";
import "./PollItem.css";

const PollList = props => {
  console.log("pollList rendered");
  return props.polls.map(poll => {
    return (
      <PollItem
        id={poll.id}
        key={poll.id}
        imageUrl={poll.imageUrl}
        author={poll.author}
        addedDate={poll.addedDate}
        question={poll.question}
        answers={poll.answers}
        votesCount={poll.votesCount}
        timeLeft={poll.timeLeft}
        isAnswered={poll.isAnswered}
        results={poll.results}
      />
    );
  });
};

export default PollList;
