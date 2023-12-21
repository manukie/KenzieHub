import { z } from "zod";


export const addTechSchema = z.object({
    title: z.string().nonempty("É necessário nomear a tecnologia!").min(2, "O nome da tecnologia precisa conter pelo menos 2 caracteres!"),
    status: z.string().nonempty("Escolher o nível de conhecimento é obrigatório!"),
})

