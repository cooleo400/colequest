import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
          {this.renderFetchedShows()}
        </div>
      );
  }
}

Shows.propTypes = {
  className: PropTypes.string,
  shows: PropTypes.array
};

Shows.defaultProps = {
  className: '',
  shows: []
};

export default Shows;
