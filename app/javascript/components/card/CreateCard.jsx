import React from 'react';

class CreateCard extends React.Component {
  state = {
    title: '',
  };

  handleChange = e => {
    this.setState({
      title: e.target.value,
    });
  };

  reset = () => {
    this.setState({ title: '' });
  };

  handleSaveCard = e => {
    e.preventDefault();
    if (this.state.title.trim() === '') return;

    const newCard = {
      list_id: this.props.listId,
      card: {
        title: this.state.title,
      },
    };

    this.props.onAddCard(newCard, () => {
      this.reset();
      this.props.onAddCardClose();
    });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={`add-dropdown add-bottom ${
            this.props.createCardOpen ? 'active-card' : ''
          }`}
        >
          <div className="card">
            <div className="card-info"></div>
            <textarea
              onChange={this.handleChange}
              name="add-card"
              value={this.state.title}
            ></textarea>
            <div className="members"></div>
          </div>
          <a onClick={this.handleSaveCard} className="button">
            Add
          </a>
          <i
            onClick={this.props.onAddCardClose}
            className="x-icon icon"
          ></i>
          <div className="add-options">
            <span>...</span>
          </div>
        </div>
        <div
          onClick={this.props.onAddCardOpen}
          className="add-card-toggle"
          data-position="bottom"
        >
          Add a card...
        </div>
      </React.Fragment>
    );
  }
}

export default CreateCard;
