import { TechContext } from "../../providers/TechContext";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTechSchema } from "./addTechSchema";
import { Input } from "../Input";
import { Select } from "../Select";
import { StyledModalParagraph, StyledFormBox, StyledInputBox } from "./styles";
import { StyledPrimaryButton } from "../../styles/button";

export const AddTechForm = () => {
    const { createTech } = useContext(TechContext)
 
    const {
       register,
       handleSubmit,
       formState: { errors },
       reset,
    } = useForm({
       resolver: zodResolver(addTechSchema),
    })
 
    const submit = async (formData) => {
       await createTech(formData)
       reset()
    }
 
    return (
       <form onSubmit={handleSubmit(submit)} noValidate>
         <StyledFormBox>
            <StyledInputBox>
               <StyledModalParagraph>Nome</StyledModalParagraph>
               <Input type="text" placeholder="Nome da tecnologia"{...register("title")} error={errors.title} />
            </StyledInputBox>
            <StyledInputBox>
              <StyledModalParagraph>Selecionar Status</StyledModalParagraph>
              <Select {...register("status")} error={errors.status}>
                <option value="">Selecione o seu nível</option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
              </Select>
            </StyledInputBox>
            <StyledPrimaryButton>Enviar</StyledPrimaryButton>
         </StyledFormBox>
       </form>
    )
 }
