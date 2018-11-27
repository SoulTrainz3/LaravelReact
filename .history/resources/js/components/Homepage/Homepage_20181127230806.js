import React, { Component } from 'react';
import axios from 'axios';
import Input from '../Input/Input';
import profanity from './profanityDB';

class Homepage extends Component {
  
  state = {
    input: '',
    hasSubmited: false,
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
    event.preventDefault();
    let profanity2 = 1;
    if(profanity.includes(this.state.input)) {
      console.log('Includes');
      profanity2 = 0;
    }
    const post = { 
      value: this.state.input,
      profanity: profanity2,
    }
    // console.log(post);

    axios({
        method: 'post',
        url: '/insert-hobby',
        data: post,
    })
    .then(response => {
      console.log(response.data);
      this.setState({
        input: '',
        hasSubmited: true,
      })
    })
    .catch(error => {
      console.log('Error', error);
    })
  }

  toRender = () => {
    if(this.state.hasSubmited) {
      return 
    }
  }

  render() {
    return (
      this.state.hasSubmited ? <h1>Submitted!</h1> : 
    );
  }
}

export default Homepage;
