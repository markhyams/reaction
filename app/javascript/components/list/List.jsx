import React from 'react';
import SummaryCardsContainer from '../card/SummaryCardsContainer.jsx';
import CreateCardContainer from '../card/CreateCardContainer.jsx';

class List extends React.Component {
  state = {
    editTitle: false,
    title: this.props.title,
    createCardOpen: false,
  };

  handleChange = e => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmitTitle = () => {
    if (this.state.title.trim() === '') {
      this.setState({
        title: this.props.title,
        editTitle: false, //this.props.title,
      });
      return;
    }

    const updatedList = {
      list: { title: this.state.title },
    };
    this.props.onUpdateTitle(updatedList, this.props.id, () => {
      this.setState({
        editTitle: false,
      });
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSubmitTitle();
    }
  };

  handleAddCardOpen = () => {
    this.setState({
      createCardOpen: true,
    });
  };

  handleAddCardClose = () => {
    this.setState({
      createCardOpen: false,
    });
  };

  render() {
    return (
      <div
        className={`list-wrapper ${
          this.state.createCardOpen ? 'add-dropdown-active' : ''
        }`}
      >
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>
              {!this.state.editTitle && (
                <p
                  onClick={() => {
                    this.setState({
                      editTitle: true,
                    });
                  }}
                  className="list-title"
                >
                  {this.props.title}
                </p>
              )}
              {this.state.editTitle && (
                <input
                  onBlur={this.handleSubmitTitle}
                  onKeyPress={this.handleKeyPress}
                  onChange={this.handleChange}
                  type="text"
                  class="list-title"
                  value={this.state.title}
                  autofocus="true"
                />
              )}
            </div>
            <div className="add-dropdown add-top">
              <div className="card"></div>
              <a className="button">Add</a>
              <i className="x-icon icon"></i>
              <div className="add-options">
                <span>...</span>
              </div>
            </div>
            <SummaryCardsContainer listId={this.props.id} />
            <CreateCardContainer
              listId={this.props.id}
              onAddCardOpen={this.handleAddCardOpen}
              createCardOpen={this.state.createCardOpen}
              onAddCardClose={this.handleAddCardClose}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default List;
