import React, { useContext } from "react";
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props){
const { switchToSignup } = useContext(AccountContext);
    return <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Correo" />
            <Marginer direction = "vertical" margin={3}/>
            <Input type="password" placeholder="Contraseña" />        
            <Marginer direction = "vertical" margin={10}/>
            <MutedLink href="#">¿Olvidaste tu contraseña?</MutedLink>
            <Marginer direction= "vertical" margin="1em"/>
            <SubmitButton type="submit">Iniciar Sesión</SubmitButton>
            <Marginer direction = "vertical" margin="1em"/>
            <MutedLink>¿No tienes una cuenta? <BoldLink onClick={switchToSignup}>Regístrate</BoldLink></MutedLink>
        </FormContainer>
    </BoxContainer>
}