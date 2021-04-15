import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const elementTypes = {
  ONE: 'h1',
  TWO: 'h2',
  THREE: 'h3',
  FOUR: 'h4',
};

export const headlineTypes = {
  PRIMARY: 'primary-headline',
  SECONDARY: 'secondary-headline'
};

class Headline extends PureComponent {
  constructor(props){
    super(props);
  }
  render() {
    const {
      className,
      children,
      element,
      type
    } = this.props;
    const Element = element;
    const classes = classNames('text-center', type, className);

    return (
      <Element className={classes}>{children}</Element>
    );
  }
}

Headline.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOf(Object.values(elementTypes)),
  type: PropTypes.oneOf(Object.values(headlineTypes))
}

Headline.defaultProps = {
  className: null,
  element: elementTypes.FOUR,
  type: headlineTypes.PRIMARY
}

export default Headline;
