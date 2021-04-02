import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const WithNew = ({ children, className, isNew }) => {
  const classes = classNames('is-new-wrapper', className)
  return (
    <div className={classes}>
      { isNew && (
          <p className="is-new highlight">NEW</p>
      )}
      {children}
    </div>
  );
};

WithNew.propTypes = {
  className: PropTypes.string,
  isNew: PropTypes.bool
};

WithNew.defaultProps = {
  className: '',
  isNew: true
}

export default WithNew;
