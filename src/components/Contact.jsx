import React from 'react';
import ContactForm from './ContactForm';
import SocialIcon from './SocialIcon';
import Button, {buttonTypes} from './Button';

const Contact = (props) => (
  <div>
    <div className="text-center margin-bottom-md">
      <Button
        type={buttonTypes.PRIMARY}
        link="http://colequest.com/booking"
        external
        className="inline-block"
      >
        Book the band
      </Button>
    </div>
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
