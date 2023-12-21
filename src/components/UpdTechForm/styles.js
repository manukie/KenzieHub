import styled from "styled-components";

export const StyledFormBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1.5rem;
    gap: 1rem;
`

export const StyledModalParagraph = styled.p`
    color: var(--color-grey-0);
    font-family: var(--font-primary);
    font-weight: 200;
`

export const StyledInputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    
    input{
        border: 1px solid var(--color-grey-0);
    }

    select{
        border: 1px solid var(--color-grey-0);
        border-radius: 5px;
    }
`