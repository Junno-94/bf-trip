import react from 'react';
import styled from 'styled-components';
// import {Reactcomponet as SVGtest} from "../icons/"


export const StyledIntroButton = styled.button`
    width: 343px;
    height: 86px;
    border-radius: 16px;
    background: #f1f1f1;
    border: none;
`
export const StyleBoxIntroButton = styled.button`
    width: 343px;
    height: auto;
    padding: 7px;
    display: flex;
    border: none;
    flex-direction: column;
    align-content: center;
    align-items: center;
`



const IntroButton: React.FC = () => {

    // const logo = require("../icons/Accessible.svg") as string;

    return (
        <>
            <StyleBoxIntroButton>
            <StyledIntroButton><img src='../icons/Accessible.svg'/>장애인</StyledIntroButton>
            <StyledIntroButton>고령자</StyledIntroButton> 
            <StyledIntroButton>영유아</StyledIntroButton> 
            <StyledIntroButton>펫팸족</StyledIntroButton>    
            </StyleBoxIntroButton>
            <StyleBoxIntroButton>
            <StyledIntroButton>선택하기</StyledIntroButton> 
            </StyleBoxIntroButton>  
        </>
    );
}

export default IntroButton;