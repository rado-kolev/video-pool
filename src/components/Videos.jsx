import PropTypes from 'prop-types';
import VideoCard from './VideoCard';

const Videos = ({ videos }) => {
  if (!videos?.length) return 'Loading...';
  
  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {videos.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {/* {item.id.channelId && <ChannelCard channelDetail={item} />} */}
        </div>
      ))}
    </div>
  );
};

Videos.propTypes = {
  videos: PropTypes.array,
};

export default Videos;
