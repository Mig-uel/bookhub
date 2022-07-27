import AddBookForm from '../add-book-form/add-book-form.component'
import { AddBookContainer, AddBookComponentTitle } from './add-book.styles'

const AddBookComponent = () => {
  return (
    <AddBookContainer>
      <AddBookComponentTitle>Add Book</AddBookComponentTitle>
      <AddBookForm />
    </AddBookContainer>
  )
}

export default AddBookComponent
