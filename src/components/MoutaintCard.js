import React from "react";

export default function MountaintCard(props) {
  return (
    <div
      className="mountaint-"
      style={{ width: "1000px", backgroundColor: "lightgrey" }}
    >
      <h1 className="mountaint-head">{props.header}</h1>
      <p className="mountaint-body">{props.body}</p>
      <br />
      <div>
        <img
          className="mountaint-img"
          src={`img/${props.img}`}
          alt=""
          style={{ width: "800px", height: "500px" }}
        />
      </div>
    </div>
  );
}
