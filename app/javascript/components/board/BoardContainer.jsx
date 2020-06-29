import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/BoardActions';
import Board from './Board';

const findId = (props, state) => {
  if (/boards/.test(props.match.url)) {
    return +props.match.params.id;
  } else {
    const card = state.cards.find(
      card => card.id === +props.match.params.id,
    );
    return card.board_id;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.boards.find(
      board => board.id === findId(ownProps, state),
    ),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchBoard: () => {
      dispatch(actions.fetchBoard(ownProps.match.params.id));
    },
  };
};

class BoardContainer extends React.Component {
  componentDidMount() {
    this.props.onFetchBoard();
  }

  render() {
    if (this.props.board) {
      return <Board board={this.props.board} />;
    } else {
      return null;
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardContainer);
