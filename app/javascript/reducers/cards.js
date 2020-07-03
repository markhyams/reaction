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
      const allOtherCards = state.filter(
        card => card.id !== action.card.id,
      );
      const { comments, ...cardWithoutComments } = action.card;
      return allOtherCards.concat(cardWithoutComments);

    case 'CREATE_CARD_SUCCESS':
      return state.concat(action.card);

    case 'UPDATE_CARD_SUCCESS':
      return state.map(card => {
        if (card.id === action.card.id) {
          return action.card;
        } else {
          return card;
        }
      });
    case 'CREATE_COMMENT_SUCCESS':
      return state.map(card => {
        if (card.id === action.comment.card_id) {
          const count = card.comments_count + 1;
          return Object.assign({}, card, { comments_count: count });
        } else {
          return card;
        }
      });
    default:
      return state;
  }
}
