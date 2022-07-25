// redux books state
import { useSelector } from 'react-redux'

// custom hooks
import { useFetch } from '../../hooks/useFetch'

// components
import Book from '../book/book.component'
import { ThreeDots } from 'react-loader-spinner'

// styles
import { BooksContainer } from './books.styles'

const Books = () => {
  useFetch('/api/books')

  const books = useSelector((state) => state.books)
  const loading = useSelector((state) => state.loading)

  return (
    <BooksContainer>
      
      {loading ? (
        <ThreeDots
          height='80'
          width='80'
          radius='9'
          color='#000'
          ariaLabel='three-dots-loading'
          wrapperStyle={{}}
          wrapperClassName=''
          visible={true}
        />
      ) : (
        books && books.books.map((book) => <Book key={book._id} book={book} />)
      )}
      {/* {books && console.log(books)}
      {books && books.books.map((book) => <Book key={book._id} book={book} />)} */}
    </BooksContainer>
  )
}

export default Books
