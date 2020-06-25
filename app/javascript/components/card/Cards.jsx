import React from "react";
import Card from "./Card";

function Cards(props) {
  return (
    <div id="cards-container" data-id="list-1-cards">
      {props.cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
      <div class="card-background">
        <div class="card ">
          <i class="edit-toggle edit-icon sm-icon"></i>
          <div class="cover-image"></div>
          <div class="card-info">
            <p>Use the + in the top menu to make your first board now.</p>
          </div>
          <div class="card-icons"></div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
