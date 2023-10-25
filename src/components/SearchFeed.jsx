import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from '../components';

const SearchFeed = () => {
  
  // State to store the fetched videos
  const [videos, setVideos] = useState([]);

  // Get the 'searchTerm' from the URL parameters
  const { searchTerm } = useParams();

  // Fetch videos based on the 'searchTerm' when it changes
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div className='flex flex-col overflow-y-auto p-4'>
      <h4 className='text-white/80 text-3xl font-bold mb-6'>
        Search Results for: <span className='text-red-600'>{searchTerm}</span>{' '}
        videos
      </h4>

      {/* Render the fetched videos using the 'Videos' component */}
      <Videos
        videos={videos}
        gridClass='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'
      />
    </div>
  );
};

export default SearchFeed;
