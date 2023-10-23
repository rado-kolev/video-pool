import {BsFillCheckCircleFill} from 'react-icons/bs'
import PropTypes from 'prop-types';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className='flex flex-col'>
      <a href={`/video/${videoId}`}>
        <img
          src={snippet?.thumbnails?.medium?.url}
          alt={snippet?.title}
          className='rounded-3xl h-full w-full'
        />
      </a>

      <div className='h-24 p-2'>
        <a href={`/video/${videoId}`}>
          <h2 className='text-white/90 font-bold'>
            {snippet?.title.length > 45
              ? `${snippet?.title.slice(0, 45)}...`
              : snippet?.title}
          </h2>
        </a>

        <a
          href={`/channel/${snippet?.channelId}`}
          className='text-gray-400/80 flex items-center'
        >
          <span className='font-semibold'>{snippet?.channelTitle}</span>
          <BsFillCheckCircleFill className='text-gray-400/80 text-xs ml-1' />
        </a>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object,
};

export default VideoCard;
