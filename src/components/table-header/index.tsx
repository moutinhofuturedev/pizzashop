import { TableHead, TableRow } from '../ui/table'

export const OrderTableHeader = () => {
  const id = crypto.randomUUID()
  const headerTitle: string[] = [
    '',
    'Identificador',
    'Realizado há',
    'Status',
    'Cliente',
    'Total do pedido',
    '',
    '',
  ]

  return (
    <>
      <TableRow>
        {headerTitle.map((header) => {
          return <TableHead key={id}>{header}</TableHead>
        })}
      </TableRow>
    </>
  )
}
