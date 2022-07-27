import styled from 'styled-components'

export const AddBookFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;

  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 10px;
  }
`
export const AddBookInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5px;
  margin: 10px 0;

  label {
    font-size: 1.2rem;
    font-weight: bold;
    align-self: flex-start;
  }

  @media (max-width: 768px) {
    width: 100vw;

    input {
      width: 100%;
    }
  }
`
