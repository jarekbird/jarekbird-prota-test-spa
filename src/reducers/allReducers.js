import { babyNamesApiReducer, babyNamesListReducer } from "./babyNamesReducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  babyNames: babyNamesApiReducer,
  babyNameListId: babyNamesListReducer,
});

export default allReducers;
