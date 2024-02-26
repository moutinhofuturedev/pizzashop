import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

interface PaginationProps {
  pageIndex: number
  totalItems: number
  perPage: number
}

export const Pagination = ({
  pageIndex,
  totalItems,
  perPage,
}: PaginationProps) => {
  const pages = Math.ceil(totalItems / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalItems} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-xs font-medium">
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button variant="outline">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Póxima página</span>
          </Button>
          <Button variant="outline">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button variant="outline">
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
