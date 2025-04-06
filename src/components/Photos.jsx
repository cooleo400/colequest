import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import Columns from './Columns';

import pressPhotoOne from '../images/2025-jalopy-backyard-1.jpg';
import pressPhotoTwo from '../images/2025-jalopy-outfront.jpg';
import pressPhotoThree from  '../images/matheus-dance-jalopy.jpg';
import pressPhotoFour from '../images/2025-jalopy-backyard-2.jpg';

class Media extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModalImageOne = this.openModal.bind(this, pressPhotoOne);
    this.openModalImageTwo = this.openModal.bind(this, pressPhotoTwo);
    this.openModalImageThree = this.openModal.bind(this, pressPhotoThree);
    this.openModalImageFour = this.openModal.bind(this, pressPhotoFour);
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
    return (
      <div>
        <Columns leftColumnChildren={this.getPhotoElement(pressPhotoOne, this.openModalImageOne)} rightColumnChildren={this.getPhotoElement(pressPhotoTwo, this.openModalImageTwo)} marginBottom="small"/>
        <Columns leftColumnChildren={this.getPhotoElement(pressPhotoThree, this.openModalImageThree)} rightColumnChildren={this.getPhotoElement(pressPhotoFour, this.openModalImageFour)} marginBottom="small"/>
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
