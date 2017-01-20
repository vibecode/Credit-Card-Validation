import React, { Component } from 'react';
import CreditCardInput from './CreditCardInput';
import './App.css';

class App extends Component {
  render() {
    const types = {
      'Visa': /^4/,
      'MasterCard': /^5[1-5]/,
      'American Express': /^3[47]/
    };

    return (
      <CreditCardInput types={types} />
    );
  }
}

export default App;
