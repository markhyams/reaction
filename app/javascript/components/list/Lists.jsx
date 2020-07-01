import React from 'react';
import ListContainer from './ListContainer';

class Lists extends React.Component {
  state = {
    isAddCardFormOpen: false,
  };

  toggleAddCardFormOpen = () => {
    this.setState(prevState => {
      return { isAddCardFormOpen: !prevState.isAddCardFormOpen };
    });
  };

  render() {
    return (
      <div id="existing-lists" className="existing-lists">
        {this.props.lists.map(list => (
          <ListContainer
            isAddCardFormOpen={this.state.isAddCardFormOpen}
            onToggleCardForm={this.toggleAddCardFormOpen}
            key={list.id}
            {...list}
          />
        ))}
      </div>
    );
  }
}

export default Lists;
