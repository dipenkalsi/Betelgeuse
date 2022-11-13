import { useState, useEffect } from 'react'
import Logo from './Logo.js'
import { useAddress, } from '@thirdweb-dev/react'
import Image from 'next/image.js'
import metaMaskIcon from './metamask-icon.png'
import {
  SearchIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/outline'
import {RiWallet3Line} from 'react-icons/ri'
import {BiUser} from 'react-icons/bi'

import SearchInput from './SearchInput'
import NavMenus from './NavMenus'
import Link from 'next/link'
import { useTheme,ThemeProvider } from 'next-themes'


const Navbar = () => {
  const address = useAddress()

  const [mounted, setMounted] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const handleMenuClick=()=>{
    setMobileMenu(!mobileMenu);
    console.log(mobileMenu);
  }
 
  useEffect(() => {
    setMounted(true)
  }, [])

  const { systemTheme, theme, setTheme } = useTheme()

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <MoonIcon
          className={`${style.themeSwitcher} ${theme=='dark'?'text-gray-500 hover:text-gray-100':''}`}
          role='button'
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <SunIcon
          className={`${style.themeSwitcher} ${theme=='dark'?'text-gray-500 hover:text-gray-100':''}`}
          role='button'
          onClick={() => setTheme('dark')}
        />
      )
    }
  }

  const menus = [
    {
      name: 'Explore',
      href: '#',
    },
    {
      name: 'Stats',
      href: '#',
    },
    {
      name: 'Resources',
      href: '#',
    },
    // {
    //   name: 'Create',
    //   href: '#',
    // },
  ]

  const style = {
    themeSwitcher: `h-8 w-8 cursor-pointer transition-all`,
    wrapper: `sticky top-0 z-50 bg-white px-4 py-2 shadow-md dark:bg-gray-900 flex items-center justify-between space-x-6`,
    logoContainer: `xl:pr-30`,
    searchContainer: ` hidden flex-1 sm:block`,
    menusContainer: `hidden pr-6 lg:block xl:pl-8,`,
    iconsContainer: `flex items-center space-x-6`,
    icons: `h-7 w-7 cursor-pointer  transition-all`,
    desktopIcons: `hidden lg:block`,
    mobileIcons: `sm:hidden`,
    tabletIcons: `lg:hidden`,
  }

  return (
    <ThemeProvider>
    <header className={`${style.wrapper} ${theme=='dark'?'bg-[#1a001a] text-gray-200':'' }`}>
      <div className={style.logoContainer}>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
      </div>

      <div className={style.searchContainer}>
        <SearchInput />
      </div>

      <div className={`${style.menusContainer}`}>
        <NavMenus menus={menus} type="horizontal"/>
      </div>
      <div className='border rounded-full flex space-x-3 px-3 py-1'>
        <Image src={metaMaskIcon} height={10} width={20}></Image>
      <p className='text-sm'>{address.split("").slice(0,10).join("")}...</p>
      </div>
      <div className={style.iconsContainer}>
        <BiUser className={`${style.icons} ${style.desktopIcons} ${theme=='dark'?'text-gray-500 hover:text-gray-100':''}`} />
        <RiWallet3Line className={`${style.icons} ${style.desktopIcons} ${theme=='dark'?'text-gray-500 hover:text-gray-100':''}`} />
        {renderThemeChanger()}
        <SearchIcon className={`${style.icons} ${style.mobileIcons} ${theme=='dark'?'text-gray-500 hover:text-gray-100':''}`} />
        <MenuIcon className={`${style.icons} ${style.tabletIcons} ${theme=='dark'?'text-gray-500 hover:text-gray-100':''}`} onClick={handleMenuClick} />
      </div>
    </header>
    {mobileMenu&&(<div className="flex flex-col space-y-3 mb-2 mx-3"><NavMenus menus={menus} type="vertical"/><SearchInput/></div>)}
      </ThemeProvider>
  )
}

export default Navbar
