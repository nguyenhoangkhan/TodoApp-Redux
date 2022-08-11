// import { createStore } from "redux";
// import rootReducer from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;
import todoListSlice from "../components/TodoList/todoListSlice";
import filterSlice from "../components/Filters/filtersSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todoList: todoListSlice.reducer,
    filter: filterSlice.reducer,
  },
});
export default store;
