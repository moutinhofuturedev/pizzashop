import { Helmet } from 'react-helmet-async'

import { OrderTableHeader } from '@/components/table-header'
import { OrderTableRow } from '@/components/table-row'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableHeader } from '@/components/ui/table'

export const Orders = () => {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <form action="" className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>
          <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
        </form>

        <div className="border rounded">
          <Table>
            <TableHeader>
              <OrderTableHeader />
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_, i) => {
                return <OrderTableRow key={i} />
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
