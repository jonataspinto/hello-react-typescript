import React from 'react';
import * as S from './styles';

interface Props {
    value: string,
    action: any
}

const Button:React.FC<Props> = (props: Props) => {
    const {value, action} = props
    return (
        <S.Button onClick={()=>action()}>{value}</S.Button>
    )
}

export default Button