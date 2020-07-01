export default function loading(state = false, action) {
  switch (action.type) {
    case 'FETCH_BOARDS_REQUEST':
      return true;
    case 'FETCH_BOARDS_SUCCESS':
      return false;
    case 'FETCH_BOARD_REQUEST':
      return true;
    case 'FETCH_BOARD_SUCCESS':
      return false;
    case 'CREATE_LIST_REQUEST':
      return true;
    case 'CREATE_LIST_SUCCESS':
      return false;
    case 'UPDATE_LIST_REQUEST':
      return true;
    case 'UPDATE_LIST_SUCCESS':
      return false;
    case 'FETCH_CARD_REQUEST':
      return true;
    case 'FETCH_CARD_SUCCESS':
      return false;
    case 'CREATE_CARD_REQUEST':
      return true;
    case 'CREATE_CARD_SUCCESS':
      return false;

    default:
      return state;
  }
}
