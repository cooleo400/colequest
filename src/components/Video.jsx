import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ youtubeId, autoPlay, isNew }) => {
  let url = `https://www.youtube.com/embed/${youtubeId}`;
  if(autoPlay) {
    url += `?autoplay=1&mute=1&rel=0&loop=1&playlist=${youtubeId}`;
  }

  return (
    <div className="video-wrapper is-new-wrapper">
      { isNew && (
          <p className="is-new highlight">NEW</p>
      )}
      <iframe className="video" width="560" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
    </div>
  );
}

Video.propsTypes = {
  autoPlay: PropTypes.bool,
  isNew: PropTypes.bool,
  youtubeId: PropTypes.string.isRequired,
}

Video.defaultProps = {
  autoPlay: false,
  isNew: false
}

export default Video;
