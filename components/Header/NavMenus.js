import {useTheme} from 'next-themes'
const style = {
  list:`flex space-x-10 dark`,
  element: `font-semibold transition-all hover:underline underline-offset-4 dark:text-gray-300 hover:dark:text-white`,
}

const NavMenus = ({ menus,type }) => {

  return (

    <nav>
      <ul className={type==="horizontal"?`flex space-x-10 dark`:`flex flex-col space-y-5 text-center my-2`}>
        {menus.map((menu, index) => (
          <li key={index}>
            <a href={menu.href} className={style.element}>
              {menu.name}
              
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMenus
