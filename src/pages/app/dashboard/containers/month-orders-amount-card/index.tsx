import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const MonthOrdersAmountCard = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between pb-2 space-y-0 max-sm:items-end">
        <CardTitle className="text-base">Pedidos (mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tighter">246</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+6%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
