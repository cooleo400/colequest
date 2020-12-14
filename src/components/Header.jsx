import React from 'react';
import Video from './Video';
import logoImage from '../images/front-cover.jpg';

const youtubeId = "moSbBL3G1ao";

const Header = ({ showVideo }) => {
  if(showVideo) {
    return (
      <div className="header">
        <div className="header-video">
          <Video youtubeId={youtubeId} autoPlay />
        </div>
      </div>
    );
  } else {
    const youtubeLink = `https://youtu.be/${youtubeId}`
    return (
      <a href={youtubeLink} target="_blank">
        <img className="logo" src={logoImage} />
      </a>
    );
  }
};

export default Header;
