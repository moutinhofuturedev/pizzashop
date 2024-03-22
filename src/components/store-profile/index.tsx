/* eslint-disable no-unused-expressions */
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import {
  getManagedRestaurant,
  GetManagerRestaurantResponse,
} from '@/api/get-managed-restaurant'
import { updateRestaurantProfile } from '@/api/update-restaurant-profile'
import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const storeProfileSchema = z.object({
  name: z.string().min(6),
  description: z.string(),
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export const StoreProfile = () => {
  const queryClient = useQueryClient()

  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  })

  const { mutateAsync: updateRestaurantProfileFn } = useMutation({
    mutationFn: updateRestaurantProfile,
    onSuccess: (_, { name, description }) => {
      const cached = queryClient.getQueryData<GetManagerRestaurantResponse>([
        'managed-restaurant',
      ])

      if (cached) {
        queryClient.setQueryData<GetManagerRestaurantResponse>(
          ['managed-restaurant'],
          {
            ...cached,
            name,
            description,
          },
        )
      }
    },
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name || 'Pizza Shop',
      description:
        managedRestaurant?.description ||
        'Essa é a descrição do meu estabelecimento',
    },
  })

  const handleUpdateRestaurantProfile = async (data: StoreProfileSchema) => {
    try {
      await updateRestaurantProfileFn({
        name: data.name,
        description: data.description,
      })

      toast.success('Informações atualizadas com sucesso')
    } catch {
      toast.error('Erro ao atualizar informações')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateRestaurantProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 gap-4 items-center">
            <Label className="text-right" htmlFor="name">
              Nome da loja
            </Label>
            <Input className="col-span-3" id="name" {...register('name')} />
          </div>
          <div className="grid grid-cols-4 gap-4 items-center">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register('description')}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" variant="sucess" disabled={isSubmitting}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
