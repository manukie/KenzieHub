import styled from "styled-components";

export const StyledHigherBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-grey-3);
    flex-wrap: wrap;
`

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 1rem;
`

export const StyledRegisterBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--color-white);
    padding: clamp(1.5625rem, 8vw, 3.125rem);
    flex-wrap: wrap;

    h2 {
        font-size: 1.2rem;
        padding-bottom: 1.5rem;
    }

    p {
        font-size: 1rem;
        font-family: var(--font-primary);
        color: var(--color-grey-1);
        padding-bottom: 1.1rem;
    }
`