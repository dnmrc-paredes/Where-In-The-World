import '../styles/globals.css'
import type { AppProps } from 'next/app'

// Components
import { Header } from '../components/header/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
