import { configureStore } from "@reduxjs/toolkit";
import reducerBooks from "../store/slice/book";
import reducerCards from "../store/slice/card";
import buttonReducer from "../store/slice/button";
export const store = configureStore({
  reducer: {
    books: reducerBooks,
    carts: reducerCards,
    button: buttonReducer,
  },
});
