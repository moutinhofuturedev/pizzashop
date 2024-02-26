import { Search, X } from 'lucide-react'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Button } from '../ui/button'

export const OrderTableFilters = () => {
  return (
    <>
      <form action="" className="flex items-center gap-2">
        <span className="text-sm font-semibold">Filtros:</span>
        <Input placeholder="ID do pedido" className="h-8 w-auto" />
        <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
        <Select defaultValue="all">
          <SelectTrigger className="h-8 w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent defaultValue="all">
            <SelectItem value="all">Todos status</SelectItem>
            <SelectItem value="pending">Pendente</SelectItem>
            <SelectItem value="cancel">Cancelado</SelectItem>
            <SelectItem value="processing">Em preparo</SelectItem>
            <SelectItem value="delivering">Em entrega</SelectItem>
            <SelectItem value="delivered">Entregue</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit" variant="secondary" className="h-8 w-auto">
          <Search className="h-3 w-3 mr-2" />
          Filtar resultados
        </Button>
        <Button type="button" variant="secondary" className="h-8 w-auto">
          <X className="h-3 w-3 mr-2" />
          Remover filtros
        </Button>
      </form>
    </>
  )
}
