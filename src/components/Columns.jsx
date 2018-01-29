import React from 'react';
import PropTypes from 'prop-types';

const Columns = (props) => {
  const { leftColumnChildren, rightColumnChildren } = props;
  return (
    <div className="cols-container">
      <div className="col">
        {leftColumnChildren}
      </div>
      <div className="col">
        {rightColumnChildren}
      </div>
    </div>
  );
}

Columns.propTypes = {
  leftColumnChildren : PropTypes.element.isRequired,
  rightColumnChildren : PropTypes.element.isRequired,
}

export default Columns;
