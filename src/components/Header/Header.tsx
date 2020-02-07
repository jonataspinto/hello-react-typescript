import React from 'react';
import * as S from './styles';
import Button from '../Button'

interface Props {
    toggleTheme: any
}

const Header:React.FC<Props> = (props:Props)=>{
    const { toggleTheme } = props
    return (
        <S.Container>
            <Button action={toggleTheme} value='My Button'/>         
        </S.Container>
    )
}

export default Header