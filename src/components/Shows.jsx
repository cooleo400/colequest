import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Show from './Show';
import Loader from './Loader';


class Shows extends PureComponent {
  constructor(props) {
    super(props);
  }

  renderShowRows() {
    return this.props.shows.map((show, index) => {
      const {
        eventTitle,
        eventLink,
        locationTitle,
        locationLink,
        date,
        time
      } = show.fields;
      return (
        <Show
          eventTitle={eventTitle}
          eventLink={eventLink}
          locationTitle={locationTitle}
          locationLink={locationLink}
          date={date}
          time={time}
          key={`show-${index}`}
      />);
    });
  }

  renderShowsTable() {
    return (
      <div className="dates">
        <div className="dates-row header">
          <div className="dates-col name">Event</div>
          <div className="dates-col location">Location</div>
          <div className="dates-col date">Date</div>
        </div>
        {this.renderShowRows()}
      </div>
    );
  }

  renderFetchedShows() {
    const { shows } = this.props;

    if(shows) {
      if(shows.length > 0){
        return this.renderShowsTable();
      } else {
        return (<p className="text-center">More shows coming soon...</p>);
      }
    } else {
      return (
        <Loader />
      );
    }
  }

  render() {
      return (
        <div>
          <div className="text-center">
            <a href="https://leestavall.com/collections/preorders/products/colequest" target="_blank" className="highlight"><h4 className="margin-top-none margin-bottom-none">Upcoming Leesta Vall Recording session!</h4></a>
            <p><span className="highlight">--------</span><br/>We're doing a special vinyl recording session coming up on <b>Oct&nbsp;17th</b>, visit our <a href="https://leestavall.com/collections/preorders/products/colequest" target="_blank">session page</a> to get your own personalized song!<br/><span className="highlight">___________</span></p>
          </div>
          {this.renderFetchedShows()}
        </div>
      );
  };
};

Shows.propTypes = {
  className : PropTypes.string,
  shows : PropTypes.array
};

Shows.defaultProps = {
  className : '',
  shows : []
};

export default Shows;
