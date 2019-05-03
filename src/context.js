import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@example.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        phone: '444-444-4444'
      },
      {
        id: 3,
        name: 'Karen Smith',
        email: 'ksmith@example.com',
        phone: '777-777-7777'
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
