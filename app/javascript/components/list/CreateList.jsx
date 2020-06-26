import React from 'react';

class CreateList extends React.Component {
  state = {
    title: '',
    showInputField: false,
  };

  hideInputField = () => {
    this.setState({ showInputField: false });
  };

  handleCloseInputClick = e => {
    e.stopPropagation();
    this.hideInputField();
  };

  handleAddListClick = () => {
    this.setState({ showInputField: true });
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSave = () => {
    if (this.state.title.trim() === '') return;
    const newList = {
      board_id: this.props.boardId,
      list: {
        title: this.state.title,
      },
    };

    this.props.onAddList(newList, () => {
      this.reset();
      this.hideInputField();
    });
  };

  reset = () => {
    this.setState({ title: '' });
  };

  render() {
    return (
      <div
        id="new-list"
        className={`new-list ${
          this.state.showInputField ? 'selected' : ''
        }`}
        onClick={this.handleAddListClick}
      >
        <span>Add a list...</span>
        <input
          type="text"
          placeholder="Add a list..."
          value={this.state.title}
          onChange={this.handleChange}
        />
        <div>
          <input
            type="submit"
            className="button"
            value="Save"
            onClick={this.handleSave}
          />
          <i
            className="x-icon icon"
            onClick={this.handleCloseInputClick}
          ></i>
        </div>
      </div>
    );
  }
}

export default CreateList;
