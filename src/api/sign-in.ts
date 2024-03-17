import { api } from '@/libs/axios'

export interface SignInBody {
  email: string
}

export const signIn = async ({ email }: SignInBody) => {
  await api.post('/authenticate', { email })
}
