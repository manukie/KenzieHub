import { useState } from "react";
import { LoginForm } from "../../components/LoginForm";
import { StyledThirdButton } from "../../styles/button";
import { StyledParagraph, StyledTitleOne, StyledTitleTwo } from "../../styles/typography";
import { StyledRegisterBox, StyledBox, StyledHeader, StyledHigherBox } from "./styles";
import { Link } from "react-router-dom";

export const LoginPage = () => {

    return(
        <StyledHigherBox>
             <StyledHeader>
               <StyledTitleOne>Kenzie Hub</StyledTitleOne>
             </StyledHeader>
          <StyledBox>
             <StyledRegisterBox>
                <StyledTitleTwo>Login</StyledTitleTwo>
                <LoginForm />
                <StyledParagraph>Ainda não possui uma conta?</StyledParagraph>
                <StyledThirdButton><Link to="/register">Cadastre-se</Link></StyledThirdButton>
             </StyledRegisterBox>
          </StyledBox>
        </StyledHigherBox>
    )
}
