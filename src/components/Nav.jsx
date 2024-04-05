import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants/index'


const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full l bg-white/30 rounded-full backdrop-blur-sm'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img
                src={headerLogo}
                alt="Logo"
                width={130}
                height={29}
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden '>
                {navLinks.map((nav,index)=>{
                    return(
                        <li key={index} className=' '>
                            <a href={nav.href} className=" font-montserrat leading-normal text-lg text-slate-gray lg:hover:text-coral-red transition duration-300 ease-in-out">
                                {nav.label}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <div className='hidden max-lg:block'>
                <img 
                src={hamburger}
                alt='Hamburger'
                width={25}
                height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav
