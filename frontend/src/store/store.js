import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books/books'
import loadingReducer from './loading/loading'

export default configureStore({
  reducer: {
    books: booksReducer,
    loading: loadingReducer,
  },
})
