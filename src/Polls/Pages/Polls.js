import React from "react";
import PollList from "../Components/PollList";

const DUMMY_POLLS = [
  {
    id: 1,
    imageUrl:
      "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/p720x720/1040658_622490651133631_464443920_o.jpg?_nc_cat=106&_nc_ohc=6GLBiA36yMMAX8yugnh&_nc_ht=scontent-waw1-1.xx&_nc_tp=6&oh=a9923620c65fb6b80dbddbe0be6f6926&oe=5ECF4A23",
    author: "Patryk Koski",
    addedDate: "13.02.2020 22:12",
    question: "Jaki jest twój ulubiony język programowania?",
    answers: [
      { id: 1, name: "Java" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "C#" }
    ],
    votesCount: "3 votes",
    timeLeft: "6 days left",
    isAnswered: true,
    results: [73, 12, 15]
  },
  {
    id: 2,
    imageUrl:
      "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/p720x720/1040658_622490651133631_464443920_o.jpg?_nc_cat=106&_nc_ohc=6GLBiA36yMMAX8yugnh&_nc_ht=scontent-waw1-1.xx&_nc_tp=6&oh=a9923620c65fb6b80dbddbe0be6f6926&oe=5ECF4A23",
    author: "Patryk Koski",
    addedDate: "13.02.2020 22:12",
    question: "Jaki jest twój ulubiony język programowania?",
    answers: [
      { id: 1, name: "Java" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "C#" }
    ],
    votesCount: "3 votes",
    timeLeft: "6 days left",
    isAnswered: false,
    results: []
  }
];

const Polls = () => {
  console.log("Polls rendered");
  return (
    <ul className="poll-list">
      <PollList polls={DUMMY_POLLS} />
    </ul>
  );
};

export default Polls;
