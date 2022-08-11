const initState = [];

const todoReducer = (state = initState, action) => {
  console.log(state);
  switch (action.type) {
    case "todoReducer/ADD_TODO":
      return [...state, action.payload];

    case "todoReducer/SET_COMPLETED_TODO":
      return state.map((data) =>
        data.id === action.payload
          ? { ...data, completed: !data.completed }
          : data
      );
    default:
      return state;
  }
};
export default todoReducer;
