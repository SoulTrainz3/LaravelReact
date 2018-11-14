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
    axios.post('/insert-hobby', this.state.input)
    .then(response => {
      console.log('Success', response.data);
      this.setState({
        input: '',
      })
    })
    .catch(error => {
      console.log('Error', error);
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
