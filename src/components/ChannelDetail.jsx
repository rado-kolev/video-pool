import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { ChannelCard, Videos } from '../components';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState();

  const { id } = useParams();

  useEffect(() => {
    // Fetch channel information by ID and set it to the state.
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    // Fetch videos associated with the channel and set them to the state.
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <div>
      <div>
        {/* Background gradient for the top of the channel detail page. */}
        <div className='z-10 h-[300px] bg-gradient-to-r from-red-400 to-red-900'></div>
        {/* Render the ChannelCard component with channel details. */}
        <ChannelCard channelDetail={channelDetail} />
      </div>
      <div className='flex p-4 mt-6'>
        {/* Render the Videos component with videos associated with the channel. */}
        <Videos
          videos={videos}
          gridClass='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'
        />
      </div>
    </div>
  );
};

export default ChannelDetail;
