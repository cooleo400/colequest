import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Columns = (props) => {
  const { leftColumnChildren, centerColumnChildren, rightColumnChildren } = props;

  const containerClasses = classNames('cols-container', {
    'three-up' : centerColumnChildren !== null
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
  leftColumnChildren : PropTypes.element.isRequired,
  centerColumnChildren : PropTypes.element,
  rightColumnChildren : PropTypes.element.isRequired,
}

Columns.defaultProps = {
  centerColumnChildren : null,
}

export default Columns;
