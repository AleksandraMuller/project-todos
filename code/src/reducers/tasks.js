import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskData: [],
  listFilter: "SHOW_ACTIVE",
  total: 0
};

export const tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      let { text, id } = action.payload;

      state.taskData.push({
        id,
        text,
        complete: false,
        important: false
      });

      state.total += 1;
    },
    toggle: (state, action) => {
      const todo = state.taskData.find(todo => todo.id === action.payload);

      if (todo) {
        todo.complete = !todo.complete;
      }
    },
    toggleImportant: (state, action) => {
      const todo = state.taskData.find(todo => todo.id === action.payload);

      if (todo) {
        todo.important = !todo.important;
      }
    },
    deleteAll: state => {
      state.taskData = [];
      state.total = 0;
    },
    deleteOne: (state, action) => {
      state.taskData = state.taskData.filter(
        item => item.id !== action.payload
      );
      state.total -= 1;
    },
    showCompleted: state => {
      state.listFilter = "SHOW_COMPLETED";
    },
    showNotCompleted: state => {
      state.listFilter = "SHOW_ACTIVE";
    },
    showAll: state => {
      state.listFilter = "SHOW_ALL";
    }
  }
});
