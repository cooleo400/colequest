import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import scrollToComponent from 'react-scroll-to-component';
import Section from './components/Section';
import About from './components/About';
import Media from './components/Media';
import Merchandise from './components/Merchandise';
import Contact from './components/Contact';
import Shows from './components/Shows';
import Footer from './components/Footer';
import { submitEmail, fetchShows } from './actions';
import { isShowToday } from './util';
import logoImage from './images/logo.png';
import 'normalize.css';
import 'styles/index.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.sectionRefs = {
      about : null,
      shows : null,
      media : null,
      merchandise : null,
      conctact : null
    };
    this.state = {
      about : false,
      shows : false,
      media : false,
      merchandise : false,
      conctact : false,
      showData : [],
      showHappeningToday : false
    };

    this.setSectionRef = this.setSectionRef.bind(this);
  }

  componentDidMount() {
    const { route } = this.props;
    fetchShows()
      .then(shows => {
        // shows[0].fields.date = '2018-09-16'; //KEEP FOR DEBUGGING
        const showHappeningToday = shows.some((show) => isShowToday(show.fields.date));
        this.setState({ showData : shows, showHappeningToday });
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
      },500);
    }
  }

  setSectionRef(section,ref) {
    this.sectionRefs[section] = ref;
  }

  render() {
    const {
      about,
      shows,
      showData,
      media,
      merchandise,
      contact
    } = this.state;


    return (
      <div>
        <img className="logo" src={logoImage} />
        <div className="content">
        <Section title="About" className="about" isOpen={about} ref={ref => this.setSectionRef('about', ref)}>
            <About />
          </Section>
          <Section title="Shows" className="shows" highlight isOpen={shows} ref={ref => this.setSectionRef('shows', ref)}>
            <Shows shows={showData} />
          </Section>
          <Section title="Media" className="media" isOpen={media} ref={ref => this.setSectionRef('media', ref)}>
            <Media />
          </Section>
          <Section title="Merchandise" className="merchandise" highlight isOpen={merchandise} ref={ref => this.setSectionRef('merchandise', ref)}>
            <Merchandise />
          </Section>
          <Section title="Contact" className="contact" isOpen={contact} ref={ref => this.setSectionRef('contact', ref)}>
            <Contact submitEmail={submitEmail} />
          </Section>
        </div>
        <Footer />
      </div>
    );
  }
};

App.propTypes = {
  route : PropTypes.string
}

App.defaultProps = {
  route : null
}

export default App;
