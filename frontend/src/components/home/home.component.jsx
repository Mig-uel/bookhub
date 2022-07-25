import Books from '../books/books.component'

// styles
import { HomeComponentContainer } from './home.styles'

const HomeComponent = () => {
  return (
    <HomeComponentContainer>
      <h2 className='home-title'>Home</h2>
      <Books />
    </HomeComponentContainer>
  )
}

export default HomeComponent
