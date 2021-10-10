import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

// Contexts
import { AllCountriesProvider } from '../contexts/countriesContext'

// Theme
import { theme } from '../theme/theme'

// Components
import { Header } from '../components/header/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AllCountriesProvider>
      <ThemeProvider theme={theme}>
        <Header/>
        <Component {...pageProps} />
      </ThemeProvider>
    </AllCountriesProvider>
  )
}

export default MyApp
