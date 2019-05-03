import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';

import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import { Provider } from './context';

const App = () => (
  <Provider>
    <div>
      <Header branding="Contact Manager" />
      <div className="container">
        <Contacts />
      </div>
    </div>
  </Provider>
);

export default App;
