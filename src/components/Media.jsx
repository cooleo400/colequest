import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import Columns from './Columns';
import Video from './Video';
import SpotifyEmbed from './SpotifyEmbed';
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
    const sevenElevenVideo = <Video youtubeId="lrk2mBk_Vv0" isNew />;
    const ostrichTherapyVideo = <Video youtubeId="WjJSC8v5bAg" />;
    const waxCyclinderVideo = <Video youtubeId="OCCV3hsgSyM" />;
    const themeTimeVideo = <Video youtubeId="B6bVcKoctL4" />;
    const doReMiVideo = <Video youtubeId="SPPbG1u4lvU" />;
    const wayOverYonderVideo = <Video youtubeId="Yw5tZtpiYlI" />;
    const bitcoinVideo = <Video youtubeId="k8BI1KWwiTc" />;
    const ostrichVideo = <Video youtubeId="WZ_macH8E1w" />;
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

    return (
      <div>
        <h4 className="highlight text-center">NEW SINGLES!</h4>
        <Columns leftColumnChildren={sevenElevenVideo} rightColumnChildren={ostrichVideo} marginBottom="medium" />
        <Columns leftColumnChildren={wayOverYonderVideo} rightColumnChildren={bitcoinVideo} marginBottom="medium" />
        <h4 className="text-center">GREAT OLDIES</h4>
        <Columns leftColumnChildren={doReMiVideo} rightColumnChildren={themeTimeVideo} marginBottom="small" />
        <Columns leftColumnChildren={ostrichTherapyVideo} rightColumnChildren={waxCyclinderVideo} marginBottom="small" />
        <Columns centerColumnChildren={bandAtConveyorPhoto} marginBottom="small"/>
        <div className="social-container">
          <div className="social-container-sm">
            <SocialIcon type="spotify-se" />
            <SocialIcon type="apple-se" />
            <SocialIcon type="youtube" />
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
