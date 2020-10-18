import React from "react";

export default function BeachCard(props) {
  return (
    <div
      className="beach-"
      style={{
        width: "100%",
        maxWidth: "1100px",
        backgroundColor: "lightgrey",
        borderRadius: "10px",
        backgroundImage: "linear-gradient(lightgrey,#55e2fb, #37c0b5)",
      }}
    >
      
      <div>
        <h1 className="beach-header">{props.header}</h1>
      <p className="beach-body">{props.body}</p>
      <br />
        <img
          className="beach-img"
          src={`img/${props.img}`}
          alt=""
          style={{ width: "100%", maxWidth: "700px", maxHeight: "500px" }}
        />
      </div>
    </div>
  );
}
