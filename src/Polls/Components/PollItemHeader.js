import React from "react";

const PollItemHeader = props => {
  return (
    <div className="poll-item__header">
      <div className="poll-item__image-wrapper">
        <img src={props.imageUrl} alt={props.author} />
      </div>
      <div className="poll-item__user-info">
        <h3>{props.author}</h3>
        <p className="poll-item__added-date">{props.addedDate}</p>
      </div>
    </div>
  );
};

export default PollItemHeader;
