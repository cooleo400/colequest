import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => {
  const {
    eventTitle,
    eventLink,
    locationTitle,
    locationLink,
    date,
    time
  } = props;

  return (
    <div className="loader">
      <div>P</div>
      <div>C</div>
      <div>Q</div>
      <div>C</div>
      <div className="color-bg-1">#</div>
    </div>
  );
};

export default Loader;
