import React from "react";

export default function FoodCard(props) {
  return (
    <div
      className="e"
      style={{
        width: "400px",
        background: "rgb(253,200,48)",
        margin: "7px",
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(160deg, rgba(253,200,48,0.7693452380952381) 35%, rgba(243,115,53,0.5284488795518207) 100%)'
      }}
    >
      <h1 className="c">{props.header}</h1>
      <p className="para">{props.body}</p>
      <br />
      <div>
        <img
          className="c"
          src={`img/${props.img}`}
          alt=""
          style={{ width: "300px", height: "300px" }}
        />
      </div>
    </div>
  );
}
