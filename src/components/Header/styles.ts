import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    height: 80px;
    background-color: ${props=> props.theme.colors.secundary};
`

export { Container }