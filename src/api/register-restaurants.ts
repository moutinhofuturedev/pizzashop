import { api } from '@/libs/axios'

export interface RegisterRestaurantsProps {
  restaurantName: string
  managerName: string
  email: string
  phone: number
}

export const registerRestaurants = async ({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantsProps) => {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone,
  })
}
