import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    width: 100%;
    max-width: 1600px;
  }

  html {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: black;
  }
`
