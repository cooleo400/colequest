import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import Columns from './Columns';
import Video from './Video';
import SocialIcon from './SocialIcon';

import pressPhotoOne from '../images/conveyor-shirts.jpg';
import pressPhotoTwo from '../images/press-photo-1.jpg';

class Media extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModalImageOne = this.openModal.bind(this, pressPhotoOne);
    this.openModalImageTwo = this.openModal.bind(this, pressPhotoTwo);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  openModal(image, event) {
    event.preventDefault();
    this.setState({
      modalIsOpen: true,
      image
    });
  }

  handleCloseModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    const ostrichTherapyVideo = (<Video youtubeId="WjJSC8v5bAg" />);
    const waxCyclinderVideo = (<Video youtubeId="OCCV3hsgSyM" />);
    const themeTimeVideo = (<Video youtubeId="B6bVcKoctL4" />);
    const doReMiVideo = (<Video youtubeId="SPPbG1u4lvU" isNew />);
    const wayOverYonderVideo = (<Video youtubeId="Yw5tZtpiYlI" isNew />);
    const bandAtConveyorPhoto = (
      <a href="#" onClick={this.openModalImageOne} >
        <img src={pressPhotoOne} alt="Press Photo 1" className="display-block" />
      </a>
    );
    // const oklahomaHeadshotsPhoto = (
    //   <a href="#" onClick={this.openModalImageTwo}>
    //     <img src={pressPhotoTwo} alt="Press Photo 2" className="display-block" />
    //   </a>
    // );
    // const bitcoinGamblerSoundCloud = (
    //   <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/667625246&color=%23c82c2f&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"></iframe>
    // );
    // const standingMountainSoundCloud = (
    //   <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/617323221&color=%23c82c2f&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"></iframe>
    // );
    const wayOverYonderSpotifySingle = (
      <iframe src="https://open.spotify.com/embed/track/204YPUvcaxgAmDPivXib3y" width="100%" height="80" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    );
    const newSingleHeader = (
      <div>
        <h4 className="highlight text-center">CHECKOUT OUR NEW SINGLE</h4>
        {wayOverYonderSpotifySingle}
      </div>
    );

    return (
      <div>
        <Columns centerColumnChildren={newSingleHeader} marginBottom="small"/>
        <Columns leftColumnChildren={wayOverYonderVideo} rightColumnChildren={doReMiVideo} marginBottom="small" />
        <Columns leftColumnChildren={ostrichTherapyVideo} rightColumnChildren={themeTimeVideo} marginBottom="small" />
        <Columns leftColumnChildren={waxCyclinderVideo} rightColumnChildren={bandAtConveyorPhoto} marginBottom="small" />
        <div className="social-container">
          <div className="social-container-sm">
            <SocialIcon type="youtube" />
            <SocialIcon type="soundcloud" />
            <SocialIcon type="apple" />
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleCloseModal}
          className="modal"
          overlayClassName="overlay">
            <img src={this.state.image} className="img" />
        </Modal>
      </div>
    );
  }
}

export default Media;
