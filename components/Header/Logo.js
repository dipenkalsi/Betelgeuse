import Image from 'next/image'
import logo from './logo.png'
const style = {
  wrapper: `flex cursor-pointer items-center space-x-3`,
  svgText: `h-14 w-24 fill-[#04111D] pt-1 dark:fill-white`,
}

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <Image src={logo} width={130} height={35} />
      
    </div>
  )
}

export default Logo
