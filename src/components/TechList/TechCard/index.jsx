import { StyledTitleThree, StyledParagraph } from "../../../styles/typography";
import { StyledTechCard, StyledRSTechCard, StyledSubCard } from "./style";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { Modal } from "../../Modal";
import { useState } from "react";
import { UpdTechForm } from "../../UpdTechForm";

export const TechCard = ({ tech }) => {
   const { deleteTech, editTech, setTheId } = useContext(TechContext);
   const [ isOpen, setIsOpen ] = useState(false)

   return (
      <StyledTechCard>
        <StyledSubCard>
          <div>
             <StyledTitleThree>
                <strong>{tech.title}</strong>             
             </StyledTitleThree>
          </div>
          <StyledRSTechCard>
             <StyledParagraph>{tech.status}</StyledParagraph>
             <button onClick={() => deleteTech(tech.id)}>X</button>
             <button onClick={() => setIsOpen(true)} onFocus={() => setTheId(tech.id)}>Atualizar</button>
                    {isOpen ? <Modal setIsOpen={setIsOpen}>
                        <UpdTechForm></UpdTechForm>
                    </Modal> : null}
          </StyledRSTechCard>
        </StyledSubCard>
      </StyledTechCard>
   )
}