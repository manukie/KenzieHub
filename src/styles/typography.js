import styled, { css } from "styled-components";

export const TitleStyles = css`
    font-family: var(--font-primary);
    color: var(--color-grey-0);
    line-height: 1.6;
    font-weight: 800;

    ${({fontSize}) => {
        switch(fontSize){
            case "lg":
                return css`
                    font-size: clamp(1.5rem, 8vw, 2.125rem);
                `
            case "md":
                return css`
                    font-size: clamp(1.4rem, 8vw, 2rem);
                `
        }
    }}
  
`

export const StyledTitleOne = styled.h1`
    ${TitleStyles};
    color: var(--color-primary);
`

export const StyledTitleTwo = styled.h2`
    ${TitleStyles};
`

export const StyledTitleThree = styled.h3`
    ${TitleStyles};
`

export const StyledParagraph = styled.p`
    font-family: var(--font-primary);
    color: ${({fontColor}) => fontColor ? fontColor : "var(--color-grey-1)"};
    line-height: 1.6;
    font-weight: 400;

    strong{
        font-weight: 800;
    }

    ${({fontSize}) => {
        switch(fontSize){            
            case "lg":
                return css`
                    font-size: 1.5rem;                    
                `
            default: 
                return css`
                    font-size: 1.125rem;
                `    
        }
    }}
`

export const StyledPForm = styled.h3`
    font-family: var(--font-primary);
    font-weight: 300;
    color: var(--color-grey-0);
    font-size: 1rem;
    margin-bottom: 1rem;
    margin-top: 0.8rem;
`
export const StyledError = styled.h3`
    font-family: var(--font-primary);
    font-weight: 300;
    color: red;
    font-size: 1rem;
    margin-bottom: 1rem;
    margin-top: 0.8rem;
`
