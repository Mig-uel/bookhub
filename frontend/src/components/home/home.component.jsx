import Books from '../books/books.component'

// styles
import { HomeComponentContainer, HomeComponentTitle } from './home.styles'

const HomeComponent = () => {
  return (
    <HomeComponentContainer>
      <HomeComponentTitle>Home</HomeComponentTitle>
      <Books />
    </HomeComponentContainer>
  )
}

export default HomeComponent
