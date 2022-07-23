import Book from '../models/bookModel.js'
import mongoose from 'mongoose'

// GET all books
export const getBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 })

  res.status(200).json(books)
}

// GET a book
export const getBook = async (req, res) => {
  const { id } = req.params

  // check for invalid ID
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: 'Invalid book ID!' })

  const book = await Book.findById(id)

  if (!book) return res.status(400).json({ error: 'No such workout exists!' })

  res.status(200).json(book)
}
