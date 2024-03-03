import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'
export const AuthLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-2 antialiased max-sm:grid-cols-1 max-sm:flex">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between max-sm:hidden">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">pizza.shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy;pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center relative">
        <Outlet />
      </div>
    </div>
  )
}
