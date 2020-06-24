import React from "react";
import List from "../List";

const Board = (props) => {
  let lists = props.lists.map((list) => {
    return <List key={list.id} />;
  });

  return (
    <React.Fragment>
      <header>
        <ul>
          <li id="title">My Title</li>
          <li class="star-icon icon"></li>
          <li class="private private-icon icon">Private</li>
        </ul>
        <div class="menu">
          <i class="more-icon sm-icon"></i>Show Menu
        </div>
        <div class="subscribed">
          <i class="sub-icon sm-icon"></i>Subscribed
        </div>
      </header>
      <main>
        <div id="list-container" class="list-container">
          <div id="existing-lists" class="existing-lists">
            {lists}
          </div>
          <div id="new-list" class="new-list">
            <span>Add a list...</span>
            <input type="text" placeholder="Add a list..." />
            <div>
              <input type="submit" class="button" value="Save" />
              <i class="x-icon icon"></i>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Board;
