import styled from 'styled-components';
import { shape } from '../../styles/radius';
import { pallete } from '../../styles/colors/pallete';
import {typography } from '../../styles/typography';
import { sementic } from '../../styles/colors/sementic'

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  width: 28vw;
  height: 61vh;
  border-radius: ${shape.Large}px;
  padding: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const CloseBtnWrap = styled.div`
  display:flex;
  width: 95%;
  height: 18px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  padding-left:85%;
  img {
    display:flex;
    width: 18px;
    height: 18px;
  }
`;
export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 7.3vh;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 17vh;
  
  div {
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 8.1vh;
    
    span {
      font-family: ${typography.Body2_Regular};
      color: ${sementic.Label.Alternative};
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 4px;
      width: 95%;
      text-align: left;
      box-sizing: border-box;
    }
    
    input {
      width: 95%;
      height: 5vh;
      border-radius: ${shape.ExtraSmall}px;
      padding: 12px 14px;
      background-color: ${sementic.Fill.Netural};
      border: none;
      outline: none;
      box-sizing: border-box;
    }
  }
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 19vh;
  justify-content: space-between;
  
  button {
    width: 95%;
    height: 5.4vh;
    border-radius: ${shape.Large}px;
    background-color: ${sementic.Primary.Normal};
    color: white;
    font-family: ${typography.Body2_Medium};
    font-size:14px;
    border: none;
    cursor: pointer;
  }
  
  button:nth-child(4) {
    display: flex;
    background-color: ${sementic.Fill.Normal};
    justify-content: space-between;
    align-items: center; 
    color:black;
    padding-right:32%;
    font-family:${typography.Body2_Medium};
    font-weight:500;
    font-size:14px;
    img {
      margin-left:13%;
    }
  }
  
  div {
    height: 18px;
    width: 95%;
    
  }
  div:nth-child(2){
    display:flex;
    flex-direction:row;
    font-Family: "Pretendard";
    font-size:14px;
    color:${sementic.Label.Normal};
    width: 80%;

    
    div{
        justify-content:center;
        width:80px;
        height:100%;
        text-decoration:underline;
    }
    div:nth-child(2){
        text-decoration:none;
    }
    div:nth-child(2){
        width:30px;
    }

  }

  div:nth-child(3){
    display:flex;
    flex-direction:row;
    align-items:center;
    border:none;
    hr{
        width:144px;
        background-color:${sementic.Line.Normal};
        height:1px;
        border:0;
    }
    span{
        color:${sementic.Line.Normal};
    }
}
`;