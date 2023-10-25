import { useEffect, useState } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import PropTypes from 'prop-types';
import { Sidebar, Videos } from '../components';

const Feed = ({ expanded, sizeHandle }) => {
  
  // State to keep track of the selected category for videos.
  const [selectedCategory, setSelectedCategory] = useState('New');

  // State to store the list of videos to be displayed.
  const [videos, setVideos] = useState([]);

  useEffect(() => {

    // Fetch videos from the API based on the selected category.
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className='flex flex-col md:flex-row'>

      {/* Render the Sidebar component with props for configuration. */}
      <Sidebar
        expanded={expanded}
        sizeHandle={sizeHandle}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div
        className={`p-4 flex-1 transition-all m-0 ${
          expanded ? 'md:ml-48' : 'md:ml-16'
        }`}
      >
        <h1 className='text-4xl text-white/90 font-bold mb-6'>

          {/* Display the selected category and indicate it's for videos. */}
          {selectedCategory} <span className='text-red-600'>videos</span>
        </h1>

        {/* Render the Videos component to display the list of videos. */}
        <Videos
          videos={videos}
          gridClass='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'
        />
      </div>
    </div>
  );
};

Feed.propTypes = {
  expanded: PropTypes.bool,
  sizeHandle: PropTypes.string,
};

export default Feed;
