import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TodoItem {
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
      const todoId = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === todoId);
      if (todoIndex !== -1) {
        state.todos[todoIndex].finished = !state.todos[todoIndex].finished;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleIsFinished } = todosSlice.actions;
export default todosSlice.reducer;
