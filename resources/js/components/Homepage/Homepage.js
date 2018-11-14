import React, { Component } from 'react';
import axios from 'axios';
import Input from '../Input/Input';

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
    const _token = document.getElementById('csrf-token').getAttribute('content');
    // console.log(_token);
    const post = this.state.input;
    // console.log(post);

    axios({
        method: 'post',
        url: '/insert-hobby',
        data: post,
        headers: {
            'X-CSRF-TOKEN': _token,
        },
    })
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

  render() {
    return (
      <Input handleInput={this.handleInput} handleSubmit={this.handleSubmit} input={this.state.input}/>
    );
  }
}

export default Homepage;
