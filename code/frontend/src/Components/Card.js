import React from "react";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
import "./Card.css";
import Timer from "./Timer";
import Answer from "./Answer";

const Card = (props) => {
  return (
    <>
      <div className="question">
        <Timer />
        {" "}-{" "}
        {props.userid}: {" "}
        <b>{props.comment}</b>
        <LikeButton />
        <DislikeButton />
      </div>

      <div className="answer">
        <Answer userid={props.userid} />
      </div>

    </>
  );
};

export default Card;
