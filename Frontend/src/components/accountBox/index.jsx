import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginform";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupform";

const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    left: 400px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
    position: relative;
    overflow: hidden;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left: -70px;
    background: rgb(245,223,199);
    background: linear-gradient(45deg, rgba(245,223,199,1) 0%, rgba(171,83,70,1) 100%);
`;

    const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    z-index: 10;
    margin: 0;
`;

const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 13px;
    z-index: 10;
    margin: 0;
    margin-top: 5px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
};

export function AccountBox(props){
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
        setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
        setActive("signup");
        }, 450);
    };

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
        setActive("signin");
        }, 450);
    };

    const contextValue = { switchToSignup, switchToSignin };

    return <AccountContext.Provider value={contextValue}>
        <BoxContainer>
            <TopContainer>
                <BackDrop initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={backdropVariants} transition={expandingTransition}/>
                {active === "signin" && (<HeaderContainer>
                    <HeaderText>¡Bienvenido de nuevo!</HeaderText>
                    <SmallText>Inicie sesión para continuar</SmallText>
                </HeaderContainer>)}
                {active === "signup" && (<HeaderContainer>
                    <HeaderText>¡Registra tu cuenta!</HeaderText>
                    <SmallText>Es fácil y rápido.</SmallText>
                </HeaderContainer>
                )}
            </TopContainer>
            <InnerContainer>
                {active === "signin" && <LoginForm />}
                {active === "signup" && <SignupForm />}
            </InnerContainer>
        </BoxContainer>
    </AccountContext.Provider>
}

