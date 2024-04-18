import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todosReducer from "../features/todos/todosSlice";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
