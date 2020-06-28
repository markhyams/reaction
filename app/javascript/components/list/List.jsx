import React from 'react';
import SummaryCardsContainer from '../card/SummaryCardsContainer.jsx';

class List extends React.Component {
  state = {
    editTitle: false,
    title: this.props.title,
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

  render() {
    return (
      <div className="list-wrapper">
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
            <div className="add-dropdown add-bottom">
              <div className="card">
                <div className="card-info"></div>
                <textarea name="add-card"></textarea>
                <div className="members"></div>
              </div>
              <a className="button">Add</a>
              <i className="x-icon icon"></i>
              <div className="add-options">
                <span>...</span>
              </div>
            </div>
            <div className="add-card-toggle" data-position="bottom">
              Add a card...
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
