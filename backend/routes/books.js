import { Router } from 'express'
import { getBooks } from '../controllers/booksController.js'

export const router = Router()

// GET all books
router.get('/', getBooks)

// GET a single book
router.get('/:id', (req, res) => {
  res.status(200).send(req.params)
})

// POST a new book
router.post('/', (req, res) => {
  res.status(200).send('POST new book')
})

// DELETE a book
router.delete('/:id', (req, res) => {
  res.status(200).send('DELETE a book')
})

// UPDATE a book
router.patch('/:id', (req, res) => {
  res.status(200).send('UPDATE a book')
})
