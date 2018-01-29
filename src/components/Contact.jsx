import React from 'react';
import ContactForm from './ContactForm';
import SocialIcon from './SocialIcon';

const Contact = (props) => (
  <div>
    <p className="text-center">Email:<br/> <a href="mailto:info@colequest.com">info@colequest.com</a></p>
    <ContactForm submitEmail={props.submitEmail} />
    <div className="social-container">
      <div className="social-container-md">
        <SocialIcon type="facebook" />
        <SocialIcon type="instagram" />
        <SocialIcon type="twitter" />
        <SocialIcon type="youtube" />
      </div>
      <div className="social-container-md">
        <SocialIcon type="apple" />
        <SocialIcon type="bandcamp" />
        <SocialIcon type="soundcloud" />
        <SocialIcon type="googlePlay" />
      </div>
    </div>
  </div>
);

export default Contact;
