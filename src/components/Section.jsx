import React, { PureComponent } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const animationDuration = 1000;

class Section extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open : props.isOpen,
      animationComplete : true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.isOpen !== nextProps.isOpen){
      this.handleClick();
    }
  }

  handleClick() {
    this.setState({ open : !this.state.open, animationComplete : false });
    setTimeout(() => {
      this.setState({ animationComplete : true });
    },animationDuration);
  }

  renderChildren() {
    return (this.state.open || !this.state.open && !this.state.animationComplete) ? this.props.children : null ;
  }

  render() {
    const { children, className, highlight, title } = this.props;
    const contentClasses = classNames('section-content', {
      'open' : this.state.open
    });
    const titleClasses = classNames('section-link', {
      highlight : highlight
    });


    return (
      <div className={`section ${className}`} >
        <div className="background-image" />
        <a className={titleClasses} onClick={this.handleClick} >
          <h2 className={(highlight) ? 'highlight' : ''}>{title}</h2>
        </a>
        <div className={contentClasses} >
          <div className="section-content-inner">
            { this.renderChildren() }
          </div>
        </div>
      </div>
    );
  };
};

Section.propTypes = {
  children : PropTypes.element.isRequired,
  className : PropTypes.string,
  highlight : PropTypes.bool,
  isOpen : PropTypes.bool,
  title : PropTypes.string.isRequired
};

Section.defaultProps = {
  className : '',
  highlight : false,
  isOpen : false
};

export default Section;
