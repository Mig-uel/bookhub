import Book from '../models/bookModel.js'
import mongoose from 'mongoose'

/* ----- GET all books -----*/
export const getBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 })

  res.status(200).json(books)
}

/* ----- GET a book -----*/
export const getBook = async (req, res) => {
  const { id } = req.params

  // check for invalid ID
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: 'Invalid book ID!' })

  const book = await Book.findById(id)

  // check if such book exists
  if (!book) return res.status(400).json({ error: 'No such book exists!' })

  res.status(200).json(book)
}

/* ----- CREATE a book -----*/
export const createBook = async (req, res) => {
  // destructure from request body
  const { title, author, publishYear } = req.body

  // setup empty array to push empty fields
  const emptyFields = []

  // check if required body fields contain data and if not push to emptyFields array
  if (!title) emptyFields.push('title')
  if (!author) emptyFields.push('author')
  if (!publishYear) emptyFields.push('publishYear')

  // if emptyFields array contains elements, return error with missing fields
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in all required fields!', emptyFields })
  }

  // try/catch to create and add doc to database
  try {
    const book = await Book.create({
      title,
      author,
      publishYear,
    })

    // send back book as response if successful
    res.status(200).json(book)
  } catch (error) {
    res.status(400).json({ error })
  }
}

/* ----- DELETE a book -----*/
export const deleteBook = async (req, res) => {
  // destructure id from req
  const { id } = req.params

  // validate book ID given
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: 'Invalid book ID' })

  // use the book ID to find and delete from database
  const book = await Book.findOneAndDelete({ _id: id })

  if (!book) return res.status(400).json({ error: 'No such book exists!' })

  // send back the deleted book if successfully deleted
  res.status(200).json(book)
}

export const updateBook = async (req, res) => {
  const { id } = req.params

  // validate book ID given
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: 'Invalid book ID' })

  // find my ID, and spread in whatever is being updated
  const book = await Book.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  )

  if (!book) return res.status(400).json({ error: 'No such book exists!' })

  // if success, send back updated book
  res.status(200).json(book)
}
