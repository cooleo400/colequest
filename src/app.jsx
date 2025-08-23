import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
import Modal from 'react-modal';
import Header from './components/Header';
import Section from './components/Section';
import About from './components/About';
import Videos from './components/Videos';
import Photos from './components/Photos';
import Merchandise from './components/Merchandise';
import Contact from './components/Contact';
import Shows from './components/Shows';
import Footer from './components/Footer';
import Lyrics from './components/Lyrics';
import Button from './components/Button';
import Headline, { headlineTypes } from './components/Headline';
import Video from './components/Video';
import Link from './components/Link';
import { submitEmail, fetchShows } from './actions';
import { animateTitle, isShowToday } from './util';
import { inTallBuildingsAlbumYTId, linktreeHomegrownLink, bandcampHomegrownLink } from './constants';
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
      lyrics: null,
      contact: null
    };
    this.state = {
      about: false,
      contact: false,
      videos: false,
      photos: false,
      merchandise: false,
      lyrics: false,
      shows: false,
      showData: [],
      showTonight: false,
      isModalOpen: false
    };

    this.showVideo =  false; // !/iPad|iPhone|iPod|Android/.test(navigator.userAgent);

    this.setSectionRef = this.setSectionRef.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSectionToggle = this.handleSectionToggle.bind(this);
  }

  componentDidMount() {
    const { route } = this.props;
    fetchShows()
      .then(shows => {
        // shows[0].fields.date = '2025-04-05'; //KEEP FOR DEBUGGING
        const showTonight = shows.find((show) => isShowToday(show.fields.date) ? show : null);
        this.setState({ showData: shows, showTonight });
        if(showTonight) {
          document.body.classList.add('show-happening-today');
          const title = `${showTonight.fields.eventTitle} in ${showTonight.fields.locationTitle} tonight! `.toUpperCase();
          animateTitle(title);
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

  handleSectionToggle(section, isOpen) {
    // Update section state
    this.setState({ [section]: isOpen });
    
    // Update URL based on section state
    if (isOpen) {
      // Section is opening - update URL immediately
      this.props.history.push(`/${section}`);
    } else {
      // Section is closing - delay URL update to allow animation to complete
      setTimeout(() => {
        this.props.history.push('/');
      }, 1000); // Match the Section component's animationDuration
    }
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
      lyrics,
      contact,
      highlight
    } = this.state;

    return (
      <div>
        <Header showVideo={this.showVideo} />
        <div className="content">
          <Section title="About" className="about" isOpen={about} ref={ref => this.setSectionRef('about', ref)} onToggle={(isOpen) => this.handleSectionToggle('about', isOpen)}>
            <About />
          </Section>
          <Section title="Shows" className="shows" highlight={highlight} isOpen={shows} ref={ref => this.setSectionRef('shows', ref)} onToggle={(isOpen) => this.handleSectionToggle('shows', isOpen)}>
            <Shows shows={showData} />
          </Section>
          <Section title="Videos / Music" className="videos" highlight  isOpen={videos} ref={ref => this.setSectionRef('videos', ref)} onToggle={(isOpen) => this.handleSectionToggle('videos', isOpen)}>
            <Videos />
          </Section>
          <Section title="Photos" className="photos" isOpen={photos} ref={ref => this.setSectionRef('photos', ref)} onToggle={(isOpen) => this.handleSectionToggle('photos', isOpen)}>
            <Photos />
          </Section>
          <Section title="Merchandise" className="merchandise" highlight isOpen={merchandise} ref={ref => this.setSectionRef('merchandise', ref)} onToggle={(isOpen) => this.handleSectionToggle('merchandise', isOpen)}>
            <Merchandise />
          </Section>
          <Section title="Lyrics" className="lyrics" isOpen={lyrics} ref={ref => this.setSectionRef('lyrics', ref)} onToggle={(isOpen) => this.handleSectionToggle('lyrics', isOpen)}>
            <Lyrics />
          </Section>
          <Section title="Contact" className="contact" isOpen={contact} ref={ref => this.setSectionRef('contact', ref)} onToggle={(isOpen) => this.handleSectionToggle('contact', isOpen)}>
            <Contact submitEmail={submitEmail} />
          </Section>
        </div>
        <Footer />
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleCloseModal}
          className="modal"
          overlayClassName="overlay fade-in">
            <Headline type={headlineTypes.SECONDARY} className="highlight">NEW ALBUM - HOMEGROWN</Headline>
            <p>Comes out July 18th on <Link href="http://jalopyrecords.org">Jalopy Records</Link>! In the mean time you can stream and watch music videos for our singles. You can also <Link href={bandcampHomegrownLink}>pre-order the vinyl here</Link>.</p>
            <p className="text-center">Check out our SECOND single, In Tall Buildings, below!</p>
            <Video youtubeId={inTallBuildingsAlbumYTId} />
            <p>
              <Button link={linktreeHomegrownLink} className="text-center full-width-button" external>Pre-order and stream!</Button>
            </p>
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

export default withRouter(App);
