import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/BoardActions';
import Board from './Board';

const mapStateToProps = (state, ownProps) => {
  let boardId, card;
  if (/boards/.test(ownProps.match.url)) {
    boardId = +ownProps.match.params.id;
  } else {
    card = state.cards.find(
      card => card.id === +ownProps.match.params.id,
    );
    if (card) {
      boardId = card.board_id;
    } else {
      boardId = null;
    }
  }
  if (boardId) {
    return {
      boardId: boardId,
      board: state.boards.find(board => board.id === boardId),
    };
  } else {
    return {
      boardId: null,
      board: null,
    };
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchBoard: boardId => {
      dispatch(actions.fetchBoard(boardId));
    },
  };
};

class BoardContainer extends React.Component {
  componentDidMount() {
    if (!this.props.boardId) {
      return null;
    } else {
      this.props.onFetchBoard(this.props.boardId);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.boardId !== prevProps.boardId &&
      this.props.boardId
    ) {
      this.props.onFetchBoard(this.props.boardId);
    }
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
