import React, { Component } from 'react';
import axios from 'axios';
import Input from '../Input/Input';

class Homepage extends Component {
  
  state = {
    input: '',
  }
 
  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      input: event.target.value,
    })
  }

  handleSubmit = () => {
    axios.post('/get-hobbies', )
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
