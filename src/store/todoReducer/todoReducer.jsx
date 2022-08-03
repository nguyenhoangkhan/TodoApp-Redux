const initState = [];

const todoReducer = (state = initState, action) => {
  console.log(state);
  switch (action.type) {
    case "todoReducer/ADD_TODO":
      const newJobs = [...state, action.payload];
      localStorage.setItem("todoList", JSON.stringify(newJobs));
      return newJobs;

    case "todoReducer/SET_COMPLETED_TODO":
      const newPriority = state.map((data) =>
        data.id === action.payload
          ? { ...data, completed: !data.completed }
          : data
      );
      localStorage.setItem("todoList", JSON.stringify(newPriority));
      return newPriority;
    default:
      return state;
  }
};
export default todoReducer;
