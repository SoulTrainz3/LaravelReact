import React, { Component } from 'react';
import Input from '../Input/Input';

class Homepage extends Component {
  
  state = {
    input: '';
  }
 
  render() {
    return (
      <Input/>
    );
  }
}

export default Homepage;
