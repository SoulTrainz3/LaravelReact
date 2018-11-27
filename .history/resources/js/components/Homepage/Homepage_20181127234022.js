import React, { Component } from 'react';
import axios from 'axios';
import Input from '../Input/Input';
import profanity from './profanityDB';
import Backdrop from '../Backdrop/Backdrop';

class Homepage extends Component {
  
  state = {
    input: '',
    hasSubmited: false,
    entries: [],
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
    let post;
    if(this.state.input === '') {
      post = {
        value: "Muie PSD",
        profanity: 0,
      }
    }
    post = { 
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
        entries: response.data,
      })
    })
    .catch(error => {
      console.log('Error', error);
    })
  }

  toRender = () => {
    if(!this.state.hasSubmited) {
      return <Input handleInput={this.handleInput} handleSubmit={this.handleSubmit} input={this.state.input}/>;
    }
    return <Backdrop entries={this.state.entries} />;
  }

  render() {
    return this.toRender();
  }
}

export default Homepage;
