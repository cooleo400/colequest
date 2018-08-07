import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import Columns from './Columns';
import Video from './Video';

import pressPhotoOne from '../images/press-photo-1.jpg';
import pressPhotoTwo from '../images/press-photo-2.jpg';

Modal.setAppElement('#app');

class Media extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen : false
    };

    this.openModalImageOne = this.openModal.bind(this, pressPhotoOne);
    this.openModalImageTwo = this.openModal.bind(this, pressPhotoTwo);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  openModal(image, event) {
    event.preventDefault();
    this.setState({
      modalIsOpen : true,
      image
    });
  }

  handleCloseModal() {
    this.setState({
      modalIsOpen : false
    });
  }

  render() {
    const leftImage = (
      <a href="#" onClick={this.openModalImageOne} >
        <img src={pressPhotoOne} alt="Press Photo 1" className="display-block" />
      </a>
    );
    const rightImage = (
      <a href="#" onClick={this.openModalImageTwo}>
        <img src={pressPhotoTwo} alt="Press Photo 2" className="display-block" />
      </a>
    );
    const leftVideoOne = (<Video youtubeId="VYWtaZklgWM" />);
    const rightVideoOne = (<Video youtubeId="OCCV3hsgSyM" />);
    const leftVideoTwo = (<Video youtubeId="l8GYgHTMue0" />);
    const rightVideoTwo = (<Video youtubeId="a-2fJTCJ41Y" />);

    return (
      <div>
        <Columns leftColumnChildren={leftImage} rightColumnChildren={rightImage} marginBottom="small" />
        <Columns leftColumnChildren={leftVideoOne} rightColumnChildren={rightVideoOne} marginBottom="small" />
        <Columns leftColumnChildren={leftVideoTwo} rightColumnChildren={rightVideoTwo} marginBottom="small" />
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
