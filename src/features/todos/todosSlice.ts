import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoItem {
  id: string;
  text: string;
  finished: boolean;
}

export interface TodosState {
  todos: TodoItem[];
}

const initialState: TodosState = {
  todos: [],
};
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleIsFinished: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map(todo => action.payload === todo.id ? { ...todo, finished: !todo.finished } : todo)
    },
  },
});

export const { addTodo, deleteTodo, toggleIsFinished } = todosSlice.actions;
export default todosSlice.reducer;
