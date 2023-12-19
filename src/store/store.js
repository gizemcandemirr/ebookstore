import { configureStore } from '@reduxjs/toolkit'
import reducerBooks from './bookSlice'
import reducersCards from './cardSlice'

export const store = configureStore({
  reducer: {
    books:reducerBooks,
    card:reducersCards
  },
})
