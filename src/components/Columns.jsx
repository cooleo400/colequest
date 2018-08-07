import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Columns = ({ leftColumnChildren, centerColumnChildren, rightColumnChildren, marginBottom }) => {

  const containerClasses = classNames('cols-container', {
    'three-up' : centerColumnChildren !== null,
    [`margin-bottom-${marginBottom}`] : marginBottom
  });

  return (
    <div className={containerClasses} >
      <div className="col">
        {leftColumnChildren}
      </div>
      { centerColumnChildren &&
        <div className="col">
          {centerColumnChildren}
        </div>
      }
      <div className="col">
        {rightColumnChildren}
      </div>
    </div>
  );
}

Columns.propTypes = {
  centerColumnChildren : PropTypes.element,
  leftColumnChildren : PropTypes.element.isRequired,
  marginBottom : PropTypes.oneOf(['small', 'medium', 'large']),
  rightColumnChildren : PropTypes.element.isRequired
}

Columns.defaultProps = {
  centerColumnChildren : null,
  marginBottom : null
}

export default Columns;
