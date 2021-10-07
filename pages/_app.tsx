import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

// Theme
import { theme } from '../theme/theme'

// Components
import { Header } from '../components/header/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
