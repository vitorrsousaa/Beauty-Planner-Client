import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
  :root{
    --primary: #274C77;
    --secondary: #6096ba;

    --light: #a3cef1;
    --red: #a31010;
    --green: #27ae60;
    --yellow: #e2b93b;

    --black: #121212;
    --black-2: #282828;
    --white: #fbfbfb;

    --gray-high: #8b8c89;
    --gray-medium: #c4c4c4;
    --gray-light: #e7ecef;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Inter', sans-serif;
  }
  
  body {
    color: var(---black);
  }

  a{
    text-decoration: none ;
    font-size: 1rem ;
  }

  button{
    cursor: pointer;
  }

  input{
    outline: none ;
    
  }
  
`;
