import { Helmet } from 'react-helmet-async'

import { DaysOrdersAmountCard } from './containers/days-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './containers/month-canceled-orders-amount-card'
import { MonthOrdersAmountCard } from './containers/month-orders-amount-card'
import { MonthRevenueCard } from './containers/month-revenue-card'
import { PopularProductChart } from './containers/popular-produtcs-chart'
import { RevenueChart } from './containers/revenue-chart'

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1>Dashboard</h1>

        <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-2">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DaysOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductChart />
        </div>
      </div>
    </>
  )
}
