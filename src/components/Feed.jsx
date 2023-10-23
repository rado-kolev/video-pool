import { useEffect, useState } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';
import Videos from './Videos';

const Feed = ({ expanded }) => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
      );
  }, [selectedCategory]);

  return (
    <div className='flex border-t border-gray-700'>
      <div>
        <Sidebar
          expanded={expanded}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <div
        className={`p-4 flex-1 transition-all border-l border-gray-700 ${
          expanded ? 'ml-48' : 'ml-16'
        }`}
      >
        <h1 className='text-4xl text-white/90 font-bold mb-6'>{selectedCategory} <span className='text-red-600'>videos</span></h1>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

Feed.propTypes = {
  expanded: PropTypes.bool,
  sidebarVisible: PropTypes.bool,
};

export default Feed;
