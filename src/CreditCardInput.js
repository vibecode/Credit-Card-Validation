import React, { Component } from 'react';

class CreditCardInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  processNumber(number) {
    const text = this.insertSpaces(number).trim();
    const type = this.checkType(number);

    return {text, type};
  }

  insertSpaces(value) {
    return value.replace(/(.{4})/g, '$1 ');
  }

  checkType(value) {
    const types = this.props.types;

    for (let key in types) {
      if (value.match(types[key])) {
        return key;
      }
    }
  }

  onChange(e) {
    const newValue = e.target.value;
    const newNumber = this.filterWhiteSpace(newValue);

    this.setState({
      number: newNumber
    });
  }

  filterWhiteSpace(value) {
    return value.replace(/\s/g, '');
  }

  render() {
    const {text, type} = this.processNumber(this.state.number);

    return (
        <div>
          <input type="text" value={text} onChange={this.onChange} />
          <input type="text" value={type} readOnly />
        </div>
    );
  }
}

export default CreditCardInput;