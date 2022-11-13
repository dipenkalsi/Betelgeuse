import {BiRefresh,BiLinkExternal} from 'react-icons/bi'
import {MdShare,MdMoreVert,MdVerified} from 'react-icons/md'
import NFTSubInfo from './NFTSubInfo.js'
const style={
  topContainer:`flex items-center justify-between mx-3 mt-5 lg:mt-0`,
  collectionTitle:`text-lg font-semibold text-indigo-400 flex items-center`,
  actionItems:`flex divide-x divide-gray-300 rounded-lg border border-gray-300`,
  actionItemContainer:`flex cursor-pointer items-center justify-center p-2`,
  icon:`h-4 w-6 text-gray-400 dark:text-white`,
  assetTitle:`pt-6 text-4xl font-bold text-center sm:text-start`,
  subInfoContainer:`flex items-center justify-center`,
  verified:'ml-2'
}
const NFTBasicInfo=({name,likesCount,tokenID})=>{

  console.log("from sub info")
  const actionItems=[
    {
      icon:<BiRefresh className={style.icon}/>
    },
    {
      icon:<BiLinkExternal className={style.icon}/>
    },
    {
            icon:<MdShare className={style.icon}/>

    },
    {
            icon:<MdMoreVert className={style.icon}/>

    },
  ]
  return(
    <div>
      <div className={style.topContainer}>
        <div className={style.collectionTitle}>
          Exabyte
          <MdVerified className={style.verified} />
        </div>
        <div className={style.actionItems}>
          {actionItems.map((item,index)=>(
            <div key={index} className={style.actionItemContainer }>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
      <div className={style.assetTitle}>{name}</div>
      <div className={style.subInfoContainer}><NFTSubInfo likesCount={likesCount} tokenID={tokenID}/></div>
      </div>
  )
}
export default NFTBasicInfo