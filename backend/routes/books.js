import { Router } from 'express'
import {
  getBooks,
  getBook,
  createBook,
} from '../controllers/booksController.js'

export const router = Router()

// GET all books
router.get('/', getBooks)

// GET a single book
router.get('/:id', getBook)

// POST a new book
router.post('/', createBook)

// DELETE a book
router.delete('/:id', (req, res) => {
  res.status(200).send('DELETE a book')
})

// UPDATE a book
router.patch('/:id', (req, res) => {
  res.status(200).send('UPDATE a book')
})
