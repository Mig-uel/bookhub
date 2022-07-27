import { Outlet } from 'react-router-dom'
import AddBookComponent from '../../components/add-book/add-book.component'

const AddBook = () => {
  return (
    <>
      <Outlet />
      <AddBookComponent />
    </>
  )
}

export default AddBook
