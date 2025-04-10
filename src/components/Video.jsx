import React from 'react';
import PropTypes from 'prop-types';
import WithNew from './WithNew';

const Video = ({ youtubeId, autoPlay, isNew, url: urlOverride }) => {
  let url = `https://www.youtube.com/embed/${youtubeId}`;
  if(autoPlay) {
    url += `?autoplay=1&mute=1&rel=0&loop=1&playlist=${youtubeId}`;
  }

  if(urlOverride) {
    url = urlOverride;
  }

  return (
    <WithNew className="video-wrapper" isNew={isNew} >
      <iframe className="video" width="560" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
    </WithNew>
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
