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
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 25rem;
    margin-right: 0.5rem;
    margin-left: 0.2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    width: 100vw;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--color-grey-2);
`

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 1rem;
    width: 100vw;
    border-bottom: 1px solid var(--color-grey-2);
    padding: 2rem;
`

export const StyledBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: -2rem;
    margin-bottom: 1rem;
    padding: 2rem;
    width: 100vw;
    border-top: 1px solid var(--color-grey-3)
`

export const StyledList = styled.div `
    background-color: var(--color-grey-2);
    margin-top: 1rem;
    border-radius: 5px;
`

export const StyledBottomHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const StyledAddButton = styled.button`
    background-color: var(--color-grey-3);
    padding-inline: 0.5rem;
    padding-top: 0rem;
    padding-bottom: 0rem;
    font-family: var(--font-primary);
    font-weight: 300;
    color: var(--color-grey-0);
    font-size: 1.5rem;
    
    :hover {
        background-color: var(--color-grey-2);
    }
    `

export const StyledNoListParagraph = styled.p`
    color: var(--color-grey-0);
    font-family: var(--font-primary);
    padding: 3rem;
`
