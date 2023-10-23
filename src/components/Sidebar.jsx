import { categories } from '../utils/constants';
import PropTypes from 'prop-types';

const Sidebar = ({ selectedCategory, setSelectedCategory, expanded }) => {
  return (
    <div
      className='flex flex-col fixed left-0 top-[5.05rem]'
      style={{ height: 'calc(100vh - 5.05rem)', // Set a maximum height to limit the sidebar's height
        overflowY: 'auto', // Enable Y-axis scrolling
        overflowX: 'hidden'
      }}
    >
      <div className='flex flex-col'>
        {categories.map((category) => (
          <button
            className={`relative flex items-center py-2 px-4 font-medium border-b border-gray-700 hover:bg-[#6a6a6a]  cursor-pointer group ${
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
              }
              }`}
            >
              {category.name}
            </span>
            {!expanded && (
              <div
                className={`
              absolute left-full rounded-md px-2 py-1 ml-8 text-sm text-white bg-[#6a6a6a] invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
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
        <img src='../../public/logo.png' alt='' className='w-6 h-6' />
        <div className='text-white pl-2'>
          <h4 className='font-semibold'>Copyright MediaPool 2023</h4>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
  expanded: PropTypes.bool,
};

export default Sidebar;
