import react from 'react';
import styled from 'styled-components'
import { ReactComponent as Accessible } from '../../assets/icons/Accessible.svg';


export const StyledIntroButton = styled.button`
    width: 343px;
    height: 86px;
    border-radius: 16px;
    background: #f1f1f1;
    border: none;
`


const IntroButton = ( ) => {
    return (
        <>
            <StyledIntroButton><Accessible/></StyledIntroButton>        
        </>
    );
}

export default IntroButton;