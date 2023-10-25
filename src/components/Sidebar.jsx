import { useRef } from 'react';
import { categories } from '../utils/constants';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
  expanded,
  sizeHandle,
}) => {
  // Create a reference to the sidebar element for scrolling
  const sidebarRef = useRef(null);

  // Function to scroll the sidebar to the left
  const handleScrollLeft = () => {
    sidebarRef.current.scrollBy({
      left: -150, // Adjust the scroll distance as needed
      behavior: 'smooth',
    });
  };

  // Function to scroll the sidebar to the right
  const handleScrollRight = () => {
    sidebarRef.current.scrollBy({
      left: 150, // Adjust the scroll distance as needed
      behavior: 'smooth',
    });
  };

  if (sizeHandle === 'vertical') {
    // Render a vertical sidebar when 'sizeHandle' is 'vertical'
    return (
      <div
        className='flex flex-col fixed left-0 top-[5.05rem] overflow-y-auto overflow-x-hidden border-r border-gray-700'
        style={{
          height: 'calc(100vh - 5.05rem)',
        }}
      >
        <div className='flex flex-col'>
          {categories.map((category) => (
            <button
              className={`relative flex items-center py-2 px-4 font-medium border-b border-gray-700 hover:bg-[#6a6a6a] cursor-pointer group ${
                category.name === selectedCategory
                  ? 'bg-red-600 text-white'
                  : 'bg-[#2d2d2d] text-red-600 hover:text-white'
              }`}
              onClick={() => setSelectedCategory(category.name)}
              key={category.name}
            >
              <span className='mr-2 text-2xl'>{category.icon}</span>
              <span
                className={`text-left text-white overflow-hidden transition-all ${
                  expanded ? 'w-32 pl-3' : 'w-0'
                }`}
              >
                {category.name}
              </span>
              {!expanded && (
                <div
                  className={`
              fixed rounded-md px-2 py-1 ml-14 text-sm text-white bg-[#6a6a6a] invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
                >
                  {category.name}
                </div>
              )}
            </button>
          ))}
        </div>

        <div
          className={`flex flex-1 pl-4 pt-4 items-center transition-all ${
            expanded ? 'w-44 pl-2' : 'hidden'
          }`}
        >
          <img
            src='https://i.ibb.co/mNvFc0Q/logo-2.png'
            alt=''
            className='w-6 h-6'
          />
          <div className='text-white pl-2'>
            <h4 className='font-semibold'>Copyright MediaPool 2023</h4>
          </div>
        </div>
      </div>
    );
  } else if (sizeHandle === 'horizontal') {
    // Render a horizontal scrolling sidebar when 'sizeHandle' is 'horizontal'
    return (
      <div className='relative flex items-center px-2 border-b border-gray-700'>
        <MdChevronLeft
          className='text-white/80 cursor-pointer hover:text-white/100 border-r-4 border-gray-700'
          onClick={handleScrollLeft}
          size={40}
        />
        <div
          className='flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
          ref={sidebarRef}
        >
          {categories.map((category) => (
            <button
              className={`flex items-center justify-center py-2 px-4 font-medium border-r border-gray-700 hover.bg-[#6a6a6a] cursor-pointer ${
                category.name === selectedCategory
                  ? 'bg-red-600 text-white'
                  : 'bg-[#2d2d2d] text-red-600 hover.text-white'
              }`}
              onClick={() => setSelectedCategory(category.name)}
              key={category.name}
            >
              <span className='mr-2 text-2xl'>{category.icon}</span>
              <span
                className={`text-left text-white overflow-y-hidden transition-all w-20}`}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>
        <MdChevronRight
          className='text-white/80 cursor-pointer hover:text-white/100 border-l-4 border-gray-700'
          onClick={handleScrollRight}
          size={40}
        />
      </div>
    );
  } else {
    return null; // Handle other cases as needed
  }
};

Sidebar.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
  expanded: PropTypes.bool,
  sizeHandle: PropTypes.string,
};

export default Sidebar;
