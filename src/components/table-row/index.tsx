import { Ban, Check, Search } from 'lucide-react'

import { Button } from '../ui/button'
import { TableCell, TableRow } from '../ui/table'

export const OrderTableRow = () => {
  return (
    <>
      <TableRow>
        <TableCell>
          <Button variant="outline" size="xs">
            <Search className="h3 w-3" />
            <span className="sr-only">Detalhes do pedido</span>
          </Button>
        </TableCell>

        <TableCell className="font-mono text-xs font-medium">
          bmfdfd9s098fdfdn990
        </TableCell>

        <TableCell className="text-muted-foreground">15 minutos</TableCell>

        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-400" />
            <span className="font-medium text-muted-foreground">Pendente</span>
          </div>
        </TableCell>

        <TableCell className="font-medium">Paulo Moutinho Vitor</TableCell>

        <TableCell className="font-medium">R$ 149,90</TableCell>

        <TableCell>
          <Button variant="outline" size="xs">
            <Check className="h-3 w-3 mr-2" />
            Aprovar
          </Button>
        </TableCell>

        <TableCell>
          <Button variant="outline" size="xs">
            <Ban className="h-3 w-3 mr-2" />
            Cancelar
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}
