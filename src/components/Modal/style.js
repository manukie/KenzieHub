import styled from "styled-components";

export const StyledModalOverlay = styled.section`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
`

export const StyledModalBox = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: 1rem;
    background-color: var(--color-grey-2);
    margin: 1;

    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: var(--color-grey-1);
        padding: 0.8rem;
    }
`

export const StyledCloseButton = styled.button`
   background-color: var(--color-grey-3);
   color: var(--color-grey-1);
   padding: 0.3rem;
   
   :hover{
    background-color: var(--color-grey-2)
   }
`
export const StyledModalParagraph = styled.p`
    color: var(--color-grey-0);
    font-family: var(--font-primary);
`