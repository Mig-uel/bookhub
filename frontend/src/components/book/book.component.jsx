import { useDispatch } from 'react-redux'
import { deleteBook } from '../../store/books/books'

// styles
import {
  BookContainer,
  BookTitle,
  BookActions,
  BookAuthor,
} from './book.styles'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

const Book = ({ book: { _id, title, author, publishYear, createdAt } }) => {
  const dispatch = useDispatch()

  return (
    <BookContainer>
      <BookTitle>{title}</BookTitle>
      <BookAuthor>{author}</BookAuthor>
      <BookActions>
        <AiFillEdit />
        <AiFillDelete onClick={() => dispatch(deleteBook(_id))} />
      </BookActions>
    </BookContainer>
  )
}

export default Book
