// styles
import {
  BookContainer,
  BookTitle,
  BookActions,
  BookAuthor,
} from './book.styles'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

const Book = ({ book: { _id, title, author, publishYear, createdAt } }) => {
  return (
    <BookContainer>
      <BookTitle>{title}</BookTitle>
      <BookAuthor>{author}</BookAuthor>
      <BookActions>
        <AiFillEdit onClick={() => console.log(_id)} />
        <AiFillDelete />
      </BookActions>
    </BookContainer>
  )
}

export default Book
