import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const statusMap = {
  unsubmitted : 'hide',
  success : 'success',
  failure : 'error',
}

class ContactForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status : statusMap.unsubmitted
    };
    this.handleClick = this.handleClick.bind(this);
  }

  renderStatusMessage() {
    if(this.state.status === statusMap.success) {
      return (
        <div>Got it, you've been added to our email list! <span className="emoji white-smiling-face"></span></div>
      );
    } else {
      return (
        <div>Something didnt work <span className="emoji broken-heart"></span></div>
      );
    }

  }

  handleClick(e) {
    e.preventDefault();
    this.props.submitEmail()
      .then((response) => {
        const newState = (response.success) ? { status : statusMap.success } : { status: statusMap.failure } ;
        this.setState(newState);
      });
  }

  render() {
    const statusMessageClasses = classNames(this.state.status, 'status-message margin-bottom-sm text-center');

    return (
      <form action="subscribe.php" id="invite" method="POST" className="clearfix">
        <p className="text-center">Sign up for our mailing list here:</p>
        <div className={statusMessageClasses}>{this.renderStatusMessage()}</div>
        <input type="email" className="email text-center" placeholder="Enter your email for updates!" />
        <button id="submit" type="submit" className="button submit-email" onClick={this.handleClick} >Sign Up</button>
      </form>
    );
  };
};

ContactForm.propTypes = {
  className : PropTypes.string,
  submitEmail : PropTypes.func.isRequired
};

ContactForm.defaultProps = {
  className : ''
};

export default ContactForm;
