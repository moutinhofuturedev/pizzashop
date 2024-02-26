import { Ban, Check, Search } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { TableCell, TableRow } from '@/components/ui/table'

export const OrderTableRow = () => {
  const [copied, setCopied] = useState(false)
  const orderId = crypto.randomUUID()

  const handleCopyClick = () => {
    navigator.clipboard.writeText(orderId).then(() => {
      setCopied(true)

      toast.success('O identificador foi copiado com sucesso!')
      console.log(`Id copiado ${copied}`)
    })
  }

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
          <HoverCard closeDelay={0} openDelay={0} key={orderId}>
            <HoverCardTrigger asChild>
              <Button
                onClick={handleCopyClick}
                type="button"
                variant="none"
                className="p-0 cursor-pointer text-muted-foreground max-w-48 whitespace-nowrap overflow-hidden text-ellipsis flex justify-start"
              >
                {orderId}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80" side="top">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-muted-foreground">
                    {orderId}
                  </span>
                  <p className="text-sm">Clique para copiar o identificador</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
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
