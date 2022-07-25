import styled from 'styled-components'

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 200px;

  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  transition: all 0.3s ease-in-out;
`

export const BookTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`
export const BookActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;

  width: auto;
  height: auto;

  transition: all 0.3s ease-in-out;

  font-size: 1.2rem;
`

export const BookAuthor = styled.div``
