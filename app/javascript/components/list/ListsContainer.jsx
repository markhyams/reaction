import React from "react";
import Lists from "./Lists.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists.filter((list) => {
      return list.board_id === ownProps.boardId;
    }),
  };
};

export default connect(mapStateToProps, null)(Lists);
