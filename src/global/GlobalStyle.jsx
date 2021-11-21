import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    * {
    box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans', 'Lato', sans-serif;
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
         font-family: 'Lato', sans-serif;
    }

`;

export default GlobalStyle;
