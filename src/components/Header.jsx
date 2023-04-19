import React from 'react';
import Video from './Video';
import Button from './Button';
import SocialIcon from './SocialIcon';

const youtubeId = "po1zxZc6qqI";
const youtubeLink = `https://youtu.be/${youtubeId}`;

const Header = ({ showVideo, withSocialIcons = false }) => {
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
      <div className="tour-logo">
        <div className="title-wrapper">
          <h1 className="phosphate-font first">Cole Quest</h1>
          <p className="phosphate-font">and the</p>
          <h1 className="phosphate-font last">City Pickers</h1>
        </div>
        {withSocialIcons && (
          <div className="social-container">
            <div className="social-container-md">
              <SocialIcon type="instagram" />
              <SocialIcon type="facebook" />
              <SocialIcon type="spotify-se" />
              <SocialIcon type="apple-se" />
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Header;
