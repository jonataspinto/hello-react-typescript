import React from 'react';
import styled from 'styled-components';

interface Props {
    value: string,
    color: string
}

const ButtonElement = styled.button`
    color: ${(props:Props) => props.color};
    background-color: red;
    padding: 10px;
`

const Button:React.FC<Props> = (props: Props) => {
    const {value, color} = props
    return (
        <ButtonElement value={value} color={color} >{value}</ButtonElement>
    )
}

export default Button