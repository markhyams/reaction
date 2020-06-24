import React from "react";

const Card = (props) => {
  return (
    <div class="card-background">
      <div class="card ">
        <i class="edit-toggle edit-icon sm-icon"></i>
        <div class="card-info">
          <div class="card-label green colorblindable"></div>
          <div class="card-label yellow colorblindable"></div>
          <div class="card-label red colorblindable"></div>
          <div class="card-label orange colorblindable"></div>
          <div class="card-label blue colorblindable"></div>
          <div class="card-label purple colorblindable"></div>
          <p>
            Cards do many cool things. Click on this card to open it and learn
            more...
          </p>
        </div>
        <div class="card-icons">
          <i class="clock-icon sm-icon overdue-recent completed">Aug 4</i>
          <i class="description-icon sm-icon"></i>
          <i class="comment-icon sm-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
