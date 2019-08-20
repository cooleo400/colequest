import React from 'react';
import PropTypes from 'prop-types';

function Quote({ author, attribution, attributionLink, children }) {
  return (
    <div>
      <p>{ children }</p>
      <p>
        <span className="color-bg-1">{ author }</span>
        {attributionLink && attribution &&
          <span> / <a href={attributionLink} target="_blank"><i>{ attribution }</i></a></span>
        }
        {!attributionLink && attribution &&
          <span> / <i>{ attribution }</i></span>
        }
      </p>
    </div>
  );
}

Quote.propTypes = {
  author : PropTypes.string.isRequired,
  attribution : PropTypes.string,
  attributionLink : PropTypes.string,
  children : PropTypes.string.isRequired
}

Quote.defaultProps = {
  attribution : '',
  attributionLink : null
}

export default Quote;
