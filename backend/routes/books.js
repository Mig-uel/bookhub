import { Router } from 'express'
import {
  getBooks,
  getBook,
  createBook,
  deleteBook,
} from '../controllers/booksController.js'

export const router = Router()

// GET all books
router.get('/', getBooks)

// GET a single book
router.get('/:id', getBook)

// POST a new book
router.post('/', createBook)

// DELETE a book
router.delete('/:id', deleteBook)

// UPDATE a book
router.patch('/:id', (req, res) => {
  res.status(200).send('UPDATE a book')
})
