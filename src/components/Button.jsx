import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const buttonTypes = {
  PRIMARY: 'primary-button',
  SECONDARY: 'secondary-button'
}

class Button extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      className,
      ctaLabel,
      external,
      type,
      link,
    } = this.props;

    const classes = classNames('button', type, className);
    const attributes = {
      href: link,
      className: classes
    };

    if(external) {
      attributes['target'] = "_blank";
    }

    return (
      <a {...attributes}>{ctaLabel}</a>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  ctaLabel: PropTypes.string.isRequired,
  external: PropTypes.bool,
  link: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(buttonTypes))
}

Button.defaultProps = {
  className: null,
  external: false,
  type: buttonTypes.PRIMARY
}

export default Button;
