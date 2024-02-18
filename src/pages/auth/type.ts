import { z } from 'zod'

export const signInForm = z.object({
  email: z.string().email(),
})

export const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.number(),
  email: z.string().email(),
})

export type SignInForm = z.infer<typeof signInForm>
export type SignUpForm = z.infer<typeof signUpForm>
