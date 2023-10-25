import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const ChannelCard = ({ channelDetail }) => {
  return (
    <div className='flex justify-center items-center m-auto h-[326px] rounded-3xl w-[356px] md:w-[320px] -mt-[130px]'>

      {/* Create a link to and display channel's detail page */}
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className='flex flex-col justify-center text-center text-white'>
          <img
            src={channelDetail?.snippet?.thumbnails?.medium?.url}
            alt={channelDetail?.snippet?.title}
            className='h-[240px] w-[240px] rounded-full mb-2 border-1 border-[#e3e3e3]'
          />

          {/* Display the channel's title */}
          <div className='flex items-center justify-center my-2'>
            <h6 className='text-gray-300/90 text-xl'>
              {channelDetail?.snippet?.title}
            </h6>
            <BsFillCheckCircleFill className='text-gray-300/90 text-xs ml-1' />
          </div>

          {/* Display the channel's subscriber count if available */}
          {channelDetail?.statistics?.subscriberCount && (
            <p className='text-gray-400/90'>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{' '}
              Subscribers
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

// Define the prop types for the ChannelCard component
ChannelCard.propTypes = {
  channelDetail: PropTypes.object,
};

export default ChannelCard;
