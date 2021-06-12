import React from 'react';
import Video from './Video';
import logoImage from '../images/front-cover.jpg';

const youtubeId = "3-gEYvrN4F8";

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
    return (
      <img className="logo" src={logoImage} />
    );
  }
};

export default Header;
