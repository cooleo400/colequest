import React, { PureComponent } from 'react';
import Headline, { headlineTypes } from './Headline';
import Bio from './Bio';
import Link from './Link';
import Columns from './Columns';
import Loader from './Loader';
import Button, { buttonTypes } from './Button';
import Shows from './Shows';
import SocialIcon from './SocialIcon';
import { fetchShows } from '../actions';
import { isShowToday } from '../util';

import pressPhotoOne from '../images/2023-press.jpg';

class Tour extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showsData: []
    }
  }

  componentDidMount() {
    fetchShows()
      .then(shows => {
        // shows[0].fields.date = '2023-03-28'; //KEEP FOR DEBUGGING
        const showHappeningToday = shows.some((show) => isShowToday(show.fields.date));
        console.log(shows);
        this.setState({ showData: shows, showHappeningToday });
        if(showHappeningToday) {
          document.body.classList.add('show-happening-today');
        }
      })
      .catch((e) => {
        throw Error(e);
      });
  }

  renderPhotoLink(src, alt = ''){
    return (
      <a href={src} target="_blank" >
        <img src={src} alt={alt} className="display-block" />
      </a>
    );
  }

  render() {
    return (
      <div>
        <div className="tour-logo">
          <h1 className="phosphate-font first">Cole Quest</h1>
          <p className="phosphate-font">and the</p>
          <h1 className="phosphate-font last">City Pickers</h1>
          <div className="social-container">
            <div className="social-container-md">
              <SocialIcon type="instagram" />
              <SocialIcon type="facebook" />
              <SocialIcon type="spotify-se" />
              <SocialIcon type="apple-se" />
            </div>
          </div>
        </div>

        <div className="tour-page-content" >
          <Shows shows={this.state.showData} />
          <Button link={'http://colequest.com'} className="text-center full-width-button more-info" type={buttonTypes.SECONDARY}>More Information</Button>
        </div>
      </div>
    );
  }
}

export default Tour;
