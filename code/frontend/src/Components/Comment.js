import React from "react";
import Card from "./Card";
// import Answer from "./Answer";

const Comment = (props) => {
  const divStyleComment = {
    display: "normal",
    margin: "0.5rem",
    flexDirection: "row",
    justifyContent: "space-around"
  };

  return (
    <div style={divStyleComment}>
      <hr></hr>
      <Card comment={props.comment}/>
    </div>
  );
};

export default Comment;
