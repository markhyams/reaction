import { combineReducers } from "redux";
import boards from "./boards";
import lists from "./lists";
import cards from "./cards";
import loading from "./loading";

const rootReducer = combineReducers({ boards, lists, cards, loading });

export default rootReducer;
