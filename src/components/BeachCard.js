import React from "react";

export default function BeachCard(props) {
  return (
    <div
      className="beach-"
      style={{
        width: "1100px",
        backgroundColor: "lightgrey",
        borderRadius: "10px",
        backgroundImage: "linear-gradient(lightgrey,#55e2fb, #37c0b5)",
      }}
    >
      <h1 className="beach-header">{props.header}</h1>
      <p className="beach-body">{props.body}</p>
      <br />
      <div>
        <img
          className="beach-img"
          src={`img/${props.img}`}
          alt=""
          style={{ width: "700px", height: "500px" }}
        />
      </div>
    </div>
  );
}
