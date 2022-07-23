import Book from '../models/bookModel.js'
import mongoose from 'mongoose'

// GET all books
export const getBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 })

  res.status(200).json(books)
}
