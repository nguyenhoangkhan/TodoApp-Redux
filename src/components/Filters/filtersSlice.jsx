// const initState = {
//   filterInput: "",
//   status: "All",
//   priority: [],
// };
// const todoReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoReducer/SET_FILTER_INPUT":
//       return {
//         ...state,
//         filterInput: action.payload,
//       };
//     case "todoReducer/SET_FILTER_STATUS":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "todoReducer/SET_FILTER_PRIORITY":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };
// export default todoReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    filterInput: "",
    status: "All",
    priority: [],
  },
  reducers: {
    SET_FILTER_INPUT: (state, action) => {
      state.filterInput = action.payload;
    },
    SET_FILTER_STATUS: (state, action) => {
      state.status = action.payload;
    },
    SET_FILTER_PRIORITY: (state, action) => {
      state.priority = action.payload;
    },
  },
});
