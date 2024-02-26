import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import { OrderTableFilters } from '@/components/table-filters'
import { OrderTableRow } from '@/components/table-row'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const Orders = () => {
  const id = crypto.randomUUID()
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <OrderTableFilters />
        <div className="border rounded">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[140px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map(() => {
                return <OrderTableRow key={id} />
              })}
            </TableBody>
          </Table>
        </div>
        <Pagination pageIndex={0} totalItems={5} perPage={10} />
      </div>
    </>
  )
}
