import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { STATUS } from '@/constants/status';
import { getListAPI, addTaskAPI, removeTaskAPI, editTaskAPI, checkedTaskAPI } from '@/api/todos2';
import { Todo } from '@/models/todo';

const getList = createAsyncThunk('todos/getList', async (_, { rejectWithValue, dispatch }) => {
  try {
    const res = await getListAPI();
    dispatch(initTodos(res));
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const addTask = createAsyncThunk('todos/addTask', async (data, { rejectWithValue, dispatch }) => {
  try {
    const res = await addTaskAPI(data);
    dispatch(addTodo(res));
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const checkedTask = createAsyncThunk('todos/checkedTask', async (data, { rejectWithValue, dispatch }) => {
  try {
    const res = await checkedTaskAPI(data);
    dispatch(updateTodo(res));
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const editTask = createAsyncThunk('todos/editTask', async (data, { rejectWithValue, dispatch }) => {
  try {
    const res = await editTaskAPI(data);
    dispatch(updateTodo(res));
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const removeTask = createAsyncThunk('todos/removeTask', async (data, { rejectWithValue, dispatch }) => {
  try {
    const res = await removeTaskAPI(data);
    dispatch(removeTodo(data));
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  todoList: [],
  error: [],
  status: STATUS.IDLE,
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    clearTodos(state) {
      state = initialState;
    },
    initTodos(state, { payload }) {
      if (Array.isArray(payload)) {
        state.todoList = payload.map(item => new Todo(item));
      }
    },
    addTodo(state, { payload }) {
      if (payload._id) {
        state.todoList.push(new Todo(payload));
      }
    },
    removeTodo(state, { payload }) {
      state.todoList = state.todoList.filter(todo => todo._id !== payload);
    },
    toggleTodo(state, { payload }) {
      state.todoList = state.todoList.map(todo => {
        if (todo._id === payload) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
    },
    updateTodo(state, { payload }) {
      state.todoList = state.todoList.map(todo => {
        if (todo._id === payload._id) {
          return new Todo(payload);
        }
        return todo;
      });
    },
  },
});

export const { clearTodos, initTodos, addTodo, removeTodo, toggleTodo, updateTodo } = slice.actions;
export const todosReducer = slice.reducer;

export const useTodos = () => {
  const state = useSelector(store => store.todos);
  const dispatch = useDispatch();

  return {
    ...state,
    clearTodos: () => dispatch(clearTodos()),
    getList: () => dispatch(getList()),
    addTask: data => dispatch(addTask(data)),
    checkedTask: data => dispatch(checkedTask(data)),
    editTask: data => dispatch(editTask(data)),
    removeTask: data => dispatch(removeTask(data)),
  };
};
