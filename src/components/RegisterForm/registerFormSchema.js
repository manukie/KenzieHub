import { z } from "zod";

export const registerFormSchema = z.object({
   name: z.string().nonempty("O nome é obrigatório!").min(2, "Seu nome precisa ter no mínimo três caracteres!"),
   email: z.string().nonempty("O e-mail é obrigatório!").email("Digite um e-mail válido!"),
   password: z
      .string()
      .nonempty("A senha é obrigatória!")
      .min(8, "A senha precisa conter pelo menos 8 caracteres!")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula!")  
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula!")
      .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial!")
      .regex(/(?=.*?[0-9])/, "É necesário pelo menos um número!"),
   confirm: z.string().nonempty("Confirme a sua senha!"),
   bio: z.string().nonempty("Você deve falar sobre si mesmo!").min(13, "Sua bio precisa ter no mínimo 13 caracteres!"),
   contact: z.string().nonempty("Você precisa colocar suas informações de contato!"),
   course_module: z.string().nonempty("Escolher o módulo é obrigatório!"),
}).refine(({ password, confirm }) => password === confirm, {
    message: "As senhas estão diferentes!",
    path: ["confirm"],
})