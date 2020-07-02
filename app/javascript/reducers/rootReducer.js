import { combineReducers } from 'redux';
import boards from './boards';
import lists from './lists';
import cards from './cards';
import comments from './comments';
import loading from './loading';

const rootReducer = combineReducers({
  boards,
  lists,
  cards,
  comments,
  loading,
});

export default rootReducer;
