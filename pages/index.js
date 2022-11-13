import {useAddress,useMetamask} from '@thirdweb-dev/react'
import Main from '../components/Home/index.js'
import Image from 'next/image'
import Exabyte from './Exabyte-1.png'
import Head from 'next/head'

import logo from '../components/Header/logo.png'
const style={
  wrapper:'flex flex-col h-screen items-center justify-center transition-all duration-500 bg-gradient-to-tl from-[#260033] to-[#33001a] bg-size-200 bg-pos-0 hover:bg-pos-100',
  connectWalletButton:'bg-pink-800 text-white py-3 px-2 hover:bg-pink-900 hover:text-indigo-200 rounded-xl mt-3 tracking-wide'
}

export default function Home() {
  const connectWithMetamask=useMetamask();
  const address=useAddress();
  const Auth=()=>{
    return(
      <div>
      <Head>
        <title>Connect Wallet | Betelgeuse</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" />
      </Head>
      <div className={style.wrapper}>
        <div className="px-3">
          <Image src={logo} height={130} width={500} className='rounded-lg'/>
        </div>
        <div className="flex items-center justify-center space-x-2 mt-2">
          <span className='mr-2 text-slate-400'>Powered by </span><Image src={Exabyte} height={32} width={105}/>
        </div>
        <div>
          <p className='text-yellow-300 text-4xl mb-3 mt-12'>Connect wallet to access the app.</p>
        </div>
    <button onClick={connectWithMetamask} className={style.connectWalletButton}>CONNECT TO METAMASK</button>
    {/* <ConnectWallet/> */}
        </div>
        
        </div>
    )
  }
  return (
    <div>
      {address?<Main address={address}/>:Auth()}
    </div>
  )
}
