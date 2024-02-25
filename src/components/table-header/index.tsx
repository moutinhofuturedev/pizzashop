import { TableHead, TableRow } from '../ui/table'

export const OrderTableHeader = () => {
  const headerTitle = [
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
        {headerTitle.map((header, i) => {
          return <TableHead key={i}>{header}</TableHead>
        })}
      </TableRow>
    </>
  )
}
