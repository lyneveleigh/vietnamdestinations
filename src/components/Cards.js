import React from "react";
import CardItem from "./CardItem";
import "./Card.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these amazing destinations in Vietnam!!!</h1>

      <div className="cards_container">
        {/* <div className="image">
          <img id="img" onClick="changeImage()" src="img/img1.jpg" alt="" />
        </div> */}
        <div className ='cards_wrapper'>
                    <ul className='cards_item'>
                        <CardItem 
                        src="img/gif1.gif"
                        text ="Beaches"
                        label ="explore Vietnam"
                        path='/beaches'
                        />

                        <CardItem 
                        src="img/gif.gif"
                        text ="Mountains"
                        label ="explore Vietnam"
                        path='/mountaint'
                        />

                        <CardItem 
                        src="img/gita.gif"
                        text = "Street food"
                        label ="explore Vietnam"
                        path='/streetfood'
                        />

                    </ul>
                </div>
      </div>
    </div>
  );
}

export default Cards;
