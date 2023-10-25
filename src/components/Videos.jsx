import PropTypes from 'prop-types';
import { VideoCard, ChannelCard } from '../components';

const Videos = ({ videos, gridClass }) => {
  if (!videos) return <p className='text-white/80 text-2xl'>Loading...</p>;
  
  return (
    <div className={gridClass}>
      {videos.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

Videos.propTypes = {
  videos: PropTypes.array,
  gridClass: PropTypes.string
};

export default Videos;
