import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${props=> props.theme.colors.background};
        color: ${props=> props.theme.colors.text}
    }

    button{
        border: none;
        outline: none 
    }
`