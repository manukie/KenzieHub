import { StyledSecondaryButton } from "../../styles/button";
import { StyledParagraph, StyledTitleOne, StyledTitleThree, StyledTitleTwo } from "../../styles/typography";
import { StyledBottom, StyledBox, StyledHeader, StyledHigherBox, StyledList, StyledAddButton, StyledNoListParagraph, StyledBottomHeader } from "./styles";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { Modal } from "../../components/Modal";
import { AddTechForm } from "../../components/AddTechForm";
import { TechList } from "../../components/TechList";

export const DashboardPage = () => {
    const { user, userLogout } = useContext(UserContext)
    const [ isOpen, setIsOpen ] = useState(false)

    return(
        <StyledHigherBox>
            <StyledHeader>
               <StyledTitleOne>Kenzie Hub</StyledTitleOne>
               <StyledSecondaryButton onClick={() => userLogout()}>Sair</StyledSecondaryButton>
            </StyledHeader>
            <StyledBox>       
               <StyledTitleTwo>Olá, {user.name} </StyledTitleTwo>
               <StyledParagraph>{user.course_module}</StyledParagraph>
            </StyledBox>
            <StyledBottom>
                <StyledBottomHeader>
                    <StyledTitleThree>Tecnologias</StyledTitleThree>
                    <StyledAddButton onClick={() => setIsOpen(true)}>+</StyledAddButton>
                    {isOpen ? <Modal setIsOpen={setIsOpen}>
                        <AddTechForm></AddTechForm>
                    </Modal> : null}
                </StyledBottomHeader>
                <StyledList>
                  <TechList></TechList>
                </StyledList>
            </StyledBottom>
          </StyledHigherBox>
    )
}