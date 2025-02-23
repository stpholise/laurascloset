 import {Link } from 'react-router-dom'
 import Search from '/icons/utility/search 1.svg'
 import Basket from '/icons/utility/shopping-basket 1.svg'
 import { useLocation } from 'react-router-dom'
 import { useState, useEffect } from 'react'
 import 'animate.css';

 interface NavItem {
    name: string;
    link: string;
  }


 const navItems: NavItem[] = [
    {
        name: 'Store',
        link: '/products-listing'
    },
    {
        name: 'Account',
        link: '/account'
    },
    {
        name: 'Wishlist',
        link: '/wishlist'
    }, 
]

const Header = () => {
    
    const location = useLocation()

    const [showMenu, setShowMenu] = useState(false)
 

    useEffect(() => {
        setShowMenu(false) 
    }, [location])

    const handleClose = () =>{
        setShowMenu(false) 
    }

 
  



  return ( 
    <div className="bg-gray-200">
        <div className=" container   px-2 py-4 mx-auto flex justify-between items-center md:gap-4 lg:gap-10 lg:h-20">
            <Link to='/' className="logo font-medium w-full text-2xl    md:5/12 lg:w-4/12 text-[#374151]"> Laura's Closet</Link>
            
            <div className={`" transition-visibility duration-[600ms] md:flex lg:justify-between md:items-center md:gap-6 gap-9 lg:gap-12 md:w-9/12  lg:w-11/12 md:static fixed top-16 left-0 right-0 z-50 mx-auto px-4 sm:px-8  md:px-2 bg-gray-200 justify-start
                md:bg-transparent md:py-0 md:visible    md:top-0 md:bottom-0   "
                 ${showMenu ? 'flex flex-col md:flex-row text-start py-8 animate__animated animate__fadeIn h-11/12' 
                 : 'aanimate__animated animate__fadeOut opacity-0 invisible md:opacity-100 md:text-opacity-100 md:visible md:z-30 z-0'}`}>
                <form className="serchbar border-2 border-gray-400 px-4 rounded-full md:rounded-none md:border-b  md:border-0  w-full md:border-gray-400 justify-center md:justify-start flex items-center gap-4 py-3 md:p-1 md:w-48">
                    <img src={Search} alt="" className="w-4 h-4 rounded-full" />
                    <input type="text" placeholder="Search for an item..."  className="outline-none w-full md:w-fit" />
                </form>
                <nav className={``}>
                    <ul className="flex   md:py-0 md:flex-row flex-col gap-3 lg:gap-12 md:gap-6 md:text-sm">
                        {navItems.map((item, index) => (
                            <li key={index} className="texxt-[#1F2937] md:text-[#6B7280] text-base font-semibold md:font-medium w-full py-4 md:py-0 "> <Link to={item.link} className="hover:cursor-pointer  ">{item.name} </Link> </li>
                        ))}
                        <li className="text-[#1F2937] text-base font-semibold flex items-center md:justify-center gap-2 hover:cursor-pointer "> Basket <img src={Basket} alt="" className='w-5 h-5' /> </li>
                    </ul>
                </nav>
            </div>
           
            <div className="md:hidden flex gap-8 items-center">
             
                <button title='menu-button' className={`block md:hidden h-9 w-9 relative cursor-pointer${showMenu ? '' : ''}`} onClick={() => setShowMenu(!showMenu)}>
                <div className={`" absolute  bg-white rounded-3xl  transition-transform duration-[600ms]  transition-top " ${showMenu ? 'translate-y-1/4 translate-x-1/4 rotate-[-315deg] top-1/2 h-1 w-9' : 'h-1 w-7 -translate-y-1/2 -translate-x-1/2  top-1/4 left-1/2'}`}></div>
                <div className={`" absolute h-1 w-7 bg-white rounded-3xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-transform duration-[600ms]  transition-top "  ${showMenu ? ' opacity-0 ' : ''} `}></div>
                <div className={`" absolute h-1 w-7 bg-white rounded-3xl transition-transform duration-[600ms]  transition-top " ${showMenu ? ' translate-y-1/4 translate-x-1/4 rotate-[-225deg] top-1/2 w-9  ' : 'top-3/4 left-1/2  -translate-y-1/2 -translate-x-1/2 '}`}></div>
                </button>
            </div>
          
            <div className={`md:hidden   absolute top-0 left-0 right-0 bottom-0 w-screen h-screen z-30 ${showMenu ? 'block' : 'hidden'}`}  onClick={handleClose}></div>
                        
        </div>
        
    </div>
  )
}

export default Header