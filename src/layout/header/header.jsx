import { Link } from 'react-router-dom';
import HeaderLogoIcon from './../../icons/HeaderLogoIcon';
import SearchIcon from './../../icons/SearchIcon';
import CartIcon from './../../icons/CartIcon';

const Header = () => {
  return (
    <div className='py-10'>
      <div className='w-[90%] mx-auto flex items-center justify-between'>
        <div>
          <HeaderLogoIcon/>
        </div>
        <nav className='flex gap-6 text-[#274C5B] font-[700] text-xl '>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/pages">Pages</Link>
           <Link to="/shop">Shop</Link>
           <Link to="/projects">Projects</Link>
           <Link to="/news">News</Link>
        </nav>
        <div className='flex items-center justify-between w-[326px] h-[66px] rounded-[36px]  bg-[#FAFAFA]'>
          <input className='w-full h-full outline-none rounded-[36px] bg-[#FAFAFA]' type="text" />
          <SearchIcon/>
        </div>
        <div className='flex  items-center w-[159px] h-[66px] rounded-[33px] '>
            <CartIcon/>
            <p className='text-[#274C5B] font-[600] text-lg'>Cart (0)</p>
        </div>
    </div>
    </div>
  )
}

export default Header
