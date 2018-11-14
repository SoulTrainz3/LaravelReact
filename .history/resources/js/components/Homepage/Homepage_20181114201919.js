import React, { Component } from 'react';
import Input from '../Input/Input';

class Homepage extends Component {
  
  state = {
    input: '',
    entrie: '',
  }
 
  handleInput = (event) => {
    
  }

  render() {
    return (
      <Input/>
    );
  }
}

export default Homepage;
