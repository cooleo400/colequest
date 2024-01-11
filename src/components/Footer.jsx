import React from 'react';
// import Columns from './Columns';
import SocialIcon from './SocialIcon';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-container-md">
        <SocialIcon type="facebook" />
        <SocialIcon type="instagram" />
        <SocialIcon type="youtube" />
        <SocialIcon type="email" />
      </div>
      <div className="footer-copy text-center">
        <p className="margin-bottom-none">Copyright © 2018 ColeQuest.com <sup>.</sup> All rights reserved</p>
        <p className="margin-top-none">See more at <a href="http://colerotante.com" target="_blank">ColeRotante.com</a></p>
      </div>
    </div>
  );
};

export default Footer;
