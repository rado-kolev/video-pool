import { HiOutlineMenu } from 'react-icons/hi';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className='flex w-screen h-20 items-center justify-between sticky top-0 z-50 bg-[#2d2d2d]'>
      <div className='flex items-center ml-4'>
        <button onClick={toggleSidebar}>
          <HiOutlineMenu size={32} className='text-white' />
        </button>
        <a href='/' className='flex items-center ml-4'>
          <img src='../../public/logo.png' alt='logo' className='w-7 mr-1' />
          <p className='text-3xl pb-1 font-bold text-white'>MediaPool</p>
        </a>
      </div>
      <SearchBar />
    </nav>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func,
};

export default Navbar;
