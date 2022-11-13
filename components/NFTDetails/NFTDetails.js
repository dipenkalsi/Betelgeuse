import {GrTextAlignLeft} from 'react-icons/gr';
import {BsFillBookmarkFill} from 'react-icons/bs';
import Dropdown from './Dropdown.js'
const style={
  wrapper:`flex flex-col divide-y rounded-lg overflow-hidden border mx-2 mb-10`,
  icon:'h-5 w-5 text-gray-600'
  
}
const NFTDetails=()=>{
  const randomRank=Math.floor(Math.random() * (3125 - 1024 + 1) + 1024);

  const dropdownData=[
    {
      title:'Description',
      icon:<GrTextAlignLeft className={style.icon}/>,
      data:`Exabyte is the ultimate collection of a bunch of carefully crafted bunch of hearts with different look and feels , but yet the same purpose in life - TO MAKE YOUR DAY BETTER AND TO PLEASE YOUR SENSES WITH THE BEAUTIFUL AESTHETIC THEY WERE BORN WITH. Exabyte has been featured as the partner NFT collection by various enterprise level organizations like McDonalds , Tesla , BMW and many more. Our aim with creating this collection is to reach out as many people as we can and educate and intrigue them into the world of crypto and web3. Our target is to bring the next hundred million users into the world of web3. These pretty hearts are were baked with love and devotion just for you in the oven of our hardwork.`,
      type:""
    },
  ]
  return(
    <>
    <div className={style.wrapper}>
      {dropdownData.map((item,index)=>(
      <Dropdown title={item.title} key={index} icon={item.icon} data={item.data} type={item.type}/>
      ))}
    </div>
    <div className="mt-0 text-center flex items-center justify-between mx-2 mb-10">
      <h2 className="text-3xl text-indigo-500">Rarity Rank</h2>
      <div className="text-teal-400">#{randomRank}/3125</div>
    </div>
    </>
  )
}
export default NFTDetails