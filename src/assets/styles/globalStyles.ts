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
    background: var(--white) ;
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

  .searchModal{
    height: 35rem;
    width: 31.25rem;
    padding: 1.25rem 0;

    background: var(--white);

    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
    border-radius: 8px;

    border: none;

    outline: none;

    display: flex ;
    align-items: center ;
    justify-content: center ;
    flex-direction: column ;

    gap: 1.25rem
  }

  .overlayModal {
    background: rgba(0, 0, 0, 0.6 );

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center ;
  }
  
`;
