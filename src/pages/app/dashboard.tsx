import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <h1>Dashbooard</h1>
      <Button variant="outline">Enviar</Button>
    </>
  )
}
