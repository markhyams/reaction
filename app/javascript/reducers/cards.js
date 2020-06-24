export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      let cards = [];

      action.board.lists.forEach((list) => {
        cards = cards.concat(list.cards);
      });

      const ids = cards.map((card) => card.id);

      const excludedCards = state.filter((card) => {
        return !ids.includes(card.id);
      });

      return excludedCards.concat(cards);
    default:
      return state;
  }
}
