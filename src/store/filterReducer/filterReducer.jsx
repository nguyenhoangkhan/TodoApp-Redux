const initState = {
  filterInput: "",
  status: "All",
  priority: [],
};
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoReducer/SET_FILTER_INPUT":
      return {
        ...state,
        filterInput: action.payload,
      };
    case "todoReducer/SET_FILTER_STATUS":
      return {
        ...state,
        status: action.payload,
      };
    case "todoReducer/SET_FILTER_PRIORITY":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};
export default todoReducer;
