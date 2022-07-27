// redux books state
import { useSelector, useDispatch } from 'react-redux'
import { getBooks } from '../../store/books/books'

// components
import Book from '../book/book.component'
import { ThreeDots } from 'react-loader-spinner'

// styles
import { BooksContainer } from './books.styles'
import { useEffect } from 'react'

const Books = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  const { books, status } = useSelector((state) => state.books)

  // console.log(books)

  return (
    <BooksContainer>
      {status === 'loading' ? (
        <ThreeDots
          height='80'
          width='80'
          radius='9'
          color='#000'
          ariaLabel='three-dots-loading'
          wrapperStyle={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          wrapperClassName=''
          visible={true}
        />
      ) : (
        books && books.map((book) => <Book key={book._id} book={book} />)
      )}
    </BooksContainer>
  )
}

export default Books
