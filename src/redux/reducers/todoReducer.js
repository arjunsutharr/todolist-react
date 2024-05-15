import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  todoInputText: "",
  todoForEdit: undefined,
};

export const getAllTodos = createAsyncThunk("todo/getAllTodos", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=20"
  );
  return response.data;
});

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async (todoInputText) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: todoInputText,
        completed: false,
      }
    );
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (todoId) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );

    if (response.status === 200) {
      return todoId;
    }
  }
);

export const editTodo = createAsyncThunk(
  "todo/editTodo",
  async (updatedTodo) => {
    const { id } = updatedTodo;
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      updatedTodo
    );

    return response.data;
  }
);

export const toggleStatus = createAsyncThunk(
  "todo/toggleStatus",
  async (todo) => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      {
        ...todo,
        completed: !todo.completed,
      }
    );

    return response.data;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    setInputText: (state, action) => {
      state.todoInputText = action.payload;
    },
    setEditTodo: (state, action) => {
      state.todoForEdit = action.payload;
      state.todoInputText = action.payload.title;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.todos = [...action.payload];
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
        state.todoInputText = "";
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const todoIndex = state.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );

        state.todos[todoIndex] = action.payload;
        state.todoForEdit = undefined;
        state.todoInputText = "";
      })
      .addCase(toggleStatus.fulfilled, (state, action) => {
        const todoIndex = state.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );

        state.todos[todoIndex] = action.payload;
      });
  },
});

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
export const todoSelector = (state) => state.todoReducer;
