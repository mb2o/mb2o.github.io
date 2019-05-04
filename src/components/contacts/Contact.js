import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete('https://jsonplaceholder.typicode.com/users/' + id);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (error) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
      console.log(error);
    }
  };

  render() {
    const { id, name, email, phone } = this.props;
    const arrow = this.state.showContactInfo ? 'sort-up' : 'sort-down';

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  style={{ cursor: 'pointer' }}
                  className={`fas fa-${arrow}`}
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`/contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h4>
              {this.state.showContactInfo && (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
