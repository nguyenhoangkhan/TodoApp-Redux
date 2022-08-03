export const addTodo = (payload) => {
  return {
    type: "todoReducer/ADD_TODO",
    payload,
  };
};
export const setCompletedTodo = (payload) => {
  return {
    type: "todoReducer/SET_COMPLETED_TODO",
    payload,
  };
};
export const setFilterInput = (payload) => {
  return {
    type: "todoReducer/SET_FILTER_INPUT",
    payload,
  };
};
export const setFilterStatus = (payload) => {
  return {
    type: "todoReducer/SET_FILTER_STATUS",
    payload,
  };
};
export const setFilterPriority = (payload) => {
  return {
    type: "todoReducer/SET_FILTER_PRIORITY",
    payload,
  };
};
