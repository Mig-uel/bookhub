import { Outlet, Link } from 'react-router-dom'
import { NavContainer, Title, LinksContainer } from './nav.styles'

const Nav = () => {
  return (
    <>
      <NavContainer>
        <Title>
          <Link to='/'>Bookhub</Link>
        </Title>
        <LinksContainer>
          <Link to='/'>Home</Link>
          <Link to='/add'>Add Book</Link>
        </LinksContainer>
      </NavContainer>
      <Outlet />
    </>
  )
}

export default Nav
