import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

*:before,
*:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

a,
a:visited {
    text-decoration: none;
    font-family: inherit;
    cursor: pointer;
}

input,
button,
textarea {
    font-family: inherit;
}

input::-ms-clear {
    display: none;
}
input[type='search']::-webkit-search-cancel-button {
    display: none;
}
button, 
svg {
    cursor: pointer;
}
button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

ul li {
    list-style: none;
}

html,
body {
    width: 100%;
    height: 100%;
    line-height: 1;
    font-size: 14px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: 'Roboto', sans-serif;
    color: #000000;
    background: linear-gradient(to bottom, rgb(10 66 171 / 40%), rgb(125 179 225 / 80%), #ced8f1);
    font-weight: 400;
    font-style: normal;
    overflow: auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: 400;
}
`;

export default GlobalStyle;
