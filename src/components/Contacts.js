import React, { Component, Fragment } from 'react';

import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends Component {
  deleteContact = id => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <Fragment>
              {value.contacts.map(contact => (
                <Contact
                  key={contact.id}
                  {...contact}
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
