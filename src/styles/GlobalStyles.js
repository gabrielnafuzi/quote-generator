import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html { 
    min-height: 100%;
    background: #fff;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: Raleway, sans-serif;
  }

`
