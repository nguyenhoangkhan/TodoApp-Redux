// const initState = [];

// const todoReducer = (state = initState, action) => {
//   console.log(state);
//   switch (action.type) {
//     case "todoReducer/ADD_TODO":
//       return [...state, action.payload];

//     case "todoReducer/SET_COMPLETED_TODO":
//       return state.map((data) =>
//         data.id === action.payload
//           ? { ...data, completed: !data.completed }
//           : data
//       );
//     default:
//       return state;
//   }
// };
// export default todoReducer;

import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    ADD_TODO: (state, action) => {
      state.push(action.payload);
    },
    SET_COMPLETED_TODO: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
