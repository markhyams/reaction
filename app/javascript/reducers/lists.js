export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      const lists = action.board.lists;
      const listsWithoutCards = lists.map((list) => {
        const { cards, ...listWithoutCards } = list;
        return listWithoutCards;
      });
      const ids = lists.map((list) => list.id);
      const excludedLists = state.filter((list) => {
        return !ids.includes(list.id);
      });

      return excludedLists.concat(listsWithoutCards);
    case "CREATE_LIST_SUCCESS":
      return state.concat(action.list);
    default:
      return state;
  }
}
