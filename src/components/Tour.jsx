import React, { PureComponent } from 'react';
import Button, { buttonTypes } from './Button';
import Shows from './Shows';
import Header from './Header';
import { fetchShows, filterShowsByTag } from '../actions';
import { isShowToday } from '../util';

const tourTagId = 'germanyTour2023';

class Tour extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showsData: []
    }
  }

  componentDidMount() {
    fetchShows()
      .then(unfilteredShows => {
        // unfilteredShows[0].fields.date = '2023-03-28'; //KEEP FOR DEBUGGING
        const germanyShows = filterShowsByTag(unfilteredShows, tourTagId);
        const usShows = unfilteredShows.filter((show) => {
          const showTags = show.metadata.tags.map(tag => tag.sys.id);
          return !showTags.includes(tourTagId);
        });
        const showHappeningToday = germanyShows.some((show) => isShowToday(show.fields.date));
        this.setState({
          germanyShows,
          usShows
        });
        if(showHappeningToday) {
          document.body.classList.add('show-happening-today');
        }
      })
      .catch((e) => {
        throw Error(e);
      });
  }

  render() {
    return (
      <div>
        <Header withSocialIcons />
        <div className="tour-page-content" >
          <h2 className="phosphate-font tour-title">Deutschlandtournee 2023</h2>
          <Shows shows={this.state.germanyShows} />
          <h2 className="phosphate-font tour-title">U.S. Shows</h2>
          <Shows shows={this.state.usShows} />
          <Button link={'http://colequest.com'} className="text-center full-width-button more-info" type={buttonTypes.SECONDARY}>More Information</Button>
        </div>
      </div>
    );
  }
}

export default Tour;
