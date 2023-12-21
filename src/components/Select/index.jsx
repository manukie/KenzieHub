import { forwardRef } from "react";
import { StyledSelect } from "./style";
import { StyledError } from "../../styles/typography";

export const Select = forwardRef(({children, error,...rest}, ref) => {
    return(
        <div>
            <StyledSelect ref={ref} {...rest}>
                {children}
            </StyledSelect>
            {error ? <StyledError>{error.message}</StyledError> : null}
         </div>
    )
})