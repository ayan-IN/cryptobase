import '../styles/globals.css'
import { CryptoProvider } from '../context/CryptoContext'

export default function App({ Component, pageProps }) {
  return (
    <CryptoProvider>
      <Component {...pageProps} />
    </CryptoProvider>
  )
}
