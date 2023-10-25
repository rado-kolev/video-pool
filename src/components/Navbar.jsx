import { HiOutlineMenu } from 'react-icons/hi';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { SearchBar } from '../components';
import PropTypes from 'prop-types';

const Navbar = ({ toggleSidebar }) => {

  // Get the current location using useLocation from React Router
  const location = useLocation();

  // Check if the current location is the home page ('/')
  const isHomePage = location.pathname === '/';

  return (
    <nav className='flex w-screen h-20 items-center justify-between sticky top-0 z-50 bg-[#2d2d2d] border-b border-gray-700'>
      <div className='flex items-center'>
        {/* Conditionally render the sidebar toggle button only on the home page */}
        {isHomePage && (
          <button onClick={toggleSidebar}>
            <HiOutlineMenu
              size={32}
              className='text-white hidden md:block ml-4'
            />
          </button>
        )}
        <a href='/' className='flex items-center ml-4'>
          <img
            src='https://i.ibb.co/mNvFc0Q/logo-2.png'
            alt='logo'
            className='w-7 mr-1'
          />
          <p className='text-3xl font-bold text-white'>MediaPool</p>
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
