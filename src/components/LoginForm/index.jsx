import { Input } from "../Input";
import { StyledPForm } from "../../styles/typography";
import { useForm } from "react-hook-form";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";
import { StyledPrimaryButton } from "../../styles/button";


export const LoginForm = () => {
   const { register, handleSubmit } = useForm()
   const { userLogin } = useContext(UserContext)

   const submit = (formData) => {
       userLogin(formData)
   }
   return (
      <form onSubmit={handleSubmit(submit)}>
         <StyledPForm>Email</StyledPForm>
         <Input type="text" placeholder="Seu e-mail" {...register("email")} />
         <StyledPForm>Senha</StyledPForm>
         <Input type="password" placeholder="Sua senha" {...register("password")} />
         <StyledPrimaryButton type="submit">Entrar</StyledPrimaryButton>
      </form>
   )
}