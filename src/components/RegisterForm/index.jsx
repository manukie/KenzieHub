import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { Select } from "../Select";
import { Input } from "../Input";
import { StyledPForm } from "../../styles/typography";
import { StyledPrimaryButton } from "../../styles/button";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";


export const RegisterForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(registerFormSchema),
   })

   const { userRegister } = useContext(UserContext)

   const submit = (formData) => {
      userRegister(formData)
   }

   return (
      <form onSubmit={handleSubmit(submit)} noValidate>
         <StyledPForm>Nome</StyledPForm>
         <Input
            type="text"
            placeholder="Seu nome"
            {...register("name")}
            error={errors.name}
         />

         <StyledPForm>Email</StyledPForm>
         <Input
            type="email"
            placeholder="Seu e-mail"
            {...register("email")}
            error={errors.email}
         />

         <StyledPForm>Senha</StyledPForm>
         <Input
            type="password"
            placeholder="Crie uma senha"
            {...register("password")}
            error={errors.password}
         />

         <StyledPForm>Confirme Senha</StyledPForm>
         <Input
            type="password"
            placeholder="Confirme sua senha"
            {...register("confirm")}
            error={errors.confirm}
         />

         <StyledPForm>Bio</StyledPForm>
         <Input
            type="text"
            placeholder="Sua bio"
            {...register("bio")}
            error={errors.bio}
         />

         <StyledPForm>Contato</StyledPForm>
         <Input
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
            error={errors.contact}
         />

        <StyledPForm>Selecionar módulo</StyledPForm>
        <Select {...register("course_module")} error={errors.course_module}>
            <option value="">Selecione o módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
         </Select>

         <StyledPrimaryButton type="submit">Cadastrar</StyledPrimaryButton>
      </form>
   )
}