import { api } from '@/libs/axios'

interface UpdateRestaurantProfileBody {
  name: string
  description: string
}

export const updateRestaurantProfile = async ({
  name,
  description,
}: UpdateRestaurantProfileBody) => {
  await api.put('/profile', { name, description })
}
