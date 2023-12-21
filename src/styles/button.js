import styled, { css } from "styled-components";

export const StyledPrimaryButton = styled.button`
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-grey-0);
    background: var(--color-primary);
    width: 100%;
    margin-bottom: 1rem;
    align-self: center;
    height: 3rem;
    padding: 0 1rem;
    margin-top: 1rem;
    border-radius: 5px;

    :hover{
        cursor: pointer;
        background-color: var(--color-primary-focus);
    }
`

export const StyledSecondaryButton = styled.button`
    background-color: var(--color-grey-3);
    font-family: var(--font-primary);
    color: var(--color-grey-0);
    border-radius: 5px;;
    width: 4.2181rem;
    height: 2.5069rem;

    :hover{
        cursor: pointer;
        background-color: var(--color-grey-1);
    }
`

export const StyledThirdButton = styled.button`
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-grey-0);
    background: var(--color-grey-1);
    width: 100%;
    margin-bottom: 1rem;
    align-self: center;
    height: 3rem;
    padding: 0 1rem;
    border-radius: 5px;

    :hover{
        cursor: pointer;
        background-color: var(--color-grey-2);
    }
`

