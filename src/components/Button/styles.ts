import styled from 'styled-components';

const Button = styled.button`
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.primary};
    height: 40px;
    border-radius: 8px;
    padding: 4px;
    &:active{
        background-color: ${(props) => props.theme.colors.secundary}
    }
`

export { Button };
