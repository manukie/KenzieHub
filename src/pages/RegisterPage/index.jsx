import { RegisterForm } from "../../components/RegisterForm";
import { StyledSecondaryButton } from "../../styles/button";
import { StyledTitleOne, StyledTitleTwo } from "../../styles/typography";
import { StyledRegisterBox, StyledBox, StyledHeader, StyledHigherBox } from "./styles";
import { Link } from "react-router-dom";

export const RegisterPage = () => {

    return(
        <StyledHigherBox>
             <StyledHeader>
               <StyledTitleOne>Kenzie Hub</StyledTitleOne>
               <Link to="/"><StyledSecondaryButton>Voltar</StyledSecondaryButton></Link>
             </StyledHeader>
          <StyledBox>
             <StyledRegisterBox>
                <StyledTitleTwo>Crie sua conta</StyledTitleTwo>
                <p>Rápido e grátis, vamos nessa</p>
                <RegisterForm />
             </StyledRegisterBox>
          </StyledBox>
          </StyledHigherBox>
    )
}