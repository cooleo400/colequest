import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const buttonTypes = {
  PRIMARY: 'primary-button',
  SECONDARY: 'secondary-button'
}

class Link extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      className,
      children,
      external,
      type,
      href,
    } = this.props;

    const classes = classNames(type, className);
    const attributes = {
      href,
      className: classes
    };

    if(external) {
      attributes['target'] = "_blank";
    }

    return (
      <a {...attributes}>{children}</a>
    );
  }
}

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  external: PropTypes.bool,
  href: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(buttonTypes))
}

Link.defaultProps = {
  className: null,
  external: true,
  type: buttonTypes.PRIMARY
}

export default Link;
