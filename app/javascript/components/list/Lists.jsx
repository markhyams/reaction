import React from 'react';
import ListContainer from './ListContainer';

function Lists(props) {
  return (
    <div id="existing-lists" className="existing-lists">
      {props.lists.map(list => (
        <ListContainer key={list.id} {...list} />
      ))}
    </div>
  );
}

export default Lists;
