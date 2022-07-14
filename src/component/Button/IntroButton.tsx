import { stringify } from 'querystring';
import react from 'react';
import styled from 'styled-components';
import  Accessible  from '../../assets/icons/Accessible.svg';
import ChildCare from '../../assets/icons/ChildCare.svg';
import Elderly from '../../assets/icons/Elderly.svg';
import Pets from '../../assets/icons/Pets.svg';


export const StyledIntroButton = styled.button`
    width: 343px;
    height: 86px;
    border-radius: 16px;
    background: #f1f1f1;
    border: none;
    margin-top 5px;
`
export const StyledIntroButtonSelect = styled.button`
    width: 343px;
    height: 54px;
    border-radius: 16px;
    background: #FFFDF5;
    border: none;
    margin-top 5px;
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
    margin: auto;
    background: #ffff;
`

export const Area = styled.div`
    width: 376px;
    height: 812px;
    display: flex;
    flex-direction: column;
`


export const SelectText = styled.text`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    color: #EDAF10;
`



const IntroButton: React.FC = () => {

    // const logo = require("../icons/Accessible.svg") as string;

    return (
        <> 
            <Area>
                <StyleBoxIntroButton>
                    <StyledIntroButton><img src={Accessible}/></StyledIntroButton>
                    <StyledIntroButton><img src={Elderly}/></StyledIntroButton> 
                    <StyledIntroButton><img src={ChildCare}/></StyledIntroButton> 
                    <StyledIntroButton><img src={Pets}/></StyledIntroButton>    
                </StyleBoxIntroButton>
                <StyleBoxIntroButton>
                    <StyledIntroButtonSelect><SelectText>선택하기</SelectText></StyledIntroButtonSelect> 
                </StyleBoxIntroButton>  
            </Area>
        </>
    );
}

export default IntroButton;