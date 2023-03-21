import { z } from "zod";

export const User = z.object({
  pk: z.string(),
  email: z.string().email(),
  description: z.string(),
  isActive: z.boolean()
})

export type User = z.infer<typeof User>;


export const UserRequestBody = User.omit( { pk: true } )
