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
    filter: true,
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
      filter: 0,
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

  handleBack = () => {
    this.setState({
      hasSubmited: false,
    });
  }

  handleFilterChange = () => {
    this.setState({
      filter: !this.state.filter,
    });
  }

  toRender = () => {
    if(!this.state.hasSubmited) {
      return ( 
        <div>
          <span>Safe?</span>
          <input type='checkbox' onChange={this.handleFilterChange} checked={this.state.filter} />
          <Input handleInput={this.handleInput} handleSubmit={this.handleSubmit} input={this.state.input}/>
        </div>
      );
    }
    return ( 
      <div>
        <button className='backButton' onClick={this.handleBack}>Back</button>
        <Backdrop entries={this.state.entries} />
      </div>
    );
  }

  render() {
    return this.toRender();
  }
}

export default Homepage;
