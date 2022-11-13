import Image from 'next/image'
import { useState } from 'react'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
const style={
  wrapper:'relative flex cursor-pointer flex-col rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-gray-800 border hover:border-indigo-300 border-white scale-100 hover:scale-105',
  imageContainer:'h-3/4 overflow-hidden dark:bg-gray-800',
  nftImage:'rounded-t-lg object-cover  ease-in duration-200 hover-rounded-lg',
  nftLowerContainer:'flex h-1/4 flex-col justify-between p-4 text-gray-600',
  nftInfoContainer:`flex justify-between text-gray-600 w-full justify-center items-center`,
  collectionTitle:`text-sm text-gray-500 dark:text-gray-300`,
  nftTitle:`text-lg font-bold text-gray-600 text-center`,
  priceContainer:`flex items-center justify-center mt-4 text-sm`,
  priceTitle:` text-sm font-light mr-1`,
  polygonImageContainer:'flex items-center justify-end space-x-1',
  likesContainer:`flex items-center justify-end space-x-2`,
  heartIcon:`h-5 w-5 text-pink-500 `,
  likesCounter:` text-pink-500`
}
const Nftcard=({listing ,key})=>{
const [liked,setLiked]=useState(false)
const [likes,setLikes]=useState(Math.floor(Math.random() * (1000 - 1 + 1) + 1));
  const handleLikesClick=()=>{
    if(liked){
      setLikes(likes+1);
      setLiked(false)
    }
    else{
      setLikes(likes-1);
      setLiked(true)
    }
  }
  return(
    <div className={style.wrapper}>
      <div className={style.imageContainer}>
        <Image className={style.nftImage}
          src={listing.asset.image}
          height={340}
          width={340}
          alt="nftImage">
        </Image>
        <div className={style.nftLowerContainer}>
          <div className={style.nftInfoContainer} style={{justifyContent:"center"}}>
            <div>
              {listing.asset.collection && (
                <div className={style.collectionTitle}>
                  {listing.asset.collection?.name}
                </div>
              )}
              <div className={style.nftTitle}>
                {listing.asset.name}
              </div>
            </div>
            </div>
            <div className={style.priceContainer}>
              <div className={style.priceTitle}>
                Price : 
              </div>
              <div className={style.polygonImageContainer}>
                <Image height={16}
                  width={16}
                  src="/polygonlogo.svg"
                  alt="matic"/>
                <div className={style.priceValue}>
                  {listing.buyoutCurrencyValuePerToken?.displayValue}
                </div>
              </div>
          </div>
          <div className={style.likesContainer} onClick={handleLikesClick}>
            {liked===true?<AiOutlineHeart className={style.heartIcon}/>:<AiFillHeart className={style.heartIcon}/>}
            <div className="text-pink-500">
              {likes}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Nftcard