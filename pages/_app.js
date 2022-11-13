import {ChainId,ThirdwebProvider} from '@thirdweb-dev/react'
import '../styles/globals.css' 
import {ThemeProvider} from 'next-themes'
function MyApp({ Component, pageProps }) {
  return(
  <ThirdwebProvider
    desiredChainId={ChainId.Mumbai}
    chianRpc={{[
      ChainId.Mumbai
    ]:'https://matic.getblock.io/8a52435a-dd77-41d3-b94b-4fa137bf1302/testnet/'}}>
  <ThemeProvider>
  <Component {...pageProps} />
  </ThemeProvider>
    </ThirdwebProvider>
)
}
export default MyApp
