import Header from '../components/Header/Header'
import {ThemeProvider} from 'next-themes'
const TopNavbarLayout=({children})=>{
  return(
    <ThemeProvider>
      <Header/>
    <main>{children}</main>
    </ThemeProvider>
  )
}
export default TopNavbarLayout