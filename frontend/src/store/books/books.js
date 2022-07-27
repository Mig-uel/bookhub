import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  const req = await fetch(
    `https://bookhub-backend.herokuapp.com/api/books/${id}`,
    {
      method: 'DELETE',
    }
  )
  const res = await req.json()
  return await res._id
})

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const req = await fetch('https://bookhub-backend.herokuapp.com/api/books/')
    const res = await req.json()

    return res
  } catch (error) {
    console.log(error)
  }
})

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    // Get books
    [getBooks.pending]: (state) => {
      state.status = 'loading'
    },
    [getBooks.fulfilled]: (state, action) => {
      state.status = 'success'
      state.books = action.payload
    },

    // Delete book
    [deleteBook.pending]: (state) => {
      state.status = 'loading'
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.status = 'success'
      state.books = state.books.filter((book) => book._id !== action.payload)
    },
    [deleteBook.rejected]: (state) => {
      state.status = 'failed'
    },
  },
})

// reducer
export default booksSlice.reducer
