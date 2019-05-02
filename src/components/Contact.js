import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  render() {
    const { name, email, phone } = this.props;
    const arrow = this.state.showContactInfo ? 'sort-up' : 'sort-down';

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            className={`fas fa-${arrow}`}
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })
            }
          />
        </h4>
        {this.state.showContactInfo && (
          <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
          </ul>
        )}
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
