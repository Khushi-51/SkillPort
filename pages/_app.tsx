import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"
import "@/styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

