export default function comments(state = [], action) {
  switch (action.type) {
    case 'FETCH_CARD_SUCCESS':
      const ids = action.card.comments.map(comment => comment.id);

      const allOtherComments = state.filter(comment => {
        return !ids.includes(comment.id);
      });

      return allOtherComments.concat(action.card.comments);
    case 'CREATE_COMMENT_SUCCESS':
      return state.concat(action.comment);
    default:
      return state;
  }
}
