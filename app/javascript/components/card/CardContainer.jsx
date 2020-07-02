import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/CardActions';

import Card from './Card';

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.cards.find(
      card => card.id === +ownProps.match.params.id,
    ),
    comments: state.comments.filter(
      comment => comment.card_id === +ownProps.match.params.id,
    ),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchCard: () => {
      dispatch(actions.fetchCard(ownProps.match.params.id));
    },
    // TODO onUpdateCard:(){}
  };
};

class CardContainer extends React.Component {
  componentDidMount() {
    this.props.onFetchCard();
  }

  render() {
    if (this.props.card) {
      return <Card card={this.props.card} />;
    } else {
      return null;
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardContainer);
