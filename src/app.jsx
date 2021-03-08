import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import scrollToComponent from 'react-scroll-to-component';
import Modal from 'react-modal';
import Header from './components/Header';
import Section from './components/Section';
import About from './components/About';
import Media from './components/Media';
import Merchandise from './components/Merchandise';
import Contact from './components/Contact';
import Shows from './components/Shows';
import Footer from './components/Footer';
import Video from './components/Video';
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
      media: null,
      merchandise: null,
      contact: null
    };
    this.state = {
      about: false,
      contact: false,
      media: false,
      merchandise: false,
      shows: false,
      showData: [],
      showHappeningToday: false,
      isModalOpen: false
    };

    this.showVideo =  !/iPad|iPhone|iPod|Android/.test(navigator.userAgent);

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

    setTimeout(() => {
      this.setState({ isModalOpen: true });
    }, 3000);
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
      media,
      merchandise,
      contact,
      highlight
    } = this.state;

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
          <Section title="Media" className="media" highlight isOpen={media} ref={ref => this.setSectionRef('media', ref)}>
            <Media />
          </Section>
          <Section title="Merchandise" className="merchandise" isOpen={merchandise} ref={ref => this.setSectionRef('merchandise', ref)}>
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
            <h4 className="highlight text-center">CHECKOUT OUR NEW SINGLE</h4>
            <iframe src="https://open.spotify.com/embed/track/204YPUvcaxgAmDPivXib3y" width="100%" height="80" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            <Video youtubeId="Yw5tZtpiYlI" />
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
