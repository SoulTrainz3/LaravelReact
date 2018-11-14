import React, { Component } from 'react';
import Input from '../Input/Input';

class Homepage extends Component {
  
  state = {
    input: '',
    entrie: '',
  }
 
  

  render() {
    return (
      <Input/>
    );
  }
}

export default Homepage;
