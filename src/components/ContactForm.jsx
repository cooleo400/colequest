import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const statusMap = {
  unsubmitted: 'unsubmitted',
  success: 'success',
  failure: 'error',
}

class ContactForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: statusMap.unsubmitted
    };
    this.handleClick = this.handleClick.bind(this);
  }

  renderStatusMessage(msg) {
    if(this.state.status === statusMap.success) {
      return (
        <div>Got it, you've been added to our email list! <span className="emoji white-smiling-face"></span></div>
      );
    } else if(msg) {
      return (msg);
    } {
      return (
        <div>Something did nawt work, maybe you typed your email wrong? <span className="emoji broken-heart"></span></div>
      );
    }

  }

  handleClick(e) {
    e.preventDefault();
    this.props.submitEmail(this.ref.value)
      .then((response) => {
        const newState = (response && response.success) ? { status: statusMap.success } : { status: statusMap.failure } ;
        this.setState(newState);
        setTimeout(() => {
          this.setState({ status: statusMap.unsubmitted });
        }, 5000);
      });
  }

  render() {
    const statusMessageClasses = classNames(this.state.status, 'status-message margin-bottom-sm text-center');

    return (
      <form action="subscribe.php" id="invite" method="POST" className="clearfix">
        <p className="text-center">Sign up for our mailing list here:</p>
        <div className={statusMessageClasses}>{this.renderStatusMessage()}</div>
        <input type="email" className="email text-center" placeholder="Enter your email for updates!" ref={(ref) => (this.ref = ref)}/>
        <button id="submit" type="submit" className="button primary-button submit-email" onClick={this.handleClick} >Sign Up</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  className: PropTypes.string,
  submitEmail: PropTypes.func.isRequired
};

ContactForm.defaultProps = {
  className: ''
};

export default ContactForm;
