import { createSlice } from '@reduxjs/toolkit'

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload
    },
  },
})

// actions
export const { setBooks } = booksSlice.actions

// reducer
export default booksSlice.reducer
