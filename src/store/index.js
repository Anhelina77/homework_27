import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todoSlice';
import { authReducer } from "reducers/authReducer";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    auth: authReducer,
  },
});
