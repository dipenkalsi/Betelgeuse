import {AiFillEye,AiFillHeart,} from 'react-icons/ai'
import { BiHash } from 'react-icons/bi'
const style={
  wrapper:`flex lg:flex-row flex-col space-y-5 lg:space-y-0 lg:space-x-6 py-6 items-center justify-between mx-2`,
  textInfoContainer:`text-lg font-medium text-gray-400 text-center`,
  owner:`text-indigo-400`,
  iconTextInfoContainer:'flex items-center space-x-2',
  icon:'h-7 w-7 text-gray-400'
}
const NFTSubInfo=({likesCount,tokenID})=>{
  return(
  <div className={style.wrapper}>
    <div className={style.textInfoContainer}>
      Owner - <span className={style.owner}>Dipen Kalsi</span>
    </div>
    <div className={style.iconTextInfoContainer}>
      <AiFillEye className={style.icon}/>
      <div className={style.textInfoContainer}>4.4K views</div>
    </div>
    <div className={style.iconTextInfoContainer}>
      <BiHash className={style.icon}/>
      <div className={style.textInfoContainer}>Token ID : {tokenID}</div>
    </div>
  </div>
  )
}
export default NFTSubInfo