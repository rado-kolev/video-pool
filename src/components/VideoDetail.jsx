import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Videos } from '../components';
import { Link } from 'react-router-dom';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  // Fetch video details and related videos when the component mounts or the video ID changes
  useEffect(() => {
    
    // Fetch video details (snippet and statistics) for the given video ID
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    // Fetch related videos based on the given video ID
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  // If video details are not yet available, display a loading message
  if (!videoDetail?.snippet)
    return <p className='text-white/80 text-2xl'>Loading...</p>;

  // Extract video details for easy access
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div className='w-full flex flex-col lg:flex-row p-4 xl:px-20 2xl:px-32'>
      <div
        id='video-player'
        className='flex-grow w-full flex-1 pb-4 bg-[#2d2d2d]'
      >
        <div className='relative cursor-auto' style={{ paddingTop: '56.25%' }}>

          {/* Display the video using ReactPlayer with specified URL */}
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className='absolute top-0 left-0 w-full h-full'
            width='100%'
            height='100%'
            controls={true}
          />
        </div>
        <div className='flex flex-col justify-between text-gray-300/80'>
          <h2 className='text-white font-bold text-2xl py-4'>{title}</h2>
          <div className='flex flex-col sm:flex-row justify-between'>
            <Link
              to={`/channel/${channelId}`}
              className='flex items-center font-bold text-lg mb-4 sm:mb-0'
            >
              <p>{channelTitle}</p>
              <BsFillCheckCircleFill className='text-gray-300/80 text-xs ml-1' />
            </Link>
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-8'>
              <p className='text-white/90'>
                {parseInt(viewCount).toLocaleString()} views
              </p>
              <p className='text-white/90'>
                {parseInt(likeCount).toLocaleString()} likes
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id='playlist'
        className='w-full lg:w-72 xl:w-80 2xl:w-[350px] lg:pl-6 mt-12 lg:mt-0'
      >
        <Videos
          videos={videos}
          gridClass='grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 '
        />
      </div>
    </div>
  );
};

export default VideoDetail;
