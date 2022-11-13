import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useAddress } from '@thirdweb-dev/react'
import { MdVerified } from 'react-icons/md'
import TopNavbarLayout from '../../layouts/TopNavbarLayout'
import CollectionStats from './CollectionStats'
import { collectionData } from '../../static/collections'
import Footer from './Footer'
import Listings from './Listings'

const style = {
  wrapper: `flex flex-col dark:bg-[#202226] relative flex flex-col`,
  container: `relative flex h-[650px] flex-col`,
  bannerContainer: `absolute h-1/3 w-full border-b-4 border-black`,
  banner: `rounded-t-lg object-cover`,
  collectionInfoWrapper: `absolute inset-0 top-1/3 z-10 h-2/3 -translate-y-16`,
  collectionInfoContainer: `flex flex-col items-center space-y-4 `,
  collectionLogoContainer: `flex items-center justify-center rounded-full border-4 border-black`,
  collectionLogo: `rounded-full object-cover`,
  collectionInfo: `flex flex-col items-center space-y-6`,
  title: `text-4xl font-bold`,
  creatorInfoContainer: `flex items-center space-x-1`,
  creator: `text-sm font-medium text-gray-500`,
  creatorName: `cursor-pointer text-blue-500`,
  verified: `h-5 w-5 text-blue-500`,
  descriptionContainer: `max-w-3xl pt-2 px-10 text-center text-gray-500`,
}

export default function Home() {
  const address = useAddress()
  const [desc_len,setDesc_len]=useState(350)
  const [collection,setCollection] = useState(collectionData)
  const router = useRouter()
  const { slug } = router.query
  const handleShowDesc=()=>{
    if(desc_len===350){
      setDesc_len(collection.description.split("").length+1)
    }
    else{
      setDesc_len(350)
    }
  }
  const getNfts=async()=>{
    const nfts = await contract.getOwned(address);
    console.log(nfts)
  }
  useEffect(() => {
    if (!address) router.replace('/')
  }, [address])

  useEffect(() => {
    if (!slug) return
    ;(async () => {
      const collectionData = await getCollection()
      setCollection(collectionData)
      getNfts()
    })()
  }, [slug])

  return (
    <div>
      <Head>
        <title>Exabyte | Betelgeuse</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" />
      </Head>
      <TopNavbarLayout>
        <div className={style.wrapper}>
          <div className={style.container}>
            <div className={style.bannerContainer}>
              <Image
                className={style.banner}
                src={collection?.banner_image_url}
                layout='fill'
                alt='banner'
              />
            </div>

            <div className={style.collectionInfoWrapper}>
              <div className={style.collectionInfoContainer}>
                <div className={style.collectionLogoContainer}>
                  <Image
                    className={style.collectionLogo}
                    src={collection?.image_url}
                    height={128}
                    width={128}
                    alt='logo'
                  />
                </div>

                <div className={style.collectionInfo}>
                  <div className={style.title}>{collection?.name}</div>

                  <div className={style.creatorInfoContainer}>
                    <div className={style.creator}>
                      Created by Exabyte.Inc{' '}
                      <span className={style.creatorName}>
                        {collection?.creator}
                      </span>
                    </div>
                    <MdVerified className={style.verified} />
                  </div>
                </div>

                <CollectionStats stats={collection?.stats} />

                <div className={style.descriptionContainer}>
                  {collection?.description.split("").slice(0,desc_len).join("")}...
                </div>
              <button className="mb-12 mt-0 pt-0 hover:text-indigo-400" onClick={handleShowDesc}>{desc_len===350?"Show More":"Show Less"}</button>
           <Listings /> 
           <Footer/>
              </div>
            </div>
          </div>
          
      
        </div>
      </TopNavbarLayout>
    </div>
  )
}
