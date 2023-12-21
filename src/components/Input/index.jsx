import { forwardRef } from "react";
import { StyledInput } from "../../styles/form";
import { StyledError } from "../../styles/typography";
import { StyledFieldBox } from "../../styles/form";

export const Input = forwardRef(({ error, ...rest }, ref) => {
   return (
      <StyledFieldBox>
         <StyledInput ref={ref} {...rest} />
         {error ? <StyledError>{error.message}</StyledError> : null}
      </StyledFieldBox>
   )
})