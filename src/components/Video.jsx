import React from 'react';

const Video = ({ youtubeId }) => (
  <div className="video-wrapper">
    <iframe className="video" width="560" height="315" src={`https://www.youtube.com/embed/${youtubeId}`} frameBorder="0" allowFullScreen></iframe>
  </div>
);

export default Video;
