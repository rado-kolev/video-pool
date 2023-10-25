import { BsFillCheckCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className='flex flex-col'>

      {/* Link to the video details page */}
      <Link to={`/video/${videoId}`}>
        <img
          src={snippet?.thumbnails?.medium?.url}
          alt={snippet?.title}
          className='rounded-3xl h-full w-full'
        />
      </Link>

      <div className='h-24 p-2'>

        {/* Link to the video details page */}
        <Link to={`/video/${videoId}`}>
          
          {/* Display video title, truncate if too long */}
          <h2 className='text-white/90 font-bold text-sm sm:text-base'>
            {snippet?.title.length > 45
              ? `${snippet?.title.slice(0, 45)}...`
              : snippet?.title}
          </h2>
        </Link>

        {/* Link to the channel details page */}
        <Link
          to={`/channel/${snippet?.channelId}`}
          className='text-gray-400/80 flex items-center'
        >
          {/* Display channel title with verification icon */}
          <p className='font-semibold'>{snippet?.channelTitle}</p>
          <BsFillCheckCircleFill className='text-gray-400/80 text-xs ml-1' />
        </Link>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object,
};

export default VideoCard;
