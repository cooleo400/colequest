import React from 'react';
import PropTypes from 'prop-types';

function Quote({ author, attribution, attributionLink, children }) {
  const attributionElement = attribution && <i>{ attribution }</i>;
  const attributionWithLink = (attributionLink && attribution) ? (
    <a href={attributionLink} target="_blank">{ attributionElement }</a>
  ) : attributionElement;

  return (
    <div>
      <p>{ children }</p>
      <p>
        <span className="color-attribution">{ author }</span>
        {author && attribution &&
          <span> / {attributionWithLink} </span>
        }
        {!author && attribution &&
          (attributionWithLink)
        }
      </p>
    </div>
  );
}

Quote.propTypes = {
  author: PropTypes.string,
  attribution: PropTypes.string,
  attributionLink: PropTypes.string,
  children: PropTypes.string.isRequired
}

Quote.defaultProps = {
  author: null,
  attribution: '',
  attributionLink: null
}

export default Quote;
