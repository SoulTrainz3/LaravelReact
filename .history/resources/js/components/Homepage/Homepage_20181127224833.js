import React, { Component } from 'react';
import axios from 'axios';
import Input from '../Input/Input';
import profanity from './profanityDB';

class Homepage extends Component {
  
  state = {
    input: '',
  }
 
  handleInput = (event) => {
    // console.log(event.target.name);
    event.preventDefault();
    this.setState({
      input: event.target.value,

    })
  }


  handleSubmit = (event) => {
    // const _token = document.getElementById('csrf-token').getAttribute('content');
    // console.log(_token);
    // event.preventDefault();
    // if(this.state.input)
    const post = { 
      value: this.state.input,
      profanity: 1,
    }
    // console.log(post);

    axios({
        method: 'post',
        url: '/insert-hobby',
        data: post,
    })
    .then(response => {
      console.log('Ola!', response.data);
      this.setState({
        input: '',
      })
    })
    .catch(error => {
      console.log('Error', error);
    })
  }

  render() {
    return (
      <Input handleInput={this.handleInput} handleSubmit={this.handleSubmit} input={this.state.input}/>
    );
  }
}

export default Homepage;
