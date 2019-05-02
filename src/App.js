import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';

import Contact from './components/Contact';
import Header from './components/Header';

const App = () => (
  <div>
    <Header branding="Contact Manager" />
    <div className="container">
      <Contact name="John Doe" email="jdoe@example.com" phone="555-555-5555" />
      <Contact
        name="Karen Smith"
        email="ksmith@example.com"
        phone="555-213-6666"
      />
    </div>
  </div>
);

export default App;
