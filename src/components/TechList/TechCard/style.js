import styled from "styled-components";

export const StyledTechCard = styled.li`
   padding: 0.8rem;
   font-family: var(--font-primary);
`
export const StyledRSTechCard = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 1rem;

   p{
    font-size: 0.9rem;
   }

   button{
    color: var(--color-grey-0);
    font-size: 0.7rem;
    :hover{
        color: var(--color-grey-1)
    }
   }
`
export const StyledSubCard = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
   padding: 1rem;
   background-color: var(--color-grey-4);

   h3{
    font-size: 1rem;
   }
`