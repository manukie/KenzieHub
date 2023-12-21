import { TechContext } from "../../providers/TechContext";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updTechSchema } from "./updTechSchema";
import { Select } from "../Select";
import { StyledModalParagraph, StyledFormBox, StyledInputBox } from "./styles";
import { StyledPrimaryButton } from "../../styles/button";

export const UpdTechForm = () => {
    const { editTech, theId } = useContext(TechContext)
 
    const {
       register,
       handleSubmit,
       formState: { errors },
       reset,
    } = useForm({
       resolver: zodResolver(updTechSchema),
    })
 
    const submit = async (formData, theId) => {
       await editTech(formData, theId)
       reset()
    }
 
    return (
       <form onSubmit={handleSubmit(submit)} noValidate>
         <StyledFormBox>
            <StyledInputBox>
              <StyledModalParagraph>Atualizar Status</StyledModalParagraph>
              <Select {...register("status")} error={errors.status}>
                <option value="">Selecione o seu nível</option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
              </Select>
            </StyledInputBox>
            <StyledPrimaryButton>Atualizar</StyledPrimaryButton>
         </StyledFormBox>
       </form>
    )
 }