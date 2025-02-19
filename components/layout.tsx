import type React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            ProjectHorizon
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/explore" className="hover:text-blue-500">
              Explore
            </Link>
            <Link href="/showcase" className="hover:text-blue-500">
              Showcase
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-4">
        <div className="container mx-auto px-4 text-center">© 2024 ProjectHorizon. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default Layout

