import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TodoItem } from "../todo/todoSlice";

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
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: TodoItem = {
        id:crypto.randomUUID(),
        text: action.payload,
        finished: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
