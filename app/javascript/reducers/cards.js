export default function cards(state = [], action) {
  switch (action.type) {
    case 'FETCH_BOARD_SUCCESS':
      let cards = [];

      action.board.lists.forEach(list => {
        cards = cards.concat(list.cards);
      });

      const ids = cards.map(card => card.id);

      const excludedCards = state.filter(card => {
        return !ids.includes(card.id);
      });

      return excludedCards.concat(cards);

    case 'FETCH_CARD_SUCCESS':
      const found = state.find(card => card.id === action.card.id);

      if (found) {
        return state.map(card => {
          if (card.id === action.card.id) {
            return action.card;
          } else {
            return card;
          }
        });
      } else {
        return state.concat(action.card);
      }

    case 'CREATE_CARD_SUCCESS':
      return state.concat(action.card);

    case 'UPDATE_CARD_SUCCESS':
      const otherCards = state.filter(
        card => card.id !== action.card.id,
      );
      return [action.card, ...otherCards];

    default:
      return state;
  }
}
