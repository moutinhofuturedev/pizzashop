import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data: { date: string; revenue: number }[] = [
  { date: '01/12', revenue: 1200 },
  { date: '03/12', revenue: 200 },
  { date: '06/12', revenue: 1111 },
  { date: '07/12', revenue: 1897 },
  { date: '10/12', revenue: 1455 },
  { date: '15/12', revenue: 1666 },
  { date: '20/12', revenue: 908 },
]

export const RevenueChart = () => {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis
              dataKey="date"
              style={{ fontSize: 12 }}
              tickLine={false}
              dy={16}
            />
            <YAxis
              width={80}
              stroke="#888"
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.red[700]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
