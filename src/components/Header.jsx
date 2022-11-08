import React from 'react';
import Video from './Video';
import Button from './Button';
import logoImage from '../images/front-cover.jpg';

const youtubeId = "po1zxZc6qqI";
const youtubeLink = 'https://youtu.be/po1zxZc6qqI';

const Header = ({ showVideo }) => {
  if(showVideo) {
    return (
      <div className="header">
        <div className="header-video">
          <Video youtubeId={youtubeId} autoPlay />
          <div className="header-link-container">
            <Button link={youtubeLink} external>Watch with sound!</Button>
          </div>
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
