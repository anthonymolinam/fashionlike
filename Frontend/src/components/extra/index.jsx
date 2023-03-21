import React from "react";
import styled from "styled-components";
import  Imagen  from './form.png';

const BoxContainer = styled.div`
    width: 650px;
    min-height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
    position: absolute;
    overflow: hidden;
    left: 200px;
`;

export function ExtraBox(props){
    return <BoxContainer>  <img src={Imagen}/></BoxContainer>
}

