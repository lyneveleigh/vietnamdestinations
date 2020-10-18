import React from "react";
import "../../App.css";
import MountaintCard from "../MoutaintCard";
import "./Moutaint.css";
import database from "../../database";

export default function Mountaint() {
  return (
    <>
      <h1 className="mountaint">
        {/* <video src ="/videos/sapa.mp4" style={{height: 450}} autoPlay loop muted /> */}
        Amazing Mountains
      </h1>
      <div>
        <p className="mountaint-text">
          "Let's explore amazing mountains and unbeliable caves in Vietnam!!!"
          <i class="fas fa-mountain"></i>
        </p>
      </div>

      <div className="mountaint-body">
        <div className="mountaint-info">
          {database.mountains.map((mountain) => {
            return (
              <MountaintCard
                header={mountain.name}
                body={mountain.description}
                img={mountain.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
