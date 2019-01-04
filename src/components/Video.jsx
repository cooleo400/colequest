import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ youtubeId, autoPlay }) => {
  let url = `https://www.youtube.com/embed/${youtubeId}`;
  if(autoPlay) {
    url += `?autoplay=1&mute=1&rel=0&loop=1&playlist=${youtubeId}`;
  }

  return (
    <div className="video-wrapper">
      <iframe className="video" width="560" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
    </div>
  );
}

Video.propsTypes = {
  youtubeId: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool
}

Video.defaultProps = {
  autoPlay: false
}

export default Video;
