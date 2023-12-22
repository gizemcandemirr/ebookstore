import { configureStore } from "@reduxjs/toolkit";
import reducerBooks from "./bookSlice";
import reducerCards from "./cardSlice";
import buttonReducer from "./buttonSlice";
export const store = configureStore({
  reducer: {
    books: reducerBooks,
    carts: reducerCards,
    button: buttonReducer,
  },
});
