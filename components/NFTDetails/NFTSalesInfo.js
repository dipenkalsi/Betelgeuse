import {BsCreditCard2FrontFill,BsFillTagFill} from 'react-icons/bs'
import {AiOutlineDollar} from 'react-icons/ai'
import {useState} from 'react'
import {FaTicketAlt} from 'react-icons/fa'
import Image from 'next/image'
import { useSDK } from '@thirdweb-dev/react'
const style={
  wrapper:'flex flex-col divide-y border dark:divide-black dark:rounded-lg dark:border-black mx-2 lg:mx-0 rounded-lg mb-5 lg:mb-0',
  header:`flex items-center justify-between rounded-t-lg px-6 py-4 dark:bg-[#262a30]`,
  headerContent:`flex items-center space-x-2 `,
  headerIcon:`h-6 w-6`,
  greyText:`text-gray-400`,
  mainContainer:`space-y-4 rounded-b-lg px-6 py-4 dark:bg-[#313339]`,
  priceInfo:`space-y-1`,
  mediumFont:`font-medium`,
  priceContainer:`flex items-center space-x-2`,
  price:`text-3xl font-bold mr-1`,
  buttonsContainer:`flex space-x-4`,
  button:`flex w-[14rem] items-center cursor-pointer justify-center space-x-4 rounded-lg py-2 text-white`,
  purchaseButton:`bg-violet-900 shadow-sm hover:bg-violet-800 scale-100 hover:scale-110 ease-in duration-200`,
  offerButton:`border border-black bg-green-900 hover:bg-green-800 scale-100 hover:scale-110 ease-in duration-200`,
  buttonIcon:`h-6 w-6`,
  stats:`flex-1 border-2 p-4 rounded-md border-2`
}
const NFTSalesInfo=({price,buyNFT,buttonLoading,setTicketQuantity})=>{
  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  console.log(price)
  console.log(buyNFT)
  const ticketPrice=price/10
  return(
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerContent}>
          <AiOutlineDollar className={`${style.greyText} ${style.headerIcon}`}/>
        <div className={style.greyText}>
          Total Pool - 0.2 MATIC
        </div>
          </div>
          <div className={style.headerContent}>
          <FaTicketAlt className={`${style.greyText} ${style.headerIcon}`}/>
        <div className={style.greyText}>
          Tickets Remaining - 20
        </div>
          </div>
        </div>
        <div className={style.mainContainer}>
          <div className='flex space-between space-x-12'>
          <div className={style.priceInfo}>
            <div className={`${style.greyText} ${style.mediumFont}`}>Price per ticket</div>
            <div className={style.priceContainer}>
              <span className={style.price}>{ticketPrice.toPrecision(2)}</span>
              <Image src='/polygonlogo.svg'
                width={24} height={24} alt="MATIC"/>
            </div>
          </div>
          <div className={style.priceInfo}>
            <div className={`${style.greyText} ${style.mediumFont}`}>Choose number of tickets</div>
            <div className={style.priceContainer}>
              <input type="number" className='border border-blue-400 mt-0 py-1 px-3 w-[85%] rounded-lg text-md focus:outline-none' min={1} max={5} onChange={(e)=>setTicketQuantity(e.target.value)}/>
            </div>
          </div>
          </div>
          <div className={style.buttonsContainer}>
            <div className={`${style.button} ${style.purchaseButton}`} onClick={buyNFT}>
              <span className='text-lg font-semibold'>
                {buttonLoading===false?"Buy Now":""}
              </span>
              {buttonLoading===false?(<BsCreditCard2FrontFill className={style.buttonIcon}/>):(<div role="status">
    <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>)}
            </div>
              <div className={`${style.button} ${style.offerButton }`}>
                <span className='text-lg font-semibold'>Place a bid</span>
                <BsFillTagFill className={style.buttonIcon}/>
              </div>
          </div>
        </div>
      </div>
  )
}
export default NFTSalesInfo