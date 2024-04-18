import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoItem {
  id: string;
  text: string;
  finished: boolean;
}

const initialState: TodoItem = {
  id: crypto.randomUUID(),
  text: "",
  finished: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addText: (state, action: PayloadAction<string>) => {
      state.text += action.payload;
    },
    toggleFinished: (state, action: PayloadAction<boolean>) => {
      state.finished = action.payload;
    },
  },
});

export const { addText, toggleFinished } = todoSlice.actions;
export default todoSlice.reducer;
