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

  label {
    font-size: 1.2rem;
    font-weight: bold;
    align-self: flex-start;
  }

  input {
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    width: 100vw;

    input {
      width: 100%;
    }
  }
`
export const AddBookButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    font-size: 1.1rem;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`
