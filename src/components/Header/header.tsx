import React from 'react';
import * as H from './styles';
import Button from '../Button/button'

interface Props {
    
}

 const Header:React.FC<Props> = ()=>{
    return (
        <H.Container>
            <Button value='My Button' color='black'/>         
        </H.Container>
    )
}

export default Header