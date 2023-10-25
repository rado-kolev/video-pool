import { useEffect, useState } from 'react';
import { HiOutlineSearch, HiOutlineArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check the screen width when the component mounts
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsExpanded(false); // Collapse the search bar on smaller screens
      }
    };

    // Add a listener for window resize events
    window.addEventListener('resize', handleResize);

    return () => {
      // Remove the listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
      setIsExpanded(false);
    }
  };

  // Toggle the search form expansion on small screens
  const toggleExpansion = () => {
    if (window.innerWidth <= 640) {
      if (isExpanded) {
        handleSubmit(); // Submit the search term
      } else {
        setIsExpanded(true); // Expand the search bar
      }
    } else {
      handleSubmit(); // Submit the search term for larger screens
    }
  };

  // Toggle back to the normal state on small screens
  const toggleBack = () => {
    if (window.innerWidth <= 640) {
      setIsExpanded(false);
      setSearchTerm('');
    }
  };

  return (
    <div
      className={`flex items-center bg-[#2d2d2d] ${
        isExpanded ? 'h-20 absolute w-full' : '' // Apply conditional CSS classes based on 'isExpanded' state
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`flex items-center border border-gray-700 rounded-full w-full mr-8`}
      >
        {isExpanded && window.innerWidth <= 640 && (
          <HiOutlineArrowLeft
            size={24}
            className='text-white cursor-pointer hover:scale-125 ml-2'
            onClick={toggleBack}
          />
        )}
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          className={`bg-[#2d2d2d] text-white outline-none border border-none rounded-full sm:block sm:w-72 ml-2 pl-2 ${
            isExpanded ? 'block w-full' : 'hidden' // Conditionally set the input's width based on 'isExpanded'
          }`}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {isExpanded ? (
          <HiOutlineSearch
            size={24}
            className='text-white border border-none rounded-full m-2 cursor-pointer hover:scale-125'
            onClick={handleSubmit}
          />
        ) : (
          <HiOutlineSearch
            size={24}
            className='text-white cursor-pointer m-2 hover:scale-125'
            onClick={toggleExpansion}
          />
        )}
      </form>
    </div>
  );
};

export default SearchBar;
