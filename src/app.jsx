import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import scrollToComponent from 'react-scroll-to-component';
import Modal from 'react-modal';
import Columns from './components/Columns';
import Header from './components/Header';
import Section from './components/Section';
import About from './components/About';
import Videos from './components/Videos';
import Photos from './components/Photos';
import Merchandise from './components/Merchandise';
import Contact from './components/Contact';
import Shows from './components/Shows';
import Footer from './components/Footer';
import Video from './components/Video';
import SpotifyEmbed from './components/SpotifyEmbed';
import { submitEmail, fetchShows } from './actions';
import { isShowToday } from './util';
import 'normalize.css';
import 'styles/index.scss';

Modal.setAppElement('#app');

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.sectionRefs = {
      about: null,
      shows: null,
      videos: null,
      photos: null,
      merchandise: null,
      contact: null
    };
    this.state = {
      about: false,
      contact: false,
      videos: false,
      photos: false,
      merchandise: false,
      shows: false,
      showData: [],
      showHappeningToday: false,
      isModalOpen: false
    };

    this.showVideo =  false; // !/iPad|iPhone|iPod|Android/.test(navigator.userAgent);

    this.setSectionRef = this.setSectionRef.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    const { route } = this.props;
    fetchShows()
      .then(shows => {
        // shows[0].fields.date = '2018-09-16'; //KEEP FOR DEBUGGING
        const showHappeningToday = shows.some((show) => isShowToday(show.fields.date));
        this.setState({ showData: shows, showHappeningToday });
        if(showHappeningToday) {
          document.body.classList.add('show-happening-today');
        }
      })
      .catch((e) => {
        throw Error(e);
      });

    if(route) {
      const newState = Object.assign({}, this.state);
      newState[route] = true;
      this.setState(newState);
      setTimeout(() => {
        scrollToComponent(this.sectionRefs[route], { offset: 0, align: 'top', duration: 500, ease: 'inCirc' });
      }, 500);
    }

    // Keep around to display modal
    // setTimeout(() => {
    //   this.setState({ isModalOpen: true });
    // }, 5000);
  }

  setSectionRef(section, ref) {
    this.sectionRefs[section] = ref;
  }

  handleCloseModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const {
      about,
      shows,
      showData,
      videos,
      photos,
      merchandise,
      contact,
      highlight
    } = this.state;
    const sevenElevenVideo = <Video youtubeId="lrk2mBk_Vv0" />;

    return (
      <div>
        <Header showVideo={this.showVideo} />
        <div className="content">
          <Section title="About" className="about" isOpen={about} ref={ref => this.setSectionRef('about', ref)}>
            <About />
          </Section>
          <Section title="Shows" className="shows" highlight={highlight} isOpen={shows} ref={ref => this.setSectionRef('shows', ref)}>
            <Shows shows={showData} />
          </Section>
          <Section title="Videos / Music" className="videos" isOpen={videos} ref={ref => this.setSectionRef('videos', ref)}>
            <Videos />
          </Section>
          <Section title="Photos" className="photos" isOpen={photos} ref={ref => this.setSectionRef('photos', ref)}>
            <Photos />
          </Section>
          <Section title="Merchandise" className="merchandise" highlight isOpen={merchandise} ref={ref => this.setSectionRef('merchandise', ref)}>
            <Merchandise />
          </Section>
          <Section title="Contact" className="contact" isOpen={contact} ref={ref => this.setSectionRef('contact', ref)}>
            <Contact submitEmail={submitEmail} />
          </Section>
        </div>
        <Footer />
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleCloseModal}
          className="modal"
          overlayClassName="overlay fade-in">
            <h4 className="highlight text-center">CHECKOUT OUR NEW VIDEO!</h4>
            {sevenElevenVideo}
        </Modal>
      </div>
    );
  }
}

App.propTypes = {
  route: PropTypes.string
}

App.defaultProps = {
  route: null
}

export default App;
