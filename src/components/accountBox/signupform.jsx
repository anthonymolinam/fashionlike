import React, { useContext } from "react";
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props){
    const { switchToSignin } = useContext(AccountContext);
    return <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Nombre completo" required/>
            <Marginer direction = "vertical" margin={3}/>
            <Input type="email" placeholder="Correo" required/>
            <Marginer direction = "vertical" margin={3}/>
            <Input type="password" placeholder="Contraseña" required/>
            <Marginer direction = "vertical" margin={3}/>
            <Input type="password" placeholder="Confirma la contraseña" required />                
            <Marginer direction = "vertical" margin={10}/>
            <SubmitButton type="submit">Registrarte</SubmitButton>
            <Marginer direction = "vertical" margin="1em"/>
            <MutedLink>¿Ya tiene una cuenta? <BoldLink onClick={switchToSignin}>Inicie Sesión</BoldLink></MutedLink>
        </FormContainer>
    </BoxContainer>
}