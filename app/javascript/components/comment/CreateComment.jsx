import React from 'react';

class CreateComment extends React.Component {
  state = {
    text: '',
  };

  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSave = () => {
    const comment = {
      card_id: this.props.cardId,
      comment: {
        text: this.state.text,
      },
    };

    this.props.createComment(comment, () => {
      this.setState({ text: '' });
    });
  };

  render() {
    return (
      <div className="comment">
        <label>
          <textarea
            onChange={this.handleChange}
            value={this.state.text}
            required=""
            rows="1"
            placeholder="Write a comment..."
          ></textarea>
          <div>
            <a className="light-button card-icon sm-icon"></a>
            <a className="light-button smiley-icon sm-icon"></a>
            <a className="light-button email-icon sm-icon"></a>
            <a className="light-button attachment-icon sm-icon"></a>
          </div>
          <div>
            <input
              onClick={this.handleSave}
              type="submit"
              className="button not-implemented"
              value="Save"
            />
          </div>
        </label>
      </div>
    );
  }
}

export default CreateComment;
