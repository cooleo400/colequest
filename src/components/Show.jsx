import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isShowToday, isShowPast } from '../util';
import Moment from 'react-moment';

function renderLink(title, url) {
  return (url) ? <a href={url} target="_blank">{title}</a> : title ;
}

const Show = (props) => {
  const {
    eventTitle,
    eventLink,
    locationTitle,
    locationLink,
    date,
    time
  } = props;

  const todayShow = isShowToday(date)
  const pastShow = isShowPast(date);

  const rowClasses = classNames('dates-row', {
    'strike' : pastShow,
    'today' : todayShow
  });

  return (
    <div className={rowClasses}>
      <div className="dates-col name">{renderLink(eventTitle, eventLink)}</div>
      <div className="dates-col location">{renderLink(locationTitle, locationLink)}</div>
      <div className="dates-col date">
        <Moment date={date} format="MMM Do"/>
        <span className="time">{time}</span>
      </div>
    </div>
  );
};

Show.propTypes = {
  eventTitle : PropTypes.string.isRequired,
  eventLink :  PropTypes.string,
  locationTitle : PropTypes.string.isRequired,
  locationLink : PropTypes.string,
  date : PropTypes.string.isRequired,
  time : PropTypes.string
};

Show.defaultProps = {
  eventLink : null,
  locationLink : null,
  time : ''
};

export default Show;
