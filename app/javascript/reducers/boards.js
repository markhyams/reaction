export default function boards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARDS_SUCCESS":
      return action.boards;
    case "CREATE_BOARD_SUCCESS":
      const newBoard = action.board;
      return state.concat(newBoard);
    case "FETCH_BOARD_SUCCESS":
      const excludedBoards = state.filter(
        (board) => board.id !== action.board.id
      );
      const { lists, ...boardWithoutLists } = action.board;
      return excludedBoards.concat(boardWithoutLists);
    default:
      return state;
  }
}

// {
//   title: "Board 1",
//   id: 1,
//   lists: [
//     {id:1, title:"List 1", cards: [
//       {title:" "Card1}
//     ]}
//   ]
// }

// state = {
//   users: [],
//   boards: [],
//   lists: [],
//   cards: [],
//   comments: []
// }
// comments.filter(comment => comment.card_id === id);

// // first filter to remove the board we got from the server
// const excludedBoards = state.filter(board => board.id !== action.payload.board.id);

// const { lists, ...boardWithoutLists} = action.payload.board;

// return excludedBoards.concat(boardWithoutLists);
