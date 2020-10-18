import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {

  return (
    <div className="hero-container cover">
      {/* <img src='/img/img1.jpg' style={{width: '100%', height: '100%'}}/> */}
      <video src={`${process.env.PUBLIC_URL}/videos/saigon.mp4`} autoPlay loop muted />
      <h1>Vietnam Destinations</h1>
      {/* <p>Sign up and receive recommendations about Vietnam </p> */}
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          link={"/sign-up"}
        >
          Sign up here
        </Button>{' '}
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          link={`https://www.youtube.com/watch?v=3M0TmN2TsK4&t=2s`}
          external={true}
        >
          <div>
            Watch video
            <i className="far fa-play-circle" />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
