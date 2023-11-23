import { useState } from 'react'
import logo from '../assets/shared/logo.svg'
import close from '../assets/shared/icon-close.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [Nav, setNav] = useState(true);

  const handleNav = () => {
      setNav(!Nav);
  };


  return (
    <div >
        <header className='fixed  top-0 z-50 md:p-4'>
            <div className='flex space-x-64 px-5 mt-5'>
               <NavLink to='/'>
                  <img src={logo} alt="logo"  title='logo'/>
               </NavLink>
               <div onClick={handleNav} className='p-2 sm:hidden'>
                 { Nav ? <img src={hamburger} alt="burger" /> : <img src={close} alt="close" /> }
               </div>
                  
            </div>

            <nav className={ !Nav ? 
                'sm:hidden w-[80%] bg-slate-800 text-gray-200 mx-10 ease-in-out duration-500' 
                : "fixed top-[1000px]"} >
                  
              <ul className='flex flex-col space-y-8 text-xl ml-20 py-10'>
                <li onClick={() => setNav(!Nav)} className="cursor-pointer">
                 <NavLink to='/'> 
                     <span>00</span> Home
                 </NavLink>  
                </li>
                <li onClick={() => setNav(!Nav)} className="cursor-pointer">
                  <NavLink to='/Destination'> 
                     <span>01</span> Destination
                  </NavLink> 
                </li>
                <li onClick={() => setNav(!Nav)} className="cursor-pointer">
                  <NavLink to="/Crew">
                     <span>02</span> Crew
                  </NavLink>
                </li>
                <li onClick={() => setNav(!Nav)} className="cursor-pointer">
                  <NavLink to="/Technology">
                     <span>03</span> Technology
                  </NavLink>
                </li>
              </ul>
            </nav>

            <nav className="hidden sm:flex">
              <ul className='flex space-x-10 p-4 px-8 lg:px-12 lgbar py-5
                             relative bottom-12 left-[270px] lg:left-[700px] text-xl text-white'>
                <li className='hover:border-b-2 border-white cursor-pointer'>
                  <NavLink to="/">
                     <span className='font-bold'>00</span> Home
                  </NavLink> 
                </li>
                <li className='hover:border-b-2 border-white cursor-pointer'>
                  <NavLink to="/Destination">
                     <span className='font-bold'>01</span> Destination
                  </NavLink>
                </li>
                <li className='hover:border-b-2 border-white cursor-pointer'>
                  <NavLink to="/Crew">
                     <span className='font-bold'>02</span> Crew
                 </NavLink> 
                </li>
                <li className='hover:border-b-2 border-white cursor-pointer'>
                 <NavLink to='/Technology'>
                     <span className='font-bold'>03</span> Technology
                 </NavLink>
                </li>
              </ul>
            </nav>
        </header>
    </div>
  )
}


