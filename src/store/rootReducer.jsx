import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todoReducer: todoReducer,
  filterReducer: filterReducer,
});
export default rootReducer;
