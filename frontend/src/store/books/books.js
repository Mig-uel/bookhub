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

export const addBook = createAsyncThunk(
  'books/addBook',
  async ({ title, author, publishYear }) => {
    try {
      const req = await fetch(
        'https://bookhub-backend.herokuapp.com/api/books/',
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            title,
            author,
            publishYear,
          }),
        }
      )

      const res = await req.json()
      return res
    } catch (error) {
      // console.log(error)
    }
  }
)

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: null,
    error: '',
  },
  reducers: {},
  extraReducers: {
    // Get books
    [getBooks.pending]: (state) => {
      state.status = 'loading'
    },
    [getBooks.fulfilled]: (state, action) => {
      state.status = 'success'
      state.error = ''
      state.books = action.payload
    },
    [getBooks.rejected]: (state, action) => {
      state.error = action.payload
      state.status = 'failed'
    },

    // Delete book
    [deleteBook.pending]: (state) => {
      state.status = 'loading'
      state.error = ''
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.status = 'success'
      state.error = ''
      state.books = state.books.filter((book) => book._id !== action.payload)
    },
    [deleteBook.rejected]: (state, action) => {
      state.error = action.payload
      state.status = 'failed'
    },

    // Add book
    [addBook.pending]: (state) => {
      state.status = 'loading'
      state.error = 'no error'
    },
    [addBook.fulfilled]: (state, action) => {
      state.status = 'success'
      state.error = ''
      state.books = [...state.books, action.payload]
    },
    [addBook.rejected]: (state, action) => {
      state.error = action.payload
      state.status = 'failed'
    },
  },
})

// reducer
export default booksSlice.reducer
