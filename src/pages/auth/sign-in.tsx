import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'

import { signIn } from '@/api/sign-in'
import { ModeToggle } from '@/components/theme/mode-toggle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { SignInForm } from './type'

export const SignIn = () => {
  const [searchParams] = useSearchParams()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') || '',
    },
  })

  const { mutateAsync: handleAuthenticate } = useMutation({
    mutationFn: signIn,
  })

  const handleSignIn = async (data: SignInForm) => {
    try {
      await handleAuthenticate({ email: data.email })

      reset()

      toast.success('Enviamos um link de autenticação para seu e-mail.')
    } catch {
      toast.error('Event has not been created', {
        action: {
          label: 'Reenviar',
          onClick: () => {
            handleSignIn(data)
          },
        },
      })
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute left-8 top-8">
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>
        <div className="absolute right-8 top-8 flex items-center">
          <ModeToggle />
        </div>
        <div className="w-[350px] flex flex-col justify-center gap-6 max-sm:px-4">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                className="border rounded"
                type="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                {...register('email')}
              />
            </div>
            <Button
              className="w-full border rounded"
              type="submit"
              disabled={isSubmitting}
            >
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
