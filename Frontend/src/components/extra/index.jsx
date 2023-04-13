import React from "react";
import styled from "styled-components";
import  Imagen  from './form.png';

const BoxContainer = styled.div`
    width: auto;
    min-height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    position: absolute;
    overflow: hidden;
    left: 100px;
`;

export function ExtraBox(props){
    return <BoxContainer>  <img src={Imagen}/></BoxContainer>
}

