import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useState, useEffect } from 'react'

// Contexts
import { AllCountriesProvider } from '../contexts/countriesContext'

// Theme
import { darkMode, lightMode } from '../theme/theme'

// Components
import { Header } from '../components/header/header'

function MyApp({ Component, pageProps }: AppProps) {

  const [currTheme, setCurrTheme] = useState<'light' | 'dark' | undefined>('light' ?? localStorage.getItem('themeMode'))

  useEffect(() => {
    const savedTheme = localStorage.getItem('themeMode')

    if (!savedTheme) {
      localStorage.setItem('themeMode', 'light')
      setCurrTheme(localStorage.getItem('themeMode') as 'light')
      return 
    }

    setCurrTheme(savedTheme as 'light' | 'dark')

  }, [])

  return (
    <AllCountriesProvider>
      <ThemeProvider theme={currTheme === 'light' ? lightMode : darkMode}>
        <Header value={currTheme} changeTheme={setCurrTheme}/>
        <Component {...pageProps} />
      </ThemeProvider>
    </AllCountriesProvider>
  )

}

export default MyApp
