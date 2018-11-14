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
    
    this.setState({
      input: '',
    })
  }

  handle

  render() {
    return (
      <Input/>
    );
  }
}

export default Homepage;
