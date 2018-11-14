import React, { Component } from 'react';
import Input from '../Input/Input';

class Homepage extends Component {
  
  state = {
    input: '',
    entrie: '',
  }
 
  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      input: event.target.value,
    })
  }

  handleSubmit = () => {
    
  }

  render() {
    return (
      <Input/>
    );
  }
}

export default Homepage;
