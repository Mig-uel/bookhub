import {
  AddBookFormContainer,
  AddBookInputContainer,
} from './add-book-form.styles'

const AddBookForm = () => {
  return (
    <AddBookFormContainer>
      <AddBookInputContainer>
        <label htmlFor=''>Book Title</label>
        <input type='text' placeholder='The Catcher in the Rye...' required />
      </AddBookInputContainer>

      <AddBookInputContainer>
        <label htmlFor=''>Author</label>
        <input type='text' placeholder='J. D. Salinger...' required />
      </AddBookInputContainer>

      <AddBookInputContainer>
        <label htmlFor=''>Published Year</label>
        <input type='number' placeholder='1951' required />
      </AddBookInputContainer>

      <button>Submit</button>
    </AddBookFormContainer>
  )
}

export default AddBookForm
