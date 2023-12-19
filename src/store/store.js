import { configureStore } from '@reduxjs/toolkit'
import reducerBooks from './bookSlice'
import reducerCards from './cardSlice'

export const store = configureStore({
  reducer: {
    books:reducerBooks,
    carts:reducerCards
  },
})
