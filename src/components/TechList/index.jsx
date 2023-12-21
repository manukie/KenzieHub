import { TechCard } from "./TechCard";
import { StyledTechList } from "./style";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const TechList = () => {

   const { techList } = useContext(TechContext)


   return (
      <StyledTechList>
         {techList.map((tech) => (
            <TechCard key={tech.id} tech={tech} />
         ))}
      </StyledTechList>
   )
}