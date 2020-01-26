import React from 'react';

const VideoItem = ({video}) => {
  return (
    <div className="item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        {video.snippet.title}
      <div>
    </div>
  );
};

export {VideoItem as default};
