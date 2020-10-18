import React from "react";

export default function MountaintCard(props) {
  return (
    <div
      className="mountaint-"
      style={{ width: "110%",
      maxWidth: "1000px",
      backgroundColor: "lightgrey",
      borderRadius: "10px" }}
    >
      <h1 className="mountaint-head">{props.header}</h1>
      <p className="mountaint-body">{props.body}</p>
      <br />
      <div>
        <img
          className="mountaint-img"
          src={`img/${props.img}`}
          alt=""
          style={{ width: "100%", maxWidth: "700px", maxHeight: "500px" }}
        />
      </div>
    </div>
  );
}
