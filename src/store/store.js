import { configureStore } from '@reduxjs/toolkit'
import reducerBooks from './bookSlice'
export const store = configureStore({
  reducer: {
    books:reducerBooks
  },
})
