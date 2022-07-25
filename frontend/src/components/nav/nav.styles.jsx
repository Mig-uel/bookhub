import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;

  margin: 15px 0;

  /* outline: 2px solid black; */
`
export const Title = styled.div`
  font-size: 1.9rem;
  font-weight: bold;
  color: #000;
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1rem;

  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
`
