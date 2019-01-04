import React from 'react';
import Video from './Video';
import logoImage from '../images/logo.png';

const youtubeId = "tiyWixNSnjk";

const Header = ({ showVideo }) => {
  if(showVideo) {
    return (
      <div className="header">
        <div className="header-video">
          <Video youtubeId={youtubeId} autoPlay />
          <div className="header-content">
            <img className="logo" src={logoImage} />
          </div>
        </div>
        <div className="header-overlay"></div>
      </div>
    );
  } else {
    return (
      <img className="logo" src={logoImage} />
    );
  }
};

export default Header;
