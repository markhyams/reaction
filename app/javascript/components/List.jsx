import React from "react";
import Card from "./Card";

const List = (props) => {
  return (
    <div class="list-wrapper">
      <div class="list-background">
        <div class="list">
          <a class="more-icon sm-icon" href=""></a>
          <div>
            <p class="list-title">Stuff to try (this is a list)</p>
          </div>
          <div class="add-dropdown add-top">
            <div class="card"></div>
            <a class="button">Add</a>
            <i class="x-icon icon"></i>
            <div class="add-options">
              <span>...</span>
            </div>
          </div>
          <div id="cards-container" data-id="list-1-cards">
            {[1, 2, 3].map((_, idx) => {
              return <Card key={idx} />;
            })}
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
          <div class="add-dropdown add-bottom">
            <div class="card">
              <div class="card-info"></div>
              <textarea name="add-card"></textarea>
              <div class="members"></div>
            </div>
            <a class="button">Add</a>
            <i class="x-icon icon"></i>
            <div class="add-options">
              <span>...</span>
            </div>
          </div>
          <div class="add-card-toggle" data-position="bottom">
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
