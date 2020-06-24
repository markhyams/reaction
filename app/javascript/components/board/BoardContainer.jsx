import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/BoardActions";
import Board from "./Board";

// ownProps.match.params.id (string)

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.boards.find((board) => board.id === +ownProps.match.params.id),
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
    console.log(this.props.board);
    return <Board board={this.props.board} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
