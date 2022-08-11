import { createSelector } from "@reduxjs/toolkit";

export const todoListSelectors = (state) => state.todoList;
export const filterInputSelectors = (state) => state.filter.filterInput;
export const filterStatusSelectors = (state) => state.filter.status;
export const filterPrioritySelectors = (state) => state.filter.priority;
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
