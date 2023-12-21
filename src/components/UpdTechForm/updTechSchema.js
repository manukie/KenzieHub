import { z } from "zod";


export const updTechSchema = z.object({
    status: z.string().nonempty("Atualizar o nível de conhecimento é obrigatório!"),
})
