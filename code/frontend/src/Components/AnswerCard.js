import React from "react";
import LikeButton from "./LikeButton";
import "./AnswerCard.css";
import Timer from './Timer'

const AnswerCard = (props) => {
  return (
    <>
      <div className="answerCard">
        <Timer />{" "}-{" "}
        {props.userid}: {" "}
        <b>{props.data}</b>
        <LikeButton data={props.data} />
      </div>
    </>
  );
};

export default AnswerCard;
