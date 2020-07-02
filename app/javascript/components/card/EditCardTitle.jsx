import React from 'react';

class EditCardTitle extends React.Component {
  state = {
    title: this.props.card.title,
  };

  handleChange = e => {
    this.setState({
      title: e.target.value,
    });
  };

  handleEditTitle = () => {
    if (this.state.title.trim() === '') {
      this.setState({
        title: this.props.card.title,
      });
      return;
    }

    const updatedCard = {
      card: { title: this.state.title },
    };
    // alternative: this.props.onUpdateCard(updatedCard, this.props.card.id);
    this.props.onUpdateTitle(updatedCard, this.props.card.id);
  };

  render() {
    return (
      <textarea
        onBlur={this.handleEditTitle}
        onChange={this.handleChange}
        className="list-title"
        style={{ height: 45 + 'px' }}
      >
        {this.state.title}
      </textarea>
    );
  }
}

export default EditCardTitle;
