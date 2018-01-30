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
      conctact : false
    };

    this.setSectionRef = this.setSectionRef.bind(this);
  }

  componentDidMount() {
    const { route } = this.props;
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
    return (
      <div>
        <img className="logo" src={logoImage} />
        <div className="content">
          <Section title="About" className="about" isOpen={this.state.about} ref={ref => this.setSectionRef('about', ref)} >
            <About />
          </Section>
          <Section title="Shows" className="shows" isOpen={this.state.shows} ref={ref => this.setSectionRef('shows', ref)}>
            <Shows fetchShows={fetchShows} />
          </Section>
          <Section title="Media" className="media" isOpen={this.state.media} ref={ref => this.setSectionRef('media', ref)}>
            <Media />
          </Section>
          <Section title="Merchandise" className="merchandise" isOpen={this.state.merchandise} ref={ref => this.setSectionRef('merchandise', ref)}>
            <Merchandise />
          </Section>
          <Section title="Contact" className="contact" isOpen={this.state.contact} ref={ref => this.setSectionRef('contact', ref)}>
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
