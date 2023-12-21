import { useEffect, useRef, useState } from "react";
import { useOutclick } from "../../hooks/useOutclick";
import { useKeydown } from "../../hooks/useKeydown";
import { StyledModalOverlay, StyledModalBox, StyledCloseButton, StyledModalParagraph } from "./style";

export const Modal = ({ children, setIsOpen, techid }) => {
    

    const modalRef = useOutclick(() => {
        setIsOpen(false)
    })

    const buttonRef = useKeydown("Escape", (element) => {
        element.click()
    })
    return (
        <StyledModalOverlay role="dialog">
            <StyledModalBox ref={modalRef}>
                <header>
                    <StyledModalParagraph>Tecnologia</StyledModalParagraph>
                    <StyledCloseButton ref={buttonRef} onClick={() => setIsOpen(false)}>X</StyledCloseButton>
                </header>
                {children}
            </StyledModalBox>
        </StyledModalOverlay>
    )
}