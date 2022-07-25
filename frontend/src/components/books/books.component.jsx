// redux books state
import { useSelector } from 'react-redux'

// custom hooks
import { useFetch } from '../../hooks/useFetch'

// components
import Book from '../book/book.component'

const Books = () => {
  // redux books state
  useFetch('https://jsonplaceholder.typicode.com/todos')
  const books = useSelector((state) => state.books)

  return (
    <>
      {books && console.log(books)}
      {books && books.books.map((book) => <Book key={book.id} book={book} />)}
    </>
  )
}

export default Books
