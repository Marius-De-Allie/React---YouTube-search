import React from 'react';
// Import custom components.
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
  const renderedList = videos.map((video) => {
    return <VideoItem />
  });
  return (
    <div>
      <VideoItem />
    </div>
  );
};

export default VideoList;
