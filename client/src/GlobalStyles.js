import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Nunito Sans', sans-serif;
    font-size:1rem;
    letter-spacing:0.1px;
  }
  a {
    text-decoration:none;
  }
`;
 
export default GlobalStyle;