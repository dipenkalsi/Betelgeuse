import Image from 'next/image'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import { useState } from 'react'
const style={
  wrapper:`rounded-lg border dark:border-transparent dark dark:bg-blue-900 mx-2 px-auto flex flex-col items-center justify-center`,
  nftHeader:`flex items-center justify-between p-4 w-full`,
  likesContainer:'flex items-center justify-end space-x-2',
  heartIcon:' curor-pointer h-5 w-5 text-pink-500 dark:text-gray-400 cursor-pointer',
  likesCount:"font-semibold text-pink-500 dark:text-gray-400 cursor-pointer",
  nftImage:'rounded-b-lg object-cover mx-auto'
  
}
const NFTImage=({image,likesCount})=>{
  const [likes,setLikes]=useState(likesCount);
  const [liked,setLiked]=useState(false);
  const handleLikesClick=()=>{
    if(liked===false){
      setLikes(likes+1);
      setLiked(true);
    }
    else{
      setLikes(likes-1);
      setLiked(false)
    }
  }
  return(
    <div>
    <div className={style.wrapper}>
      <div className={style.nftHeader}>
        <Image height={20} width={20} src="/polygonlogo.svg" alt="eth"/>
        <div  className={style.likesContainer}>
          {liked===false?<AiOutlineHeart  className={style.heartIcon} onClick={handleLikesClick}/>:<AiFillHeart  className={style.heartIcon} onClick={handleLikesClick}/>}
          <div  className={style.likesCount} onClick={handleLikesClick}>{likes}</div>
        </div>
      </div>
      <div  className='px-3 pb-2'>
        {image&&<Image src={image} width={485} height={485} alt="NFTImage" className='mx-auto'/>}
      </div>
    </div>
      </div>
  )
}
export default NFTImage