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
    const sevenElevenVideo = <Video youtubeId="lrk2mBk_Vv0" />;
    const ostrichTherapyVideo = <Video youtubeId="WjJSC8v5bAg" />;
    const waxCyclinderVideo = <Video youtubeId="OCCV3hsgSyM" />;
    const themeTimeVideo = <Video youtubeId="B6bVcKoctL4" />;
    const doReMiVideo = <Video youtubeId="SPPbG1u4lvU" />;
    const wayOverYonderVideo = <Video youtubeId="Yw5tZtpiYlI" />;
    const bitcoinVideo = <Video youtubeId="k8BI1KWwiTc" />;
    const ostrichVideo = <Video youtubeId="WZ_macH8E1w" />;
    const sweetVideo = <Video youtubeId="NdZ65rBdsWs" />;
    const ifIStillVideo = <Video youtubeId="3XDlPrSyzLk" />;
    const bandAtConveyorPhoto = (
      <a href="#" onClick={this.openModalImageOne} >
        <img src={pressPhotoOne} alt="Press Photo 1" className="display-block" />
      </a>
    );
    return (
      <div>
        <h4 className="highlight text-center">SELF [EN]TITLED</h4>
        <Columns leftColumnChildren={sweetVideo} rightColumnChildren={ifIStillVideo} marginBottom="small" />
        <Columns leftColumnChildren={sevenElevenVideo} rightColumnChildren={ostrichVideo} marginBottom="small" />
        <Columns leftColumnChildren={wayOverYonderVideo} rightColumnChildren={bitcoinVideo} marginBottom="small" />
        <h4 className="text-center">LIVE PERFORMANCES</h4>
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
