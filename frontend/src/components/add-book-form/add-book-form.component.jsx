import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBook } from '../../store/books/books'

import { useNavigate } from 'react-router-dom'

import {
  AddBookFormContainer,
  AddBookInputContainer,
  AddBookButtonContainer,
} from './add-book-form.styles'

const AddBookForm = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const { status } = useSelector((state) => state.books)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')

  return (
    <AddBookFormContainer
      onSubmit={(e) => {
        e.preventDefault()
        dispatch(addBook({ title, author, publishYear }))

        setTitle('')
        setAuthor('')
        setPublishYear('')

        // must import error state from redux store
        // if (error) {
        //   alert(error)
        // }

        if (status === 'success') {
          navigate('/')
        }

        // e.target.reset()
      }}
    >
      <AddBookInputContainer>
        <label htmlFor=''>Book Title</label>
        <input
          type='text'
          placeholder='The Catcher in the Rye...'
          required
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
      </AddBookInputContainer>
      <AddBookInputContainer>
        <label htmlFor=''>Author</label>
        <input
          type='text'
          placeholder='J. D. Salinger...'
          required
          onChange={(e) => {
            setAuthor(e.target.value)
          }}
        />
      </AddBookInputContainer>
      <AddBookInputContainer>
        <label htmlFor=''>Published Year</label>
        <input
          type='tel'
          placeholder='1951'
          required
          maxLength={4}
          autoComplete='off'
          onChange={(e) => {
            setPublishYear(e.target.value)
          }}
        />
      </AddBookInputContainer>
      <AddBookButtonContainer>
        <button type='submit'>Submit</button>
      </AddBookButtonContainer>
      {/* {console.log(error)} */}
    </AddBookFormContainer>
  )
}

export default AddBookForm
