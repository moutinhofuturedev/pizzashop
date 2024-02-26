import { Helmet } from 'react-helmet-async'

import { OrderTableFilters } from '@/components/table-filters'
import { OrderTableHeader } from '@/components/table-header'
import { OrderTableRow } from '@/components/table-row'
import { Table, TableBody, TableHeader } from '@/components/ui/table'

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
              <OrderTableHeader />
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map(() => {
                return <OrderTableRow key={id} />
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
