import React from "react";
import SummaryCard from "./SummaryCard";

function SummaryCards(props) {
  return (
    <div id="cards-container" data-id="list-1-cards">
      {props.cards.map((card) => (
        <SummaryCard key={card.id} {...card} />
      ))}
      <div className="card-background">
        <div className="card ">
          <i className="edit-toggle edit-icon sm-icon"></i>
          <div className="cover-image"></div>
          <div className="card-info">
            <p>Use the + in the top menu to make your first board now.</p>
          </div>
          <div className="card-icons"></div>
        </div>
      </div>
    </div>
  );
}

export default SummaryCards;
