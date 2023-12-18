import { createSlice, nanoid } from "@reduxjs/toolkit";
import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";

const fetchBooks = asyncThunkCreator(
  "books/fetchBooks",
  async (id, thunkApi) => {
    const res = await fetch(
      `http://openlibrary.org/people/george08/lists.json`
    );
    return await res.json();
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    loading: false,
    todos: [],
  },
  reducers: (create) => ({
    fetchList: fetchBooks,
  }),
});

export const { addTodo, deleteTodo, fetchList } = booksSlice.actions;
