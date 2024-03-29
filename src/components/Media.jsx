import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import Columns from './Columns';
import Video from './Video';
import SocialIcon from './SocialIcon';
import {
  ostrichYouTubeId,
  bitcoinVideoYouTubeId,
  wayOverYonderVideoYouTubeId,
  sevenElevenVideoYouTubeId,
  sweetLittleGirlVideoYouTubeId,
  ifIStillVideoYouTubeId
} from '../constants';

import pressPhotoOne from '../images/2023-press.jpg';
import pressPhotoTwo from '../images/matheus-dance-jalopy.jpg';
import pressPhotoThree from '../images/four-boys-jalopy.jpg';

class Media extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModalImageOne = this.openModal.bind(this, pressPhotoOne);
    this.openModalImageTwo = this.openModal.bind(this, pressPhotoTwo);
    this.openModalImageThree = this.openModal.bind(this, pressPhotoThree);
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

  getPhotoElement(src, onClick, alt = 'Press Photo') {
    return (
      <a href="#" onClick={onClick} >
        <img src={src} alt={alt} className="display-block" />
      </a>
    )
  }

  render() {
    const sevenElevenVideo = <Video youtubeId={sevenElevenVideoYouTubeId} />;
    const ostrichTherapyLiveVideo = <Video youtubeId="WjJSC8v5bAg" />;
    const waxCyclinderVideo = <Video youtubeId="OCCV3hsgSyM" />;
    const themeTimeVideo = <Video youtubeId="B6bVcKoctL4" />;
    const doReMiVideo = <Video youtubeId="SPPbG1u4lvU" />;
    const wayOverYonderVideo = <Video youtubeId={wayOverYonderVideoYouTubeId} />;
    const bitcoinVideo = <Video youtubeId={bitcoinVideoYouTubeId} />;
    const ostrichVideo = <Video youtubeId={ostrichYouTubeId} />;
    const sweetVideo = <Video youtubeId={sweetLittleGirlVideoYouTubeId} />;
    const ifIStillVideo = <Video youtubeId={ifIStillVideoYouTubeId} />;

    return (
      <div>
        <h4 className="text-center">SELF [EN]TITLED</h4>
        <Columns leftColumnChildren={sweetVideo} rightColumnChildren={ifIStillVideo} marginBottom="small" />
        <Columns leftColumnChildren={sevenElevenVideo} rightColumnChildren={ostrichVideo} marginBottom="small" />
        <Columns leftColumnChildren={wayOverYonderVideo} rightColumnChildren={bitcoinVideo} marginBottom="small" />
        <h4 className="text-center">LIVE PERFORMANCES</h4>
        <Columns leftColumnChildren={doReMiVideo} rightColumnChildren={themeTimeVideo} marginBottom="small" />
        <Columns leftColumnChildren={ostrichTherapyLiveVideo} rightColumnChildren={waxCyclinderVideo} marginBottom="small" />
        <h4 className="text-center">Press Photos</h4>
        <Columns leftColumnChildren={this.getPhotoElement(pressPhotoOne, this.openModalImageOne)} rightColumnChildren={this.getPhotoElement(pressPhotoTwo, this.openModalImageTwo)} marginBottom="small"/>
        <Columns leftColumnChildren={this.getPhotoElement(pressPhotoThree, this.openModalImageThree)} marginBottom="small"/>
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
