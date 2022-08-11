import { createSelector } from "reselect";

export const todoListSelectors = (state) => state.todoReducer;
export const filterInputSelectors = (state) => state.filterReducer.filterInput;
export const filterStatusSelectors = (state) => state.filterReducer.status;
export const filterPrioritySelectors = (state) => state.filterReducer.priority;
export const todoListRemaining = createSelector(
  todoListSelectors,
  filterInputSelectors,
  filterStatusSelectors,
  filterPrioritySelectors,
  (todos, filterInput, filterStatus, priorityStatus) => {
    if (filterStatus == "All") {
      return priorityStatus.length
        ? todos.filter((todo) => {
            return (
              todo.title.includes(filterInput) &&
              priorityStatus.includes(todo.priority)
            );
          })
        : todos.filter((todo) => todo.title.includes(filterInput));
    }
    return todos.filter((todo) => {
      return (
        todo.title.includes(filterInput) &&
        (filterStatus === "Completed" ? todo.completed : !todo.completed) &&
        (priorityStatus.length ? priorityStatus.includes(todo.priority) : true)
      );
    });
  }
);
