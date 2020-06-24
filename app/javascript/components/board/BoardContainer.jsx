import React from "react";
import { connect } from "react-redux";
import Board from "./Board";
import axios from "axios";

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists.filter((list) => {
      return list.board_id == ownProps.board.id;
    }),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchLists: () => {
      axios.get(`api/board/${ownProps.id}`).then(({ data }) => {
        dispatch({
          type: "LISTS_FETCHED",
          payload: { lists: data.lists },
        });
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
