import styled, { css } from "styled-components";

export const StyledFieldBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const InputGeneralStyles = css`
    font-family: var(--font-primary);
    font-size: 1rem;
    border-radius: 5px;
 
    background: var(--color-grey-2);    

    ${({error}) => {
        if(error){
            return css`
                border: 2px solid red;
            `
        }
    }}
`

export const StyledInput = styled.input`
    ${InputGeneralStyles};
    color: var(--color-grey-0);
    height: 3rem;
    padding: 0 1rem;
`

export const StyledTextarea = styled.textarea`
    ${InputGeneralStyles};
    resize: none;
    padding: 1rem;
    height: 12.5rem;
`

export const StyledLabel = styled.label`
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 800;
`