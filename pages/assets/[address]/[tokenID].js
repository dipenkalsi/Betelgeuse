import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaMagic } from 'react-icons/fa';
import { useAddress, useMarketplace } from '@thirdweb-dev/react'
import NFTImage from '../../../components/NFTDetails/NFTImage.js'
import { BigNumber } from 'ethers'
import NFTSalesInfo from '../../../components/NFTDetails/NFTSalesInfo.js'
import NFTBasicInfo from '../../../components/NFTDetails/NFTBasicInfo.js'
import NFTDetails from '../../../components/NFTDetails/NFTDetails.js'
import TopNavbarLayout from '../../../layouts/TopNavbarLayout.js'
import Footer from '../../../components/Home/Footer.js';
import { QuantityAboveLimitError } from '@thirdweb-dev/sdk';
const style = {
  wrapper: `flex  mx-auto max-w-2xl flex-col space-y-4 py-4 lg:max-w-none lg:py-8 lg:px-24 mb-5`,
  nftContainer: `flex flex-col lg:flex-row `,
  leftContainer: `flex flex-col space-y-4 lg:mr-20`,
  leftElement: `hidden:lg-block`,
  rightContainer: 'flex flex-1 flex-col space-y-4',
  buyoutContainer: 'flex-1',

}

const NFT = () => {
  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  console.log(randomDate(new Date(2012, 0, 1), new Date()))
  const Names = ["Leonardo Vince", "John Smith", "Mary Cooper", "Dipen Kalsi", "Aryan Mathur", "Bhagyansh Bhargava", "Raghav Agarwal", "Britney Benz", "Oliver Carter"]
  const randomValues = Array.from({ length: 10 }, () => Math.floor(Math.random() * (50 - 1 + 1) + 1))
  const likesCount = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
  const constLikes = likesCount;
  const [buttonLoading, setButtonLoading] = useState(false)
  const [listing, setListing] = useState()
  const [loading, setLoading] = useState(false);
  const [ticketQuantity, setTicketQuantity] = useState(0)
  const router = useRouter()
  const { tokenID } = router.query
  console.log(tokenID)
  const marketplace = useMarketplace('0x7fd8f969186606ddA6B4D9b3408ebB916B2708aE');
  const address = useAddress()
  useEffect(() => {
    getListing()
  }, [])
  useEffect(() => {
    if (!address) {
      router.replace('/')
    }
  }, [address])
  const getListing = async () => {
    try {
      setLoading(true);
      const listing = await marketplace.getListing(BigNumber.from(tokenID))
      setListing(listing)
      console.log(listing)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }
  const buyNFT = async () => {
    try {
      setButtonLoading(true)
      await marketplace.buyoutListing(tokenID, 1)
      setButtonLoading(false)
    } catch (err) {
      console.log(err);
    }
  }
  console.log(listing?.asset)
  return (
    <TopNavbarLayout>
      <div className={style.wrapper}>
        {loading ? (
          <div role="status">
            <svg aria-hidden="true" className="mx-auto mt-24 my-auto w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <>
            <div className={style.nftContainer}>
              <div className={style.leftContainer}>
                <div className={style.leftElement}>

                  <NFTImage image={listing?.asset?.image} likesCount={constLikes} />
                </div>
                <div className={style.leftElement}>
                  <NFTDetails />
                </div>
              </div>
              <div className={style.rightContainer}>
                <NFTBasicInfo name={listing?.asset?.name} attributes={listing?.asset?.attributes} likesCount={constLikes} tokenID={tokenID} />
                <span className="flex items-center justify-center text-gray-400 text-2xl font-semibold">Properties <span className="ml-3"><FaMagic /></span></span>
                <div className="flex flex-col lg:grid grid-cols-3 gap-3 lg:space-y-0 flex-wrap items-center space-y-3  justify-center lg:justify-start">{listing?.asset?.attributes.map((item, i) => { return (<div className="text-sm bg-teal-200 cursor-pointer scale-100 hover:scale-110 ease-in duration-200 text-teal-800 rounded-lg px-5 py-1 text-center" key={i}><div className="font-bold text-lg ">{item.trait_type}</div><div>{item.value}</div><div className='text-teal-500 font-light'>{randomValues[i]}% have this trait</div></div>) })}</div>
                <div className={style.buyoutContainer}>
                  <NFTSalesInfo price={listing?.buyoutCurrencyValuePerToken?.displayValue} buttonLoading={buttonLoading} buyNFT={buyNFT} setTicketQuantity={setTicketQuantity} className='my-5' />
                </div>
              </div>
            </div>
            <Footer />
          </>
        )}
      </div>
    </TopNavbarLayout>
  )
}
export default NFT