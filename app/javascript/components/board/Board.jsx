import React from 'react';
import ListsContainer from '../list/ListsContainer';
import CreateListContainer from '../list/CreateListContainer';
import Card from '../card/Card';

function Board(props) {
  return (
    <React.Fragment>
      <header>
        <ul>
          <li id="title">{props.board.title}</li>
          <li className="star-icon icon"></li>
          <li className="private private-icon icon">Private</li>
        </ul>
        <div className="menu">
          <i className="more-icon sm-icon"></i>Show Menu
        </div>
        <div className="subscribed">
          <i className="sub-icon sm-icon"></i>Subscribed
        </div>
      </header>
      <main>
        <div id="list-container" className="list-container">
          <ListsContainer boardId={props.board.id} />
          <CreateListContainer boardId={props.board.id} />
        </div>
      </main>
      <div id="modal-container"></div>
      <div id="dropdown-container"></div>
    </React.Fragment>
  );
}

export default Board;
