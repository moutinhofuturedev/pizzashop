import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { registerRestaurants } from '@/api/register-restaurants'
import { ModeToggle } from '@/components/theme/mode-toggle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { SignUpForm } from './type'

export const SignUp = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<SignUpForm>()

  const { mutateAsync: handleRestaurantsRegistration } = useMutation({
    mutationFn: registerRestaurants,
  })

  const handleSignUp = async (data: SignUpForm) => {
    try {
      await handleRestaurantsRegistration({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        email: data.email,
        phone: data.phone,
      })

      reset()

      toast.success('Estabelecimento cadastrado com sucesso.', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch {
      toast.error('Erro ao cadastrar estabelecimento')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute left-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="absolute right-8 top-8 flex items-center">
          <ModeToggle />
        </div>
        <div className="w-[350px] flex flex-col justify-center gap-6 max-sm:mt-24 max-sm:px-4">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                className="border rounded"
                type="text"
                id="restaurantName"
                autoComplete="off"
                {...register('restaurantName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                className="border rounded"
                type="text"
                id="managerName"
                autoComplete="off"
                {...register('managerName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                className="border rounded"
                type="email"
                id="email"
                autoComplete="off"
                {...register('email')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu telefone</Label>
              <Input
                className="border rounded"
                type="tel"
                id="phone"
                autoComplete="off"
                {...register('phone')}
              />
            </div>
            <Button
              className="w-full border rounded"
              type="submit"
              disabled={isSubmitting}
            >
              Finalizar cadastro
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{''}{' '}
              <a className="underline underline-offset-4" href="">
                Termos de serviço
              </a>{' '}
              e{' '}
              <a className="underline underline-offset-4" href="">
                políticas de privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
