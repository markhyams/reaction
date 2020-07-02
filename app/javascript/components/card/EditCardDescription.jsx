import React from 'react';

class EditCardDescription extends React.Component {
  state = {
    isFormOpen: false,
    description: this.props.card.description || '',
  };

  handleOpenForm = () => {
    this.setState({
      isFormOpen: true,
    });
  };

  handleCloseForm = () => {
    this.setState({
      isFormOpen: false,
    });
  };

  handleChange = e => {
    this.setState({
      description: e.target.value,
    });
  };

  handleSave = () => {
    const updatedCard = {
      card: { description: this.state.description },
    };

    this.props.onUpdateDescription(
      updatedCard,
      this.props.card.id,
      this.handleCloseForm,
    );
  };

  render() {
    if (!this.state.isFormOpen) {
      return (
        <React.Fragment>
          <span
            onClick={this.handleOpenForm}
            id="description-edit"
            className="link"
          >
            Edit
          </span>
          <p className="textarea-overlay">
            {this.props.card.description}
          </p>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <textarea
            onChange={this.handleChange}
            class="textarea-toggle"
            rows="1"
            autofocus
          >
            {this.state.description}
          </textarea>
          <div>
            <div
              onClick={this.handleSave}
              class="button"
              value="Save"
            >
              Save
            </div>
            <i onClick={this.handleCloseForm} class="x-icon icon"></i>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default EditCardDescription;
